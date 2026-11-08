// JSON-LD structured data builders
export function businessSchema(s, site, imageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': site + '/#business',
    name: s.businessName,
    url: site,
    telephone: s.phone,
    email: s.email,
    image: imageUrl,
    logo: site + '/favicon.svg',
    priceRange: '$$',
    address: {'@type': 'PostalAddress', streetAddress: s.street, addressLocality: s.suburb, postalCode: s.postcode, addressRegion: s.state, addressCountry: 'AU'},
    geo: {'@type': 'GeoCoordinates', latitude: -34.8436, longitude: 138.5585},
    areaServed: [{'@type': 'City', name: 'Adelaide'}, ...(s.suburbs || []).map((name) => ({'@type': 'Place', name: name + ' SA'}))],
    openingHoursSpecification: [
      {'@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00'},
      {'@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '16:00'},
    ],
  }
}
export const faqSchema = (faqs = []) => faqs.length ? ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({'@type': 'Question', name: f.question, acceptedAnswer: {'@type': 'Answer', text: f.answer}})),
}) : null
export const breadcrumbSchema = (items, site) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({'@type': 'ListItem', position: i + 1, name: it.name, item: site + it.href})),
})
export const serviceSchema = (sv, site) => ({
  '@context': 'https://schema.org', '@type': 'Service',
  name: sv.title, serviceType: sv.title, description: sv.seo?.description || sv.summary,
  url: `${site}/services/${sv.slug.current}`, provider: {'@id': site + '/#business'},
  areaServed: {'@type': 'City', name: 'Adelaide'},
})
export const websiteSchema = (s, site) => ({'@context': 'https://schema.org', '@type': 'WebSite', name: s.businessName, url: site})
