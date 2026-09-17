const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components', 'payment-processes');

let processedFiles = 0;
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

  // 1. Cleanup the previous botched injection
  // It added onInput={...} pattern="..." title="..."
  // Let's remove all onInput={...} entirely to reset
  content = content.replace(/onInput=\{\(e\) => \{[^}]+\}\}\s*/g, '');
  
  // It also added pattern="[a-zA-Z\s\-]+" title="Letters only"
  content = content.replace(/pattern="\[a-zA-Z\\s\\-\]\+"\s*title="Letters only"\s*/g, '');
  content = content.replace(/pattern="\[\\d\\s\]\{16,19\}"\s*maxLength=\{19\}\s*title="16 digit card number"\s*/g, '');
  content = content.replace(/pattern="\(0\[1-9\]\|1\[0-2\]\)\\\/\?\(\[0-9\]\{2\}\)"\s*maxLength=\{5\}\s*title="Format: MM\/YY"\s*/g, '');
  content = content.replace(/pattern="\\d\{3,4\}"\s*maxLength=\{4\}\s*title="3 or 4 digit CVV\/CVC"\s*/g, '');
  content = content.replace(/pattern="\\d\{5\}"\s*maxLength=\{5\}\s*title="5 digit zip code"\s*/g, '');

  // 2. Re-inject correctly
  const inputRegex = /<input[^>]+>/g;
  content = content.replace(inputRegex, (match) => {
    let lowerMatch = match.toLowerCase();
    let newTag = match;

    if (!newTag.includes('required')) {
      newTag = newTag.replace('<input', '<input required');
    }

    if (lowerMatch.includes('placeholder="card number"') || lowerMatch.includes('placeholder="0000 0000 0000 0000"') || lowerMatch.includes('placeholder="xxxx-xxxx-xxxx-xxxx"') || lowerMatch.includes('placeholder="xxxx xxxx xxxx xxxx"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number"');
    }
    else if (lowerMatch.includes('placeholder="mm/yy"') || lowerMatch.includes('placeholder="expiration date') || lowerMatch.includes('placeholder="mm / yy"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');
    }
    else if (lowerMatch.includes('placeholder="cvv"') || lowerMatch.includes('placeholder="cvc"') || lowerMatch.includes('placeholder="security code"') || lowerMatch.includes('placeholder="•••"') || lowerMatch.includes('placeholder="***"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');
    }
    else if (lowerMatch.includes('placeholder="zip') || lowerMatch.includes('placeholder="postal') || lowerMatch.includes('placeholder="94105"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={5} title="5 digit zip code"');
    }
    else if (lowerMatch.includes('placeholder="jane doe"') || lowerMatch.includes('placeholder="john doe"') || lowerMatch.includes('placeholder="full name"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\s\\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only"');
    }
    else if (lowerMatch.includes('placeholder="san francisco"') || lowerMatch.includes('placeholder="city"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\s\\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only"');
    }
    else if (lowerMatch.includes('placeholder="123') || lowerMatch.includes('placeholder="address"') || lowerMatch.includes('placeholder="street"')) {
      newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\\s\\-\\,]/g, ""); }}');
    }
    
    return newTag;
  });

  // 3. Fix the Button onClick replacement
  // We want to match buttons with onClick and inner text containing Continue, Next, etc.
  // Using a simpler regex that allows tags inside the button text.
  const buttonRegex = /<button([^>]*)onClick=\{([^}]+)\}([^>]*)>(.*?(?:Continue|Next Step|Next|Proceed).*?)<\/button>/gi;
  
  content = content.replace(buttonRegex, (match, prefix, onClickLogic, suffix, innerText) => {
    if (onClickLogic.includes('reportValidity')) return match;
    if (onClickLogic.includes('setIsSuccess(false)')) return match; // skip "Back to store" buttons
    
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
    }`;

    return `<button${prefix}onClick={${newOnClick}}${suffix}>${innerText}</button>`;
  });

  processedFiles++;
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Modified: ${path.basename(filePath)}`);
  }
}

console.log('Starting validation fix and injection...');
processDirectory(baseDir);
console.log(`\nFinished! Processed ${processedFiles} files. Modified ${modifiedFiles} files.`);
