const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components/carousels');
let dirs = fs.readdirSync(baseDir).filter(d => d.startsWith('carousel-')).sort();

let newDirs = [];

dirs.forEach((oldDir, i) => {
  const newNum = i + 1;
  const newNumStr = String(newNum).padStart(2, '0');
  const newDir = `carousel-${newNumStr}`;
  const oldNumStr = oldDir.split('-')[1];
  const oldNum = parseInt(oldNumStr, 10);
  const oldComp = `Carousel${oldNumStr}`;
  const newComp = `Carousel${newNumStr}`;

  const oldDirPath = path.join(baseDir, oldDir);
  const newDirPath = path.join(baseDir, newDir);

  if (oldDir !== newDir) {
    fs.renameSync(oldDirPath, newDirPath);
  }

  const oldFilePath = path.join(newDirPath, `${oldComp}.tsx`);
  const newFilePath = path.join(newDirPath, `${newComp}.tsx`);

  if (fs.existsSync(oldFilePath) && oldFilePath !== newFilePath) {
    fs.renameSync(oldFilePath, newFilePath);
  }

  // Handle case where file was already named correctly (e.g. 01)
  const targetFilePath = fs.existsSync(newFilePath) ? newFilePath : oldFilePath;
  
  if (fs.existsSync(targetFilePath)) {
    let content = fs.readFileSync(targetFilePath, 'utf8');
    content = content.replace(new RegExp(oldComp, 'g'), newComp);
    content = content.replace(`index={${oldNum}}`, `index={${newNum}}`);
    fs.writeFileSync(targetFilePath, content, 'utf8');
  }

  newDirs.push(newDir);
});

let imports = newDirs.map(d => {
  const name = d.replace('-', '').replace('c', 'C');
  return `import ${name} from './${d}/${name}';`;
}).join('\n');

let exportsArray = newDirs.map(d => {
  const name = d.replace('-', '').replace('c', 'C');
  const id = d.split('-')[1];
  return `  { id: '${id}', name: '${name}', Component: ${name} }`;
}).join(',\n');

const out = imports + '\n\nexport const carousels = [\n' + exportsArray + '\n];\n';
fs.writeFileSync(path.join(baseDir, 'index.ts'), out);

console.log('Renamed successfully to 1...29');
