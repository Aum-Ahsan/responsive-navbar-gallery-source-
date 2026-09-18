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
  
  if (content.includes("Array.from(document.querySelectorAll('input'))")) {
    content = content.split("Array.from(document.querySelectorAll('input'))").join("Array.from(e.currentTarget.closest('.w-full') ? e.currentTarget.closest('.w-full').querySelectorAll('input') : document.querySelectorAll('input'))");
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
}
console.log('Changed files:', changedCount);
