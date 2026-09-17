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

  // 1. Fix the Python script corruption
  // It changed `<input onInput={(e) =>` to `<input onInput> `
  // We can just replace `<input onInput> ` back to `<input onInput={(e) => `
  content = content.replace(/<input onInput> /g, '<input onInput={(e) => ');
  
  // Wait, in PaymentProcess10 and 19 it might be (e: any). But wait, my python script failed to match onInput={(e: any) = as well.
  // Actually, let's just use a regex that handles both cases if they exist.
  // But wait, it replaced the entire `<input ... onInput={(e) =`!
  // What if there were OTHER attributes before `onInput`?
  // Like `<input type="text" onInput={(e) =>`?
  // The python script preserved `type="text"`.
  // Let's reverse the exact transformation. The python script output `<input ... onInput> `.
  content = content.replace(/(<input[^>]*?) onInput> /g, '$1 onInput={(e) => ');

  // 2. Since the rest of the tag was skipped, the duplicate attributes are STILL THERE.
  // Let's use a VERY robust string replacement to remove duplicates.
  // We know the exact duplicate strings. We'll just replace them literally.
  
  const literalReplacements = [
    // 01 to 10 have SINGLE slashes in the duplicate string:
    { from: 'pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number"', to: 'pattern="[\\\\d\\\\s]{16,19}" maxLength={19} title="16 digit card number"' },
    { from: 'pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"', to: 'pattern="(0[1-9]|1[0-2])\\\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY"' },
    { from: 'pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"', to: 'pattern="\\\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC"' },
    { from: 'pattern="[a-zA-Z\\s\\-]+" title="Letters only" pattern="[a-zA-Z\\s\\-]+" title="Letters only"', to: 'pattern="[a-zA-Z\\\\s\\\\-]+" title="Letters only"' },
    { from: 'pattern="\\d{5}" maxLength={5} title="5 digit zip code" pattern="\\d{5}" maxLength={5} title="5 digit zip code"', to: 'pattern="\\\\d{5}" maxLength={5} title="5 digit zip code"' }
  ];

  for (let i = 0; i < 3; i++) { // run multiple times for triple/quadruple duplicates
      for (const rep of literalReplacements) {
          content = content.split(rep.from).join(rep.to);
      }
  }
  
  // also handle the mixed ones just in case
  let prevContent;
  do {
      prevContent = content;
      content = content.replace(/(pattern="[^"]*"\s*(?:maxLength=\{[^\}]+\}\s*)?(?:title="[^"]*"\s*)?)\1/g, '$1');
  } while (content !== prevContent);

  // Also remove ANY other duplicate attributes that exist in `<input ... />` 
  // safely by matching the entire <input ... /> properly!
  // To match <input ... /> including =>, we need a regex that balances < and > or just matches up to /> 
  content = content.replace(/<input\b([^]*?)\/>/g, (match, inner) => {
       // Now `inner` is everything between <input and />
       // Let's dedup required
       let reqCount = 0;
       let newInner = inner.replace(/\srequired\b/g, (m) => {
           reqCount++;
           return reqCount === 1 ? m : '';
       });
       
       // Dedup pattern
       let pCount = 0;
       newInner = newInner.replace(/\spattern="[^"]*"/g, (m) => {
           pCount++;
           return pCount === 1 ? m : '';
       });

       // Dedup title
       let tCount = 0;
       newInner = newInner.replace(/\stitle="[^"]*"/g, (m) => {
           tCount++;
           return tCount === 1 ? m : '';
       });

       // Dedup maxLength
       let mCount = 0;
       newInner = newInner.replace(/\smaxLength=\{[^\}]+\}/g, (m) => {
           mCount++;
           return mCount === 1 ? m : '';
       });

       return `<input${newInner}/>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Recovered and fixed ${filePath}`);
  }
}

console.log('Recovering from python script corruption and fixing duplicates...');
processDirectory(baseDir);
console.log('Done.');
