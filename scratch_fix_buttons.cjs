const fs = require('fs');
const path = require('path');

const dirs = ['payment-processes', 'checkouts', 'carts'];

dirs.forEach(d => {
    const full = path.join('components', d);
    if (!fs.existsSync(full)) return;
    
    const files = fs.readdirSync(full, {recursive: true}).filter(f => f.endsWith('.tsx'));
    
    for (const file of files) {
        const p = path.join(full, file);
        let content = fs.readFileSync(p, 'utf-8');
        let newContent = content;
        
        // Find all button tags that do NOT have a type attribute
        // and add type="button" to them.
        newContent = newContent.replace(/<button(?![^>]*?type=)/g, '<button type="button"');
        
        if (content !== newContent) {
            fs.writeFileSync(p, newContent);
            console.log('Fixed ' + p);
        }
    }
});
