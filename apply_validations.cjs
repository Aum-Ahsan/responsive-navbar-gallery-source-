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

  // Replace inputs intelligently using a safer regex that matches until />
  content = content.replace(/<input[\s\S]*?\/>/g, (match) => {
    let attrsStr = match.slice(6, -2); // remove '<input' and '/>'
    
    // If it's a checkbox or radio, skip adding required/type/etc
    let isCheckboxOrRadio = /type=["'](?:checkbox|radio)["']/.test(attrsStr);
    
    let newAttrs = attrsStr;

    // Ensure required
    if (!isCheckboxOrRadio && !/\brequired\b/.test(newAttrs)) {
      newAttrs += ' required';
    }

    const lcAttrs = newAttrs.toLowerCase();
    
    let type = 'text';
    let minLength = null;
    let maxLength = null;
    let min = null;
    let max = null;

    if (lcAttrs.includes('cvv') || lcAttrs.includes('cvc') || lcAttrs.includes('•••')) {
      minLength = 3;
      maxLength = 4;
    } else if (lcAttrs.includes('card number') || lcAttrs.includes('0000 0000')) {
      minLength = 16;
      maxLength = 19;
    } else if (lcAttrs.includes('mm/yy')) {
      minLength = 5;
      maxLength = 5;
    } else if (lcAttrs.includes('zip') || lcAttrs.includes('postal') || lcAttrs.includes('94105')) {
      minLength = 5;
      maxLength = 10;
    } else if (lcAttrs.includes('email') || lcAttrs.includes('@')) {
      type = 'email';
      minLength = 5;
      maxLength = 100;
    } else if (lcAttrs.includes('amount') || lcAttrs.includes('price') || lcAttrs.includes('donation')) {
      type = 'number';
      min = 1;
    } else if (lcAttrs.includes('name') || lcAttrs.includes('jane doe')) {
      minLength = 2;
      maxLength = 50;
    } else if (lcAttrs.includes('address') || lcAttrs.includes('innovation drive')) {
      minLength = 5;
      maxLength = 100;
    } else if (lcAttrs.includes('city') || lcAttrs.includes('san francisco')) {
      minLength = 2;
      maxLength = 50;
    }

    if (type !== 'text' && !isCheckboxOrRadio) {
      if (/type=["'][^"']*["']/.test(newAttrs)) {
        newAttrs = newAttrs.replace(/type=["'][^"']*["']/, `type="${type}"`);
      } else {
        newAttrs += ` type="${type}"`;
      }
    }

    if (minLength !== null) {
      if (/minLength=\{?\d+\}?/.test(newAttrs)) {
        newAttrs = newAttrs.replace(/minLength=\{?\d+\}?/, `minLength={${minLength}}`);
      } else {
        newAttrs += ` minLength={${minLength}}`;
      }
    }

    if (maxLength !== null) {
      if (/maxLength=\{?\d+\}?/.test(newAttrs)) {
        newAttrs = newAttrs.replace(/maxLength=\{?\d+\}?/, `maxLength={${maxLength}}`);
      } else {
        newAttrs += ` maxLength={${maxLength}}`;
      }
    }

    if (min !== null) {
      if (/min=\{?\d+\}?/.test(newAttrs)) {
        newAttrs = newAttrs.replace(/min=\{?\d+\}?/, `min={${min}}`);
      } else {
        newAttrs += ` min={${min}}`;
      }
    }

    if (max !== null) {
      if (/max=\{?\d+\}?/.test(newAttrs)) {
        newAttrs = newAttrs.replace(/max=\{?\d+\}?/, `max={${max}}`);
      } else {
        newAttrs += ` max={${max}}`;
      }
    }

    return `<input${newAttrs} />`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
}

console.log('Changed files:', changedCount);
