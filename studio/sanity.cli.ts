import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'vtngo4p4',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'saltbush-cash-for-cars',
  deployment: {autoUpdates: true},
})
