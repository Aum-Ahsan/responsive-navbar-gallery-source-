const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// Add import
if (!content.includes('import { newsletters }')) {
    content = content.replace('import { ctas } from "@/components/ctas";', 'import { ctas } from "@/components/ctas";\nimport { newsletters } from "@/components/newsletters";');
}

// Add navigation button
if (!content.includes('href="#newsletters"')) {
    content = content.replace('<a href="#ctas"', '<a href="#newsletters" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold">60 Newsletters</a><a href="#ctas"');
}

// Add Newsletter section right after CTA section
const ctaSectionRegex = /(<section id="ctas".*?<\/section>)/;
if (!content.includes('<section id="newsletters"')) {
    const newsletterSection = `<section id="newsletters" className="gallery-section mx-auto max-w-[1600px] border-t border-black/10"><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#777770]">Category 06</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em]">Newsletter Signups</h2><p className="mt-1 text-sm text-[#6d6d67]">Sixty unique newsletter components demonstrating various layouts and interactions.</p></div><div className="space-y-8">{newsletters.map(({ id, name, Component }) => <Card key={id} id={id} name={name} source={\`Newsletter \${id}\`} preview={preview} type="Newsletter"><Component /></Card>)}</div></section>`;
    
    content = content.replace(ctaSectionRegex, `$1${newsletterSection}`);
}

// Also update the Card type to accept "Newsletter"
content = content.replace('type: "Navbar" | "Hero" | "Carousel" | "Process" | "CTA"', 'type: "Navbar" | "Hero" | "Carousel" | "Process" | "CTA" | "Newsletter"');

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Successfully updated page.tsx');
