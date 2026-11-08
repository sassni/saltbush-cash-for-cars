// One-off: upload new photos and swap them into existing documents (keeps all other content).
// Run from /studio:  npx sanity exec scripts/replace-images.mjs --with-user-token
import cli from 'sanity/cli'
const {getCliClient} = cli
import fs from 'node:fs'
import path from 'node:path'

const client = getCliClient({apiVersion: '2024-10-01'})
const dir = path.resolve('../seed/images')
const upload = async (file, alt) => {
  const asset = await client.assets.upload('image', fs.createReadStream(path.join(dir, file)), {filename: file})
  return {_type: 'altImage', alt, asset: {_type: 'reference', _ref: asset._id}}
}

const buy = await upload('damaged-modern-car.webp', 'Modern white hatchback with front-end crash damage, the kind of car we buy for cash')
const tow = await upload('damaged-car-on-tow-truck.webp', 'Damaged red car strapped onto a flatbed tow truck for free removal')
const scrap = await upload('crushed-scrap-cars.webp', 'Pile of crushed scrap cars ready for metal recycling')
const nf = await upload('scrap-pile-blue-sky.webp', 'Stack of wrecked cars at a scrap yard under a blue sky')

const firstSectionKey = async (id) => (await client.getDocument(id)).sections[0]._key
const removalKey = await firstSectionKey('service-car-removal')
const scrapKey = await firstSectionKey('service-scrap-car-removal')

await client.transaction()
  .patch('homePage', (p) => p.set({buyImage: buy}))
  .patch('service-car-removal', (p) => p.set({[`sections[_key=="${removalKey}"].image`]: tow}))
  .patch('service-scrap-car-removal', (p) => p.set({[`sections[_key=="${scrapKey}"].image`]: scrap}))
  .patch('notFoundPage', (p) => p.set({heroImage: nf}))
  .commit()
console.log('Images replaced')
