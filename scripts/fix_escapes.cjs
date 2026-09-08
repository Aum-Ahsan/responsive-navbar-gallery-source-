const fs = require('fs');
const path = require('path');

const processesDir = path.join(__dirname, '..', 'components', 'processes');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace \` with `
  content = content.replace(/\\`/g, '`');
  
  // Replace \$ with $
  content = content.replace(/\\\$/g, '$');
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed ${path.basename(filePath)}`);
}

function traverseAndFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseAndFix(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixFile(fullPath);
    }
  }
}

traverseAndFix(processesDir);
console.log('All files fixed!');
