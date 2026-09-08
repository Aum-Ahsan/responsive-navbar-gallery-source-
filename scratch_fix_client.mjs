import fs from 'fs';
import path from 'path';

const dir = './components/processes';

const files = fs.readdirSync(dir);
for (const f of files) {
  const fullPath = path.join(dir, f);
  if (fs.statSync(fullPath).isDirectory()) {
    // folder is "process-01", file is "Process01.tsx"
    const parts = f.split('-');
    if (parts.length === 2 && parts[0] === 'process') {
      const componentName = 'Process' + parts[1] + '.tsx';
      const componentPath = path.join(fullPath, componentName);
      
      if (fs.existsSync(componentPath)) {
        let content = fs.readFileSync(componentPath, 'utf-8');
        if (!content.includes('"use client"') && !content.includes("'use client'")) {
          fs.writeFileSync(componentPath, '"use client";\n' + content);
          console.log('Fixed ' + componentPath);
        }
      } else {
        console.log('Not found: ' + componentPath);
      }
    }
  }
}
