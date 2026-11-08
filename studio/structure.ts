import type {StructureResolver} from 'sanity/structure'

// Friendly sidebar for the client: every page is a single fixed document.
const single = (S: any, type: string, title: string) =>
  S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type).title(title))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website content')
    .items([
      single(S, 'siteSettings', '⚙️  Contact details & site settings'),
      S.divider(),
      single(S, 'homePage', '🏠  Home page'),
      single(S, 'servicesPage', '🧰  Services page'),
      S.listItem()
        .title('🚗  Individual service pages')
        .child(S.documentTypeList('service').title('Service pages').defaultOrdering([{field: 'order', direction: 'asc'}]).menuItems([])),
      single(S, 'aboutPage', '👋  About page'),
      single(S, 'contactPage', '📞  Contact page'),
      S.divider(),
      single(S, 'thankYouPage', '✅  Thank-you page'),
      single(S, 'notFoundPage', '🚧  404 page'),
    ])
