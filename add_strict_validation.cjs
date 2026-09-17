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

function injectInputConstraints(htmlTag, type) {
  let newTag = htmlTag;
  
  if (!newTag.includes('required')) {
    newTag = newTag.replace('<input', '<input required');
  }

  // Inject based on type
  if (type === 'card' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\\\\s]/g, "").substring(0, 19); }} pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"');
  } else if (type === 'exp' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\\\\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');
  } else if (type === 'cvv' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');
  } else if (type === 'zip' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"');
  } else if (type === 'name' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\\\\s\\\\-]/g, ""); }} pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"');
  } else if (type === 'address' && !newTag.includes('onInput')) {
    newTag = newTag.replace('<input', '<input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\\\\s\\\\-\\\\,]/g, ""); }}');
  }
  
  return newTag;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Process Inputs
  const inputRegex = /<input[^>]+>/g;
  content = content.replace(inputRegex, (match) => {
    let lowerMatch = match.toLowerCase();
    
    if (lowerMatch.includes('placeholder="card number"') || lowerMatch.includes('placeholder="0000 0000 0000 0000"') || lowerMatch.includes('placeholder="xxxx-xxxx-xxxx-xxxx"') || lowerMatch.includes('placeholder="xxxx xxxx xxxx xxxx"')) {
      return injectInputConstraints(match, 'card');
    }
    if (lowerMatch.includes('placeholder="mm/yy"') || lowerMatch.includes('placeholder="expiration date') || lowerMatch.includes('placeholder="mm / yy"')) {
      return injectInputConstraints(match, 'exp');
    }
    if (lowerMatch.includes('placeholder="cvv"') || lowerMatch.includes('placeholder="cvc"') || lowerMatch.includes('placeholder="security code"') || lowerMatch.includes('placeholder="•••"') || lowerMatch.includes('placeholder="***"')) {
      return injectInputConstraints(match, 'cvv');
    }
    if (lowerMatch.includes('zip') || lowerMatch.includes('postal')) {
      return injectInputConstraints(match, 'zip');
    }
    if (lowerMatch.includes('name') || lowerMatch.includes('jane doe') || lowerMatch.includes('city') || lowerMatch.includes('san francisco')) {
      return injectInputConstraints(match, 'name');
    }
    if (lowerMatch.includes('address') || lowerMatch.includes('street')) {
      return injectInputConstraints(match, 'address');
    }
    
    return match; // If no match, return original
  });

  // 2. Process Next/Continue Buttons to enforce validation
  // We look for buttons that have onClick and text like Continue or Next
  // This regex is complex, we will look for <button ... onClick={something} ...>Continue</button>
  const buttonRegex = /<button[^>]*onClick=\{([^}]+)\}[^>]*>([^<]*(?:Continue|Next Step|Next|Proceed)[^<]*)<\/button>/gi;
  
  content = content.replace(buttonRegex, (match, onClickLogic, innerText) => {
    // Prevent double injection
    if (onClickLogic.includes('reportValidity')) return match;
    
    // Create new wrapper logic
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

    return match.replace(`onClick={${onClickLogic}}`, `onClick={${newOnClick}}`);
  });

  processedFiles++;
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Modified: ${path.basename(filePath)}`);
  }
}

console.log('Starting strict validation injection...');
processDirectory(baseDir);
console.log(`\nFinished! Processed ${processedFiles} files. Modified ${modifiedFiles} files.`);
