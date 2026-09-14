const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = execSync('dir /s /b *.tsx', { encoding: 'utf-8' }).split('\r\n').filter(f => f);

let imageUrls = new Set();
const regex = /src=[\"'](https?:\/\/[^\"]+)[\"']/g;

for (const file of files) {
  if (file.includes('node_modules')) continue;
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    imageUrls.add(match[1]);
  }
}

console.log('Total unique URLs:', imageUrls.size);
Array.from(imageUrls).filter(url => !url.includes('images.unsplash.com')).forEach(url => console.log('NON-UNSPLASH:', url));

// Let's also check if any Unsplash URLs return 404
const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(`BROKEN [${res.statusCode}]: ${url}`);
      }
      resolve();
    }).on('error', (e) => {
      console.log(`ERROR [${e.message}]: ${url}`);
      resolve();
    });
  });
}

async function main() {
  const urls = Array.from(imageUrls);
  console.log(`Checking ${urls.length} URLs...`);
  // Check in batches of 10
  for (let i = 0; i < urls.length; i += 10) {
    await Promise.all(urls.slice(i, i + 10).map(checkUrl));
  }
  console.log('Done checking.');
}

main();
