import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'vtngo4p4'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// The client edits existing content only: no creating, deleting or duplicating documents.
const locked = new Set(['delete', 'duplicate', 'unpublish'])

export default defineConfig({
  name: 'default',
  title: 'Saltbush Cash for Cars',
  projectId,
  dataset,
  plugins: [structureTool({structure})],
  schema: {
    types: schemaTypes,
    templates: () => [],
  },
  document: {
    newDocumentOptions: () => [],
    actions: (prev) => prev.filter((a) => !locked.has(a.action as string)),
  },
})
