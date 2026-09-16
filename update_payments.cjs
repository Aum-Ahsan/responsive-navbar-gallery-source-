const fs = require('fs');
const path = require('path');

const dir = 'e:/responsive-navbar-gallery-source - Copy/components/payment-processes';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    let modified = false;

    // 1. Add "Name on Card" before "Card Number"
    // We look for: <div>\s*<label[^>]*>Card Number</label>
    const cardNumberRegex = /(<div>\s*<label[^>]*>Card Number<\/label>)/;
    if (content.match(cardNumberRegex) && !content.includes(">Name on Card<") && !content.includes('value={cardHolder}')) {
        let sampleClassName = 'w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-sm sm:text-base focus:ring-gray-600/20 focus:border-gray-600';
        
        const emailOrFirstRegex = /<label[^>]*>(Email Address|First Name)<\/label>\s*<input[^>]*className="([^"]+)"/i;
        const match = content.match(emailOrFirstRegex);
        if (match) {
            sampleClassName = match[2];
        }

        const nameOnCardBlock = `<div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Name on Card</label>
                <input required type="text" placeholder="John Doe" className="${sampleClassName}" />
              </div>\n              `;
        content = content.replace(cardNumberRegex, nameOnCardBlock + '$1');
        modified = true;
    }

    // 2. Add validation to Card Number
    const cardNumberInputRegex = /<input[^>]*placeholder="0000\s?0000\s?0000\s?0000"[^>]*>/;
    const cardMatch = content.match(cardNumberInputRegex);
    if (cardMatch) {
        let cardInput = cardMatch[0];
        if (!cardInput.includes('maxLength=')) {
            cardInput = cardInput.replace('<input ', `<input maxLength={16} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\\D/g, '').substring(0, 16); }} `);
            content = content.replace(cardMatch[0], cardInput);
            modified = true;
        }
    }

    // 3. Add validation to MM/YY
    const mmYyInputRegex = /<input[^>]*placeholder="MM\/YY"[^>]*>/;
    const mmYyMatch = content.match(mmYyInputRegex);
    if (mmYyMatch) {
        let mmYyInput = mmYyMatch[0];
        if (!mmYyInput.includes('maxLength=')) {
            mmYyInput = mmYyInput.replace('<input ', `<input maxLength={5} onInput={(e) => { let v = e.currentTarget.value.replace(/\\D/g, ''); if (v.length > 4) v = v.substring(0, 4); if (v.length >= 3) v = \`\${v.substring(0, 2)}/\${v.substring(2)}\`; e.currentTarget.value = v; }} `);
            content = content.replace(mmYyMatch[0], mmYyInput);
            modified = true;
        }
    }

    // 4. Add validation to CVC
    const cvcInputRegex = /<input[^>]*placeholder="(CVC|123)"[^>]*>/;
    const cvcMatch = content.match(cvcInputRegex);
    if (cvcMatch) {
        let cvcInput = cvcMatch[0];
        if (!cvcInput.includes('maxLength=')) {
            cvcInput = cvcInput.replace('<input ', `<input maxLength={3} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\\D/g, '').substring(0, 3); }} `);
            content = content.replace(cvcMatch[0], cvcInput);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

processDirectory(dir);
