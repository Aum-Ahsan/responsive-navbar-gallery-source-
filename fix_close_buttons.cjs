const fs = require('fs');
const path = require('path');
const dir = 'e:/responsive-navbar-gallery-source - Copy/components/payment-processes';

function walk(directory) {
  let files = [];
  const items = fs.readdirSync(directory);
  for (const item of items) {
    const fullPath = path.join(directory, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walk(dir);
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace the massive onClick handler for setIs... and setShow...
  content = content.replace(/onClick=\{\(e\)\s*=>\s*\{[\s\S]*?const originalHandler = (\(\)\s*=>\s*(?:set(?:Is|Show)[a-zA-Z0-9_]+|setInterval)\([^)]*\));[\s\S]*?\}\}/g, 'onClick={$1}');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
}
console.log('Changed files:', changedCount);
