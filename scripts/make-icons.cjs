// Generates PNG favicons from public/favicon.svg
const sharp = require('sharp'); const path = require('path')
const svg = path.join(__dirname, '..', 'public', 'favicon.svg')
const out = (f) => path.join(__dirname, '..', 'public', f)
;(async () => {
  await sharp(svg, {density: 600}).resize(32, 32).png().toFile(out('favicon-32.png'))
  await sharp(svg, {density: 600}).resize(180, 180).flatten({background: '#0a0d0c'}).png().toFile(out('apple-touch-icon.png'))
  await sharp(svg, {density: 600}).resize(192, 192).png().toFile(out('icon-192.png'))
  await sharp(svg, {density: 600}).resize(512, 512).png().toFile(out('icon-512.png'))
  console.log('icons done')
})()
