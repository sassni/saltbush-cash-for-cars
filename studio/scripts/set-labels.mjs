// Adds the small labels & buttons to Site settings without overwriting anything already edited.
// Run from /studio:  npx sanity exec scripts/set-labels.mjs --with-user-token
import cli from 'sanity/cli'
import {labels} from '../../seed/labels.mjs'
const client = cli.getCliClient({apiVersion: '2024-10-01'})
await client.patch('siteSettings').setIfMissing(labels).commit()
console.log('Labels added:', Object.keys(labels).length)
