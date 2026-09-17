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

  // We have multiple exact duplicate strings. We'll just replace the specific broken literal strings that my add_strict_validation.cjs injected multiple times.
  
  const replacements = [
    'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only" ',
    'pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number" ',
    'pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" ',
    'pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" ',
    'pattern="\\\\d{5}" maxLength={5} title="5 digit zip code" ',
    
    // Also without trailing space just in case
    'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"',
    'pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"',
    'pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"',
    'pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"',
    'pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"',
  ];

  // We will iterate over all inputs and if they contain these exact literal strings, we will keep ONE and remove the rest.
  const inputRegex = /<input[^>]+>/g;
  content = content.replace(inputRegex, (match) => {
    let newTag = match;
    for (const repl of replacements) {
       // Escape for string literal match if we use split
       const parts = newTag.split(repl);
       if (parts.length > 2) {
          // It appeared more than once. We reconstruct it with just one instance.
          newTag = parts.join(''); // removed all
          // Add one back right after <input
          newTag = newTag.replace('<input', `<input ${repl} `);
       } else if (parts.length === 2) {
          // It appeared exactly once. 
          // Do we want to check if the proper pattern also exists?
          // For example, pattern="\\d{5}" AND pattern="\\\\d{5}".
          // If so, we should remove pattern="\\\\d{5}" entirely.
          
          const properPattern1 = 'pattern="[a-zA-Z\\s\\-]+"';
          const properPattern2 = 'pattern="[\\d\\s]{16,19}"';
          const properPattern3 = 'pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})"';
          const properPattern4 = 'pattern="\\d{3,4}"';
          const properPattern5 = 'pattern="\\d{5}"';
          
          if (newTag.includes(properPattern1) || newTag.includes(properPattern2) || 
              newTag.includes(properPattern3) || newTag.includes(properPattern4) || 
              newTag.includes(properPattern5)) {
              newTag = parts.join(''); // remove the bad double slash one entirely!
          }
       }
    }
    return newTag;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log('Fixing duplicate pattern attributes...');
processDirectory(baseDir);
console.log('Done.');
