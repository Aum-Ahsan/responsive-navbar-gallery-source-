const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

const centerCtaIds = ['01', '07', '09', '11', '20', '21', '22', '23', '26', '27', '28', '31', '32', '35', '36', '37', '39', '43', '45', '49', '50'];

const extraCode = `
const centerCtaIds = ${JSON.stringify(centerCtaIds)};
const centerCtas = ctas.filter(cta => centerCtaIds.includes(cta.id));
const fullWidthCtas = ctas.filter(cta => !centerCtaIds.includes(cta.id));
`;

content = content.replace('export default function Home() {', extraCode + '\\nexport default function Home() {');

const oldCtaSection = `<section id="ctas" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">Category 05</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">Call to Action Sections</h2><p className="mt-1 text-sm text-[#6d6d67]">Twenty highly functional, interactive, and responsive CTA components.</p></div><div className="space-y-8">{ctas.map(({ id, name, Component }) => <Card key={id} id={id} name={name} source={\`CTA \${id}\`} preview={preview} type="CTA"><Component /></Card>)}</div></section>`;

const newCtaSections = `<section id="ctas-center" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">Category 05</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">Center Width CTAs</h2><p className="mt-1 text-sm text-[#6d6d67]">Twenty-one highly functional, interactive, and responsive Center Width CTA components.</p></div><div className="space-y-8">{centerCtas.map(({ id, name, Component }) => <Card key={id} id={id} name={name} source={\`CTA \${id}\`} preview={preview} type="CTA"><Component /></Card>)}</div></section><section id="ctas-full" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">Category 06</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">Full Width CTAs</h2><p className="mt-1 text-sm text-[#6d6d67]">Twenty-nine highly functional, interactive, and responsive Full Width CTA components.</p></div><div className="space-y-8">{fullWidthCtas.map(({ id, name, Component }) => <Card key={id} id={id} name={name} source={\`CTA \${id}\`} preview={preview} type="CTA"><Component /></Card>)}</div></section>`;

content = content.replace(oldCtaSection, newCtaSections);

content = content.replace('<a href="#ctas" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">50 CTAs</a>', '<a href="#ctas-center" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">21 Center CTAs</a><a href="#ctas-full" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">29 Full CTAs</a>');

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Done!');
