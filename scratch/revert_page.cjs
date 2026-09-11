const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// Remove the filter code
content = content.replace(/const centerCtaIds = \[.*?\];\n/, '');
content = content.replace(/const centerCtas = ctas\.filter\(cta => centerCtaIds\.includes\(cta\.id\)\);\n/, '');
content = content.replace(/const fullWidthCtas = ctas\.filter\(cta => !centerCtaIds\.includes\(cta\.id\)\);\n/, '');

// Revert the sections
const centerSectionRegex = /<section id="ctas-center".*?<\/section>/;
const fullSectionRegex = /<section id="ctas-full".*?<\/section>/;

content = content.replace(centerSectionRegex, '');
content = content.replace(fullSectionRegex, `<section id="ctas" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">Category 05</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">Call to Action Sections</h2><p className="mt-1 text-sm text-[#6d6d67]">Fifty highly functional, interactive, and responsive CTA components.</p></div><div className="space-y-8">{ctas.map(({ id, name, Component }) => <Card key={id} id={id} name={name} source={\`CTA \${id}\`} preview={preview} type="CTA"><Component /></Card>)}</div></section>`);

// Revert the navigation buttons
content = content.replace('<a href="#ctas-center" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">21 Center CTAs</a><a href="#ctas-full" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">29 Full CTAs</a>', '<a href="#ctas" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">50 CTAs</a>');

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Reverted page.tsx!');
