const fs = require('fs');
const path = require('path');

const ctasDir = path.join(__dirname, '..', 'components', 'ctas');
const center = [];
const full = [];

for (let i = 1; i <= 50; i++) {
    const id = i.toString().padStart(2, '0');
    const ctaName = `cta-${id}`;
    const componentName = `Cta${id}`;
    const filePath = path.join(ctasDir, ctaName, `${componentName}.tsx`);
    
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        // Get the first div or section className
        const match = content.match(/<div className="([^"]+)"/);
        if (match) {
            const className = match[1];
            if (className.includes('max-w-') && className.includes('mx-auto')) {
                center.push(id);
            } else {
                full.push({ id, className });
            }
        }
    }
}

console.log("Center CTAs:", center.length);
console.log("Full CTAs:", full.length);
console.log("Full CTAs list:", JSON.stringify(full, null, 2));
