import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

// useCdn: false so a rebuild triggered by "Publish" always gets the freshest content
export const client = createClient({projectId, dataset, apiVersion: '2024-10-01', useCdn: false, perspective: 'published'})
const builder = createImageUrlBuilder({projectId, dataset})
export const urlFor = (src) => builder.image(src).auto('format')
export const plainUrlFor = (src) => builder.image(src) // fixed format, for social share images

// Read original dimensions from the asset id: image-<hash>-1800x1200-webp
export function dims(img) {
  const ref = img?.asset?._ref || img?.asset?._id || ''
  const m = ref.match(/-(\d+)x(\d+)-/)
  return m ? {w: +m[1], h: +m[2]} : {w: 1600, h: 1067}
}

const cache = new Map()
export async function fetchOnce(query, params = {}) {
  const k = query + JSON.stringify(params)
  if (!cache.has(k)) cache.set(k, client.fetch(query, params))
  return cache.get(k)
}

export const getSettings = () => fetchOnce(`*[_id == "siteSettings"][0]`)
export const getServices = () => fetchOnce(`*[_type == "service" && !(_id in path("drafts.**"))] | order(order asc)`)
export const getPage = (id) => fetchOnce(`*[_id == $id][0]`, {id})

export const telHref = (phone = '') => 'tel:' + phone.replace(/[^\d+]/g, '').replace(/^0/, '+61')
