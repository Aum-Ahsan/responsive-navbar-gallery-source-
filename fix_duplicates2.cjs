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

  // Find all input tags
  content = content.replace(/<input([^>]+)>/g, (match, innerProps) => {
     // We will manually parse the attributes
     // Regex to match attr="value" or attr={value}
     const attrRegex = /([a-zA-Z0-9_]+)=(?:"([^"]*)"|\{([^}]+)\})/g;
     
     let seenAttrs = new Set();
     let newInnerProps = '';
     let lastIndex = 0;
     
     let m;
     while ((m = attrRegex.exec(innerProps)) !== null) {
        const attrName = m[1];
        const fullMatch = m[0];
        
        // Add the whitespace/text before this attribute
        newInnerProps += innerProps.substring(lastIndex, m.index);
        
        if (seenAttrs.has(attrName)) {
           // Skip it (duplicate)
        } else {
           seenAttrs.add(attrName);
           newInnerProps += fullMatch;
        }
        
        lastIndex = attrRegex.lastIndex;
     }
     
     // Add any trailing text
     newInnerProps += innerProps.substring(lastIndex);
     
     // Also dedup boolean attributes like 'required'
     let finalProps = newInnerProps;
     let reqCount = 0;
     finalProps = finalProps.replace(/\brequired\b/g, () => {
         reqCount++;
         if (reqCount === 1) return 'required';
         return '';
     });

     return `<input${finalProps}>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log('Fixing all duplicate attributes robustly...');
processDirectory(baseDir);
console.log('Done.');
