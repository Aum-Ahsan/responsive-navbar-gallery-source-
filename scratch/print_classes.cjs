const fs = require('fs');

for (let i = 1; i <= 50; i++) {
    const id = i.toString().padStart(2, '0');
    const p = `components/ctas/cta-${id}/Cta${id}.tsx`;
    try {
        const c = fs.readFileSync(p, 'utf8');
        const m = c.match(/<div className="([^"]+)"/);
        console.log(id, m ? m[1] : 'no match');
    } catch(e) {
        console.log(id, 'error', e.message);
    }
}
