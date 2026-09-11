const fs = require('fs');
const path = require('path');

const ctasDir = path.join(__dirname, '..', 'components', 'ctas');
let changedCount = 0;

for (let i = 1; i <= 50; i++) {
    const id = i.toString().padStart(2, '0');
    const ctaName = `cta-${id}`;
    const componentName = `Cta${id}`;
    const filePath = path.join(ctasDir, ctaName, `${componentName}.tsx`);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // We only want to replace the max-w- in the very first div class
        // Let's use a regex that matches the first div
        let match = content.match(/<div className="([^"]+)"/);
        if (match) {
            let originalClass = match[1];
            if (originalClass.includes('max-w-') && originalClass.includes('mx-auto')) {
                let newClass = originalClass.replace(/max-w-[a-z0-9]+/, 'max-w-5xl');
                if (newClass !== originalClass) {
                    content = content.replace(originalClass, newClass);
                    fs.writeFileSync(filePath, content, 'utf8');
                    changedCount++;
                    console.log(`Updated ${componentName}`);
                }
            }
        }
    }
}

console.log(`Successfully updated ${changedCount} CTA files to use max-w-5xl.`);
