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

  content = content.replace(/<input([^>]+)>/g, (match, innerProps) => {
     let newProps = innerProps;
     
     // Remove duplicate pattern="..."
     let pCount = 0;
     newProps = newProps.replace(/\spattern="[^"]*"/g, (m) => {
         pCount++;
         return pCount === 1 ? m : '';
     });

     // Remove duplicate title="..."
     let tCount = 0;
     newProps = newProps.replace(/\stitle="[^"]*"/g, (m) => {
         tCount++;
         return tCount === 1 ? m : '';
     });

     // Remove duplicate maxLength={...}
     let mCount = 0;
     newProps = newProps.replace(/\smaxLength=\{[^\}]+\}/g, (m) => {
         mCount++;
         return mCount === 1 ? m : '';
     });

     // Remove duplicate required
     let rCount = 0;
     newProps = newProps.replace(/\srequired\b/g, (m) => {
         rCount++;
         return rCount === 1 ? m : '';
     });
     
     // Remove duplicate onInput={...}
     let iCount = 0;
     newProps = newProps.replace(/\sonInput=\{\(e\) => \{[^}]+\}\}/g, (m) => {
         iCount++;
         return iCount === 1 ? m : '';
     });

     return `<input${newProps}>`;
  });

  // Also fix: Parameter 'e' implicitly has an 'any' type.
  // if (typeof originalHandler === 'function') originalHandler(e);
  // change to: if (typeof originalHandler === 'function') (originalHandler as any)(e);
  content = content.replace(/originalHandler\(e\);/g, '(originalHandler as any)(e);');
  
  // Also fix Waveform import error in PaymentProcess20
  if (filePath.includes('PaymentProcess20')) {
     content = content.replace(/Waveform, /g, '');
     content = content.replace(/Waveform/g, 'Activity');
  }
  
  // Also fix Cannot find name 'Check' in PaymentProcess42
  if (filePath.includes('PaymentProcess42') && !content.includes('import { Check')) {
     content = content.replace('import { CreditCard,', 'import { CreditCard, Check,');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log('Fixing all typescript issues generically...');
processDirectory(baseDir);
console.log('Done.');
