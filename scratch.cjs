const fs = require('fs');

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
