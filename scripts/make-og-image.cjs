// Builds the 1200x630 social share image (logo centred so square crops still show it).
const sharp = require('sharp'); const path = require('path')
const car = `<path d="M3.4 20.3c0-.8.6-1.4 1.4-1.4h3v3.6h-3c-.8 0-1.4-.6-1.4-1.4zM44.6 20.3c0-.8-.6-1.4-1.4-1.4h-3v3.6h3c.8 0 1.4-.6 1.4-1.4z" fill="#07110a"/><rect x="8.4" y="29.6" width="6.4" height="6" rx="2" fill="#07110a"/><rect x="33.2" y="29.6" width="6.4" height="6" rx="2" fill="#07110a"/><path d="M13.8 14.6c.6-1.3 1.8-2.1 3.2-2.1h14c1.4 0 2.6.8 3.2 2.1l3 6.4H39c1.7 0 3 1.3 3 3v5.5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V24c0-1.7 1.3-3 3-3h1.8z" fill="#07110a"/><path d="M18.2 15.6h11.6c.5 0 .9.3 1.1.7l2.7 4.7H14.4l2.7-4.7c.2-.4.6-.7 1.1-.7z" fill="url(#g)"/><path d="M8.6 24.1l9.6 1.3-1.1 2.1H9.7c-.6 0-1.1-.5-1.1-1.1zM39.4 24.1l-9.6 1.3 1.1 2.1h7.4c.6 0 1.1-.5 1.1-1.1z" fill="url(#g)"/><rect x="18.4" y="24.9" width="11.2" height=".9" rx=".45" fill="url(#g)" opacity=".8"/><path d="M17.2 28.9h13.6l-1.2 1.6H18.4z" fill="url(#g)" opacity=".55"/>`
const grid = Array.from({length: 22}, (_, i) => `<path d="M${i * 56} 0V630" stroke="#ffffff" stroke-opacity=".035"/>`).join('') +
  Array.from({length: 12}, (_, i) => `<path d="M0 ${i * 56}H1200" stroke="#ffffff" stroke-opacity=".035"/>`).join('')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b6f23a"/><stop offset="1" stop-color="#2ee6c5"/></linearGradient>
  <radialGradient id="r1" cx="1" cy="0" r=".7"><stop offset="0" stop-color="#2ee6c5" stop-opacity=".28"/><stop offset="1" stop-color="#2ee6c5" stop-opacity="0"/></radialGradient>
  <radialGradient id="r2" cx="0" cy="1" r=".7"><stop offset="0" stop-color="#b6f23a" stop-opacity=".22"/><stop offset="1" stop-color="#b6f23a" stop-opacity="0"/></radialGradient>
  <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#b6f23a" stop-opacity=".35"/><stop offset="1" stop-color="#b6f23a" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1200" height="630" fill="#0a0d0c"/>${grid}
<rect width="1200" height="630" fill="url(#r1)"/><rect width="1200" height="630" fill="url(#r2)"/>
<circle cx="600" cy="205" r="210" fill="url(#glow)"/>
<g transform="translate(490 95) scale(4.583)"><rect width="48" height="48" rx="13" fill="url(#g)"/>${car}</g>
<text x="600" y="400" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="84" letter-spacing="-3" fill="#ffffff">Saltbush</text>
<text x="600" y="450" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="26" letter-spacing="9" fill="#a3ada8">CASH FOR CARS · ADELAIDE</text>
<rect x="300" y="498" width="600" height="62" rx="31" fill="#121816" stroke="url(#g)" stroke-width="2"/>
<text x="600" y="538" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="25" fill="#ffffff">Free quote <tspan fill="#b6f23a">·</tspan> Free removal <tspan fill="#b6f23a">·</tspan> Paid on pickup</text>
</svg>`
const out = path.join(__dirname, '..', 'seed', 'images', 'social-share.png')
sharp(Buffer.from(svg), {density: 144}).resize(1200, 630).png({compressionLevel: 9}).toFile(out).then((i) => console.log(out, i.size))
