import {defineConfig} from 'astro/config'
import sitemap from '@astrojs/sitemap'
import {loadEnv} from 'vite'

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '')
const site = process.env.SITE_URL || env.SITE_URL || 'https://saltbush-cash-for-cars.vercel.app'

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {inlineStylesheets: 'always', format: 'file'},
  integrations: [sitemap({filter: (page) => !page.includes('/thank-you') && !page.includes('/404')})],
  image: {remotePatterns: [{protocol: 'https', hostname: 'cdn.sanity.io'}]},
})
