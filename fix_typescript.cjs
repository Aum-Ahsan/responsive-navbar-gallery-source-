const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components', 'payment-processes');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Fix 1: duplicate attributes on inputs
  const inputRegex = /<input[^>]+>/g;
  content = content.replace(inputRegex, (match) => {
    let newTag = match;
    // For any attribute, we keep only the first occurrence.
    // Attributes to dedup: pattern, title, maxLength, required, type, placeholder, value, onChange, className, onInput
    const attrsToDedup = ['pattern', 'title', 'maxLength', 'required', 'onInput', 'type'];
    
    for (const attr of attrsToDedup) {
      if (attr === 'required') {
         // match ' required ' or ' required'
         const reqRegex = /\srequired(?=[\s>])/g;
         let matches = [...newTag.matchAll(reqRegex)];
         if (matches.length > 1) {
             // Keep the first one, remove the rest
             for (let i = 1; i < matches.length; i++) {
                 // Replace the specific match by index is tricky, let's just replace all and add one back
                 newTag = newTag.replace(reqRegex, '');
             }
             if (matches.length > 0 && !newTag.match(reqRegex)) {
                newTag = newTag.replace('<input', '<input required');
             }
         }
      } else {
         // match attr="..." or attr={...}
         // This is a naive regex for attributes but should work for our generated duplicates
         const attrRegex = new RegExp(`\\s${attr}=(?:"[^"]*"|\\{[^}]+\\})`, 'g');
         let matches = [...newTag.matchAll(attrRegex)];
         if (matches.length > 1) {
             let firstMatch = matches[0][0];
             // Remove all occurrences
             newTag = newTag.replace(attrRegex, '');
             // Inject the first one back right after <input
             newTag = newTag.replace('<input', `<input${firstMatch}`);
         }
      }
    }
    return newTag;
  });

  // Fix 2: TypeScript expected 0 arguments but got 1 for originalHandler(e)
  // Our generated code: if (typeof originalHandler === 'function') originalHandler(e);
  // We change it to: if (typeof originalHandler === 'function') (originalHandler as Function)(e);
  // Or simply remove `e` because original handlers were mostly () => { ... }
  // Wait, if it's `(e) => { e.preventDefault(); ... }`, they might need `e`.
  // Casting is safest: (originalHandler as any)(e)
  content = content.replace(/if \(typeof originalHandler === 'function'\) originalHandler\(e\);/g, "if (typeof originalHandler === 'function') (originalHandler as any)(e);");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log('Fixing TypeScript errors...');
processDirectory(baseDir);
console.log('Done.');
