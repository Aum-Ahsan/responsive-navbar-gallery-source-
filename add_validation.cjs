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

function injectValidation(htmlTag, type) {
  // Check if it already has pattern
  if (htmlTag.includes('pattern=')) return htmlTag;

  let newTag = htmlTag;
  
  // Ensure required
  if (!newTag.includes('required')) {
    newTag = newTag.replace('<input', '<input required');
  }

  // Inject based on type
  if (type === 'card') {
    newTag = newTag.replace('<input', '<input pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"');
  } else if (type === 'exp') {
    newTag = newTag.replace('<input', '<input pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');
  } else if (type === 'cvv') {
    newTag = newTag.replace('<input', '<input pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');
  }
  
  return newTag;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const inputRegex = /<input[^>]+>/g;
  
  content = content.replace(inputRegex, (match) => {
    let lowerMatch = match.toLowerCase();
    
    if (lowerMatch.includes('placeholder="card number"') || lowerMatch.includes('placeholder="0000 0000 0000 0000"') || lowerMatch.includes('placeholder="xxxx-xxxx-xxxx-xxxx"') || lowerMatch.includes('placeholder="xxxx xxxx xxxx xxxx"')) {
      return injectValidation(match, 'card');
    }
    if (lowerMatch.includes('placeholder="mm/yy"') || lowerMatch.includes('placeholder="expiration date') || lowerMatch.includes('placeholder="mm / yy"')) {
      return injectValidation(match, 'exp');
    }
    if (lowerMatch.includes('placeholder="cvv"') || lowerMatch.includes('placeholder="cvc"') || lowerMatch.includes('placeholder="security code"') || lowerMatch.includes('placeholder="•••"') || lowerMatch.includes('placeholder="***"')) {
      return injectValidation(match, 'cvv');
    }
    
    return match;
  });

  processedFiles++;
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedFiles++;
    console.log(`Modified: ${path.basename(filePath)}`);
  }
}

console.log('Starting validation injection part 2...');
processDirectory(baseDir);
console.log(`\nFinished! Processed ${processedFiles} files. Modified ${modifiedFiles} files.`);
