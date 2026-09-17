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

  // Exact literal replacements for the duplicated strings
  
  // 1. Letters only
  content = content.split('pattern="[a-zA-Z\\s\\-]+" title="Letters only" pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"').join('pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"');
  
  // 2. 16 digit card
  content = content.split('pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"').join('pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"');
  // Also triple duplicates!
  content = content.split('pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number"').join('pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"');
  
  // 3. Expiry
  content = content.split('pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"').join('pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');
  // triple
  content = content.split('pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"').join('pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');

  // 4. CVV
  content = content.split('pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"').join('pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');
  // triple
  content = content.split('pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"').join('pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');

  // 5. ZIP
  content = content.split('pattern="\\d{5}" maxLength={5} title="5 digit zip code" pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"').join('pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"');
  // triple
  content = content.split('pattern="\\d{5}" maxLength={5} title="5 digit zip code" pattern="\\d{5}" maxLength={5} title="5 digit zip code" pattern="\\d{5}" maxLength={5} title="5 digit zip code"').join('pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"');

  // Any remaining generic duplicates
  // Using string regex with negative lookbehind to remove consecutive patterns.
  // Actually, we just fixed all 5 types that were injected.
  // Wait, let's also fix the ones with 3 duplicates that were mixed.
  content = content.replace(/pattern="\[a-zA-Z\\s\\-\]+" title="Letters only" pattern="\[a-zA-Z\\\\s\\\\-\]+" title="Letters only"/g, 'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"');
  content = content.replace(/pattern="\[a-zA-Z\\s\\-\]+" title="Letters only" pattern="\[a-zA-Z\\s\\-\]+" title="Letters only"/g, 'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"');

  // generic dedup for pattern="..." pattern="..."
  // This will match any pattern="..." and if there is another pattern="..." right after it, remove the first one.
  let prevContent;
  do {
      prevContent = content;
      content = content.replace(/(pattern="[^"]*"\s*(?:maxLength=\{[^\}]+\}\s*)?(?:title="[^"]*"\s*)?)\1/g, '$1');
  } while (content !== prevContent);
  
  // also handle the single slash / double slash exact matches generically
  content = content.replace(/pattern="\[a-zA-Z\\s\\-\]+" title="Letters only" pattern="\[a-zA-Z\\\\s\\\\-\]+" title="Letters only"/g, 'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"');
  content = content.replace(/pattern="\[\\d\\s\]\{16,19\}" maxLength=\{19\} title="16 digit card number" pattern="\[\\\\d\\\\s\]\{16,19\}" maxLength=\{19\} title="16 digit card number"/g, 'pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"');
  content = content.replace(/pattern="\(0\[1-9\]\|1\[0-2\]\)\\\/\?\(\[0-9\]\{2\}\)" maxLength=\{5\} title="Format: MM\/YY" pattern="\(0\[1-9\]\|1\[0-2\]\)\\\\\/\?\(\[0-9\]\{2\}\)" maxLength=\{5\} title="Format: MM\/YY"/g, 'pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"');
  content = content.replace(/pattern="\\d\{3,4\}" maxLength=\{4\} title="3 or 4 digit CVV\/CVC" pattern="\\\\d\{3,4\}" maxLength=\{4\} title="3 or 4 digit CVV\/CVC"/g, 'pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"');
  content = content.replace(/pattern="\\d\{5\}" maxLength=\{5\} title="5 digit zip code" pattern="\\\\d\{5\}" maxLength=\{5\} title="5 digit zip code"/g, 'pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
}

console.log('Running brutal exact string replacements...');
processDirectory(baseDir);
console.log('Done.');
