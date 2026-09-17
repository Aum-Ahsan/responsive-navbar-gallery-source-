const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components', 'payment-processes');
let modifiedFiles = 0;

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

  // We want to match buttons with onClick and inner text containing Continue, Next, Pay, Place Order, Submit
  // We use [\\s\\S]*? to match across newlines inside the button.
  const buttonRegex = /<button([^>]*)onClick=\{([^}]+)\}([^>]*)>([\s\S]*?(?:Continue|Next Step|Next|Proceed|Pay|Place Order|Submit|Confirm)[\s\S]*?)<\/button>/gi;
  
  content = content.replace(buttonRegex, (match, prefix, onClickLogic, suffix, innerText) => {
    // Skip if it's already modified or if it's a reset/back button
    if (onClickLogic.includes('reportValidity')) return match;
    if (onClickLogic.includes('setIsSuccess(false)')) return match;
    if (innerText.toLowerCase().includes('back')) return match;
    
    // Some onClick logic might be just a function reference `nextStep`, or an arrow function `() => setStep(2)`
    // We wrap it safely
    const newOnClick = `(e) => {
      const inputs = Array.from(document.querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = ${onClickLogic};
      if (typeof originalHandler === 'function') originalHandler(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }`;

    return `<button${prefix}onClick={${newOnClick}}${suffix}>${innerText}</button>`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
  }
}

processDirectory(baseDir);
console.log(`Modified ${modifiedFiles} files for button validation.`);
