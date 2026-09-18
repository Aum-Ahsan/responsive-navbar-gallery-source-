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

  // We want to inject the custom validation logic at the beginning of handlePay
  const validationCode = `
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;
`;

  // Check if it already has alert("Please fill all columns")
  if (!content.includes('alert("Please fill all columns")')) {
    // Inject into handlePay
    content = content.replace(
      /(const handlePay = \([^)]*\) =>\s*\{[\s\S]*?e\.preventDefault\(\);)/,
      `$1${validationCode}`
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
}

console.log('Changed files:', changedCount);
