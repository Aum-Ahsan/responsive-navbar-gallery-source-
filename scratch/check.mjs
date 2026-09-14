import fs from 'fs';
for (let i = 1; i <= 29; i++) {
  const id = String(i).padStart(2, '0');
  const file = `components/carousels/carousel-${id}/Carousel${id}.tsx`;
  if (fs.existsSync(file)) {
    const txt = fs.readFileSync(file, 'utf8');
    const m = txt.match(/name="([^"]+)"/);
    console.log(`${id}: ${m ? m[1] : 'unknown'}`);
  }
}
