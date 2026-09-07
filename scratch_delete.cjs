const fs = require('fs');

const bad = [4, 11, 12, 15, 22, 24, 30, 32, 45, 47, 50];

bad.forEach(i => {
  const p = 'components/carousels/carousel-' + String(i).padStart(2, '0');
  if (fs.existsSync(p)) fs.rmSync(p, {recursive: true, force: true});
});

const dirs = fs.readdirSync('components/carousels')
  .filter(d => d.startsWith('carousel-'))
  .sort();

let imports = dirs.map(d => {
  const name = d.replace('-', '').replace('c', 'C');
  return `import ${name} from './${d}/${name}';`;
}).join('\n');

let exportsArray = dirs.map(d => {
  const name = d.replace('-', '').replace('c', 'C');
  const id = d.split('-')[1];
  return `  { id: '${id}', name: '${name}', Component: ${name} }`;
}).join(',\n');

const out = imports + '\n\nexport const carousels = [\n' + exportsArray + '\n];\n';
fs.writeFileSync('components/carousels/index.ts', out);
