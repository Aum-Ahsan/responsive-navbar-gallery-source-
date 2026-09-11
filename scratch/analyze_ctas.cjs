const fs = require('fs');
const path = require('path');

const ctasDir = path.join(__dirname, 'components', 'ctas');
const ctasList = [];

for (let i = 1; i <= 50; i++) {
    const id = i.toString().padStart(2, '0');
    const ctaName = `cta-${id}`;
    const componentName = `Cta${id}`;
    const filePath = path.join(ctasDir, ctaName, `${componentName}.tsx`);
    
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        // Check for max-w- class
        if (content.match(/className="[^"]*max-w-[a-z0-9]+[^"]*mx-auto/)) {
            ctasList.push({ id, type: 'center' });
        } else {
            ctasList.push({ id, type: 'full' });
        }
    }
}

console.log(JSON.stringify(ctasList, null, 2));
