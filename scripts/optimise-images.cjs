// Resize + compress seed photos to WebP before uploading to Sanity
const sharp = require('sharp'); const fs = require('fs'); const path = require('path');
const dir = path.join(__dirname, '..', 'seed', 'images');
(async () => {
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.jpg'))) {
    const out = path.join(dir, f.replace('.jpg', '.webp'));
    await sharp(path.join(dir, f)).resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    fs.unlinkSync(path.join(dir, f));
    console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
  }
})();
