// Quick on-page SEO audit of the built site (run after `npm run build`).
import fs from 'node:fs'
import path from 'node:path'
const dist = path.resolve('dist')
const pages = []
const walk = (d) => fs.readdirSync(d, {withFileTypes: true}).forEach((e) => {
  const p = path.join(d, e.name)
  if (e.isDirectory()) walk(p); else if (e.name.endsWith('.html')) pages.push(p)
})
walk(dist)
const titles = new Map(), descs = new Map()
let problems = 0
const warn = (f, m) => { problems++; console.log(`✗ ${f}: ${m}`) }
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8')
  const f = path.relative(dist, file)
  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) warn(f, `${h1} H1 tags`)
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
  if (!title) warn(f, 'missing title'); else titles.set(title, [...(titles.get(title) || []), f])
  if (!desc) warn(f, 'missing meta description'); else descs.set(desc, [...(descs.get(desc) || []), f])
  for (const img of html.match(/<img [^>]*>/g) || []) {
    if (!/ alt="[^"]+"/.test(img)) warn(f, 'img without alt')
    if (!/ width="/.test(img) || !/ height="/.test(img)) warn(f, 'img without width/height')
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]) } catch { warn(f, 'invalid JSON-LD') }
  }
  // heading order: no skipped levels
  let last = 1
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) { const l = +m[1]; if (l > last + 1) warn(f, `heading jumps h${last}→h${l}`); last = l }
  const types = [...html.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]).filter((t, i, a) => a.indexOf(t) === i && ['AutomotiveBusiness', 'FAQPage', 'Service', 'BreadcrumbList', 'WebSite'].includes(t))
  console.log(`✓ ${f.padEnd(34)} h1=${h1}  title=${(title || '').length}ch  desc=${(desc || '').length}ch  schema=${types.join(',')}`)
}
for (const [t, fs_] of titles) if (fs_.length > 1) warn(fs_.join(', '), `duplicate title "${t}"`)
for (const [d, fs_] of descs) if (fs_.length > 1) warn(fs_.join(', '), 'duplicate meta description')
for (const f of ['sitemap-index.xml', 'robots.txt', 'favicon.svg', '404.html']) if (!fs.existsSync(path.join(dist, f))) warn(f, 'missing')
console.log(problems ? `\n${problems} problem(s) found` : '\nAll checks passed')
