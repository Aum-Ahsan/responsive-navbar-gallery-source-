const fs = require('fs');

const filesToCheck = [
  'components/processes/process-56/Process56.tsx',
  'components/carousels/carousel-47/Carousel47.tsx',
  'components/carousels/carousel-40/Carousel40.tsx',
  'components/carousels/carousel-36/Carousel36.tsx',
  'components/newsletters/newsletter-35/Newsletter35.tsx'
];

const regex = /src=[\"'](https?:\/\/[^\"]+)[\"']/g;
const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`[${res.statusCode}]: ${url}`);
      resolve(res.statusCode);
    }).on('error', (e) => {
      console.log(`[ERROR ${e.message}]: ${url}`);
      resolve(0);
    });
  });
}

async function main() {
  let allUrls = new Set();
  for (const file of filesToCheck) {
    if (fs.existsSync(file)) {
      console.log('--- ' + file + ' ---');
      const content = fs.readFileSync(file, 'utf-8');
      let match;
      while ((match = regex.exec(content)) !== null) {
        allUrls.add(match[1]);
      }
    }
  }

  const urls = Array.from(allUrls);
  console.log(`Checking ${urls.length} URLs from open files...`);
  for (let i = 0; i < urls.length; i++) {
    await checkUrl(urls[i]);
  }
}
main();
