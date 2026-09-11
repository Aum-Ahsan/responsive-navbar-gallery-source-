const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'components', 'newsletters');

for (let i = 16; i <= 60; i++) {
    const idStr = i.toString().padStart(2, '0');
    const dirPath = path.join(targetDir, `newsletter-${idStr}`);
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
    }
}

let pageContent = fs.readFileSync(path.join(__dirname, '..', 'app', 'page.tsx'), 'utf8');

// Update 60 Newsletters to 15 Newsletters
pageContent = pageContent.replace('60 Newsletters', '15 Newsletters');
pageContent = pageContent.replace('Sixty unique', 'Fifteen unique');

fs.writeFileSync(path.join(__dirname, '..', 'app', 'page.tsx'), pageContent, 'utf8');

console.log('Cleanup complete!');
