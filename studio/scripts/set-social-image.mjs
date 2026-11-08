// Uploads the branded share image into Site settings > Social image.
// Run from /studio:  npx sanity exec scripts/set-social-image.mjs --with-user-token
import cli from 'sanity/cli'
import fs from 'node:fs'
import path from 'node:path'
const client = cli.getCliClient({apiVersion: '2024-10-01'})
const file = path.resolve('../seed/images/social-share.png')
const asset = await client.assets.upload('image', fs.createReadStream(file), {filename: 'social-share.png'})
await client.patch('siteSettings').set({socialImage: {_type: 'altImage', alt: 'Saltbush Cash for Cars logo – Adelaide car buyers', asset: {_type: 'reference', _ref: asset._id}}}).commit()
console.log('Social image set')
