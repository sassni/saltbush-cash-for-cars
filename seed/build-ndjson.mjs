// Converts seed/content.mjs into seed/seed.ndjson for `sanity dataset import`.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import * as c from './content.mjs'
import {labels} from './labels.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
let n = 0
const key = () => 'k' + (++n).toString(36) + Math.random().toString(36).slice(2, 7)

const image = (i) => i && ({_type: 'altImage', alt: i.alt, _sanityAsset: `image@file://${path.join(here, 'images', i.file)}`})
const keyed = (arr, type) => (arr || []).map((o) => ({_key: key(), _type: type, ...o}))

// Tiny markdown -> Portable Text: paragraphs, "- " bullets, **bold**, [text](href)
function spans(text, markDefs) {
  const out = []
  const re = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g
  let last = 0, m
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({_type: 'span', _key: key(), text: text.slice(last, m.index), marks: []})
    if (m[2]) out.push({_type: 'span', _key: key(), text: m[2], marks: ['strong']})
    else { const k = key(); markDefs.push({_key: k, _type: 'link', href: m[4]}); out.push({_type: 'span', _key: key(), text: m[3], marks: [k]}) }
    last = re.lastIndex
  }
  if (last < text.length) out.push({_type: 'span', _key: key(), text: text.slice(last), marks: []})
  return out
}
function pt(md) {
  const blocks = []
  for (const para of md.trim().split(/\n\s*\n/)) {
    const lines = para.split('\n')
    if (lines.every((l) => l.trim().startsWith('- '))) {
      for (const l of lines) { const markDefs = []; blocks.push({_type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, markDefs, children: spans(l.trim().slice(2), markDefs)}) }
    } else {
      const markDefs = []
      blocks.push({_type: 'block', _key: key(), style: 'normal', markDefs, children: spans(lines.join(' ').trim(), markDefs)})
    }
  }
  return blocks
}
const sections = (arr) => (arr || []).map((s) => ({_key: key(), _type: 'contentSection', heading: s.heading, body: pt(s.body), ...(s.image ? {image: image(s.image)} : {})}))
const seo = (s) => ({_type: 'seo', ...s})

const docs = []
const s = c.settings
docs.push({_id: 'siteSettings', _type: 'siteSettings', ...s, ...labels, testimonials: keyed(s.testimonials, 'testimonial'), socialImage: image({file: 'social-share.png', alt: 'Saltbush Cash for Cars logo – Adelaide car buyers'})})

const h = c.home
docs.push({_id: 'homePage', _type: 'homePage', ...h, seo: seo(h.seo), heroImage: image(h.heroImage), buyImage: image(h.buyImage),
  stats: keyed(h.stats, 'stat'), steps: keyed(h.steps, 'step'), buyItems: keyed(h.buyItems, 'feature'), whyItems: keyed(h.whyItems, 'feature'), faqs: keyed(h.faqs, 'faqItem')})

const sp = c.servicesPage
docs.push({_id: 'servicesPage', _type: 'servicesPage', ...sp, seo: seo(sp.seo), heroImage: image(sp.heroImage), buyItems: keyed(sp.buyItems, 'feature'), faqs: keyed(sp.faqs, 'faqItem')})

for (const sv of c.services) {
  docs.push({_id: `service-${sv.slug}`, _type: 'service', ...sv, slug: {_type: 'slug', current: sv.slug}, seo: seo(sv.seo), heroImage: image(sv.heroImage),
    sections: sections(sv.sections), benefits: keyed(sv.benefits, 'feature'), steps: keyed(sv.steps, 'step'), faqs: keyed(sv.faqs, 'faqItem')})
}

const a = c.about
docs.push({_id: 'aboutPage', _type: 'aboutPage', ...a, seo: seo(a.seo), heroImage: image(a.heroImage), sections: sections(a.sections), stats: keyed(a.stats, 'stat'), values: keyed(a.values, 'feature')})

const ct = c.contact
docs.push({_id: 'contactPage', _type: 'contactPage', ...ct, seo: seo(ct.seo), faqs: keyed(ct.faqs, 'faqItem')})
docs.push({_id: 'thankYouPage', _type: 'thankYouPage', ...c.thankYou, seo: seo(c.thankYou.seo)})
docs.push({_id: 'notFoundPage', _type: 'notFoundPage', ...c.notFound, seo: seo(c.notFound.seo), heroImage: image(c.notFound.heroImage)})

fs.writeFileSync(path.join(here, 'seed.ndjson'), docs.map((d) => JSON.stringify(d)).join('\n') + '\n')
console.log(`Wrote ${docs.length} documents to seed/seed.ndjson`)
