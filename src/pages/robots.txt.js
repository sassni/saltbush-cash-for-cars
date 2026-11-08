export function GET({site}) {
  const base = (site?.toString() || '').replace(/\/$/, '')
  return new Response(`User-agent: *\nAllow: /\nDisallow: /thank-you\n\nSitemap: ${base}/sitemap-index.xml\n`, {headers: {'Content-Type': 'text/plain'}})
}
