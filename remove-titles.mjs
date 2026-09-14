import fs from 'fs';
import path from 'path';

const basePath = 'e:\\responsive-navbar-gallery-source - Copy\\components';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const removeRegex = /\n\s*{\/\* Injected Title \*\/}\n\s*<div data-injected-title="true" className="absolute top-0 left-0 bg-slate-900 text-white px-4 py-2 text-sm font-bold z-\[100\] rounded-br-xl shadow-lg border-b border-r border-slate-700">\n\s*[^<]+\n\s*<\/div>/g;

let count = 0;
walkDir(basePath, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (removeRegex.test(content)) {
      content = content.replace(removeRegex, '');
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
    }
  }
});

console.log(`Removed injected titles from ${count} files.`);
