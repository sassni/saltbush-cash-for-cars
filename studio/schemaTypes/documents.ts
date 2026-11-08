import {defineType, defineField} from 'sanity'
import {str, txt, img, list, strList} from './objects'

const seoField = defineField({name: 'seo', title: 'Google search listing (SEO)', type: 'seo', group: 'seo'})
const groups = (...extra: {name: string; title: string}[]) => [
  {name: 'hero', title: 'Top of page', default: true},
  ...extra,
  {name: 'seo', title: 'SEO'},
]
const g = (group: string, f: any) => ({...f, group})

/* ===================== SITE SETTINGS (contact details live here) ===================== */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings & contact details',
  type: 'document',
  groups: [
    {name: 'contact', title: 'Contact details', default: true},
    {name: 'form', title: 'Quote form'},
    {name: 'shared', title: 'Shared sections'},
    {name: 'footer', title: 'Header & footer'},
  ],
  fields: [
    g('contact', str('businessName', 'Business name', 'Used in the logo, footer and Google listing.')),
    g('contact', str('phone', 'Phone number', 'Change it here and it updates everywhere on the website (header, buttons, footer, contact page). Write it how people should see it, e.g. 0412 345 678.', {validation: (r: any) => r.required()})),
    g('contact', str('email', 'Email address', 'Shown on the contact page and footer.')),
    g('contact', str('street', 'Street address')),
    g('contact', str('suburb', 'Suburb')),
    g('contact', str('postcode', 'Postcode')),
    g('contact', str('state', 'State', undefined, {initialValue: 'SA'})),
    g('contact', strList('hours', 'Opening hours', 'One line per row, e.g. "Mon–Fri: 7am – 6pm".')),
    g('contact', str('abn', 'ABN', 'Shown in the footer.')),
    g('contact', txt('mapNote', 'Service area note', 'Short sentence about where you collect cars.', 2)),

    g('form', str('formHeading', 'Form heading')),
    g('form', txt('formIntro', 'Text under the form heading', undefined, 2)),
    g('form', str('formButton', 'Submit button text')),
    g('form', txt('formReassurance', 'Small print under the button', undefined, 2)),
    g('form', str('formSuccess', 'Message shown after sending')),

    g('shared', str('areasHeading', '"Areas we service" heading')),
    g('shared', txt('areasIntro', '"Areas we service" text', undefined, 3)),
    g('shared', strList('suburbs', 'Suburbs / regions you service', 'Shown as tags on the Home, Contact and service pages.')),
    g('shared', str('testimonialsHeading', 'Reviews section heading')),
    g('shared', list('testimonials', 'Customer reviews', 'testimonial', 'Shown on the Home page and service pages.')),
    g('shared', str('ctaHeading', 'Bottom call-to-action heading', 'The dark banner near the bottom of most pages.')),
    g('shared', txt('ctaText', 'Bottom call-to-action text', undefined, 2)),

    g('footer', str('headerButton', 'Header button text', 'e.g. "Free Quote"')),
    g('footer', str('callLabel', 'Call button text', 'Shown before the phone number on call buttons, e.g. "Call".')),
    g('footer', str('quoteLabel', 'Quote button text', 'e.g. "Get My Free Quote"')),
    g('footer', txt('footerBlurb', 'Footer description', undefined, 3)),
    g('footer', img('socialImage', 'Image used when the site is shared on Facebook etc.')),
  ],
  preview: {prepare: () => ({title: 'Site settings & contact details'})},
})

/* ===================== HOME ===================== */
export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  groups: groups({name: 'sections', title: 'Page sections'}, {name: 'faq', title: 'FAQs'}),
  fields: [
    g('hero', str('heroEyebrow', 'Small label above the headline')),
    g('hero', str('heroHeading', 'Main headline (H1)', 'The biggest text on the page. Include "Adelaide" for Google.', {validation: (r: any) => r.required()})),
    g('hero', txt('heroText', 'Text under the headline', undefined, 3)),
    g('hero', strList('heroPoints', 'Tick-list points', 'Short selling points shown with a tick.')),
    g('hero', str('heroBadge', 'Number-plate badge text', 'e.g. "UP TO $15,000"')),
    g('hero', img('heroImage', 'Main photo')),
    g('sections', list('stats', 'Trust numbers strip', 'stat')),
    g('sections', str('stepsHeading', '"How it works" heading')),
    g('sections', txt('stepsIntro', '"How it works" text', undefined, 2)),
    g('sections', list('steps', 'Steps', 'step')),
    g('sections', str('buyHeading', '"What we buy" heading')),
    g('sections', txt('buyIntro', '"What we buy" text', undefined, 2)),
    g('sections', list('buyItems', '"What we buy" cards', 'feature')),
    g('sections', img('buyImage', '"What we buy" photo')),
    g('sections', str('servicesHeading', 'Services section heading')),
    g('sections', txt('servicesIntro', 'Services section text', undefined, 2)),
    g('sections', str('whyHeading', '"Why choose us" heading')),
    g('sections', txt('whyIntro', '"Why choose us" text', undefined, 2)),
    g('sections', list('whyItems', '"Why choose us" points', 'feature')),
    g('faq', str('faqHeading', 'FAQ heading')),
    g('faq', list('faqs', 'Questions & answers', 'faqItem')),
    seoField,
  ],
  preview: {prepare: () => ({title: 'Home page'})},
})

/* ===================== SERVICES OVERVIEW ===================== */
export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services page',
  type: 'document',
  groups: groups({name: 'sections', title: 'Page sections'}, {name: 'faq', title: 'FAQs'}),
  fields: [
    g('hero', str('heroEyebrow', 'Small label above the headline')),
    g('hero', str('heroHeading', 'Main headline (H1)', undefined, {validation: (r: any) => r.required()})),
    g('hero', txt('heroText', 'Text under the headline', undefined, 3)),
    g('hero', img('heroImage', 'Main photo')),
    g('sections', str('listHeading', 'Services list heading')),
    g('sections', txt('listIntro', 'Services list text', undefined, 2)),
    g('sections', str('buyHeading', '"What we buy" heading')),
    g('sections', list('buyItems', '"What we buy" cards', 'feature')),
    g('faq', str('faqHeading', 'FAQ heading')),
    g('faq', list('faqs', 'Questions & answers', 'faqItem')),
    seoField,
  ],
  preview: {prepare: () => ({title: 'Services page'})},
})

/* ===================== INDIVIDUAL SERVICE ===================== */
export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: groups({name: 'card', title: 'Service card'}, {name: 'sections', title: 'Page sections'}, {name: 'faq', title: 'FAQs'}),
  fields: [
    g('card', str('title', 'Service name', 'Used in the menu and on service cards.', {validation: (r: any) => r.required()})),
    g('card', defineField({name: 'slug', title: 'Page address', type: 'slug', readOnly: true, description: 'Fixed web address - contact your developer to change.'})),
    g('card', txt('summary', 'Short summary for service cards', undefined, 2)),
    g('card', defineField({name: 'order', title: 'Order in lists', type: 'number', hidden: true})),
    g('hero', str('heroEyebrow', 'Small label above the headline')),
    g('hero', str('heroHeading', 'Main headline (H1)', undefined, {validation: (r: any) => r.required()})),
    g('hero', txt('heroText', 'Text under the headline', undefined, 3)),
    g('hero', strList('heroPoints', 'Tick-list points')),
    g('hero', img('heroImage', 'Main photo')),
    g('sections', list('sections', 'Content sections', 'contentSection')),
    g('sections', str('benefitsHeading', 'Benefits heading')),
    g('sections', list('benefits', 'Benefit cards', 'feature')),
    g('sections', str('stepsHeading', 'Process heading')),
    g('sections', list('steps', 'Process steps', 'step')),
    g('faq', str('faqHeading', 'FAQ heading')),
    g('faq', list('faqs', 'Questions & answers', 'faqItem')),
    seoField,
  ],
  orderings: [{title: 'Order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'slug.current', media: 'heroImage'}, prepare: ({title, subtitle, media}: any) => ({title, subtitle: subtitle ? `/services/${subtitle}` : '', media})},
})

/* ===================== ABOUT ===================== */
export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  groups: groups({name: 'sections', title: 'Page sections'}),
  fields: [
    g('hero', str('heroEyebrow', 'Small label above the headline')),
    g('hero', str('heroHeading', 'Main headline (H1)', undefined, {validation: (r: any) => r.required()})),
    g('hero', txt('heroText', 'Text under the headline', undefined, 3)),
    g('hero', img('heroImage', 'Main photo')),
    g('sections', list('sections', 'Story sections', 'contentSection')),
    g('sections', list('stats', 'Numbers strip', 'stat')),
    g('sections', str('valuesHeading', 'Values heading')),
    g('sections', list('values', 'Values', 'feature')),
    seoField,
  ],
  preview: {prepare: () => ({title: 'About page'})},
})

/* ===================== CONTACT ===================== */
export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  groups: groups({name: 'faq', title: 'FAQs'}),
  fields: [
    g('hero', str('heroEyebrow', 'Small label above the headline')),
    g('hero', str('heroHeading', 'Main headline (H1)', undefined, {validation: (r: any) => r.required()})),
    g('hero', txt('heroText', 'Text under the headline', undefined, 3)),
    g('hero', str('detailsHeading', 'Contact details heading')),
    g('hero', str('hoursHeading', 'Opening hours heading')),
    g('faq', str('faqHeading', 'FAQ heading')),
    g('faq', list('faqs', 'Questions & answers', 'faqItem')),
    seoField,
  ],
  preview: {prepare: () => ({title: 'Contact page'})},
})

/* ===================== THANK YOU + 404 ===================== */
export const thankYouPage = defineType({
  name: 'thankYouPage',
  title: 'Thank-you page (after form)',
  type: 'document',
  groups: groups(),
  fields: [
    g('hero', str('heroHeading', 'Headline (H1)')),
    g('hero', txt('heroText', 'Text', undefined, 3)),
    g('hero', str('buttonLabel', 'Button text')),
    seoField,
  ],
  preview: {prepare: () => ({title: 'Thank-you page'})},
})

export const notFoundPage = defineType({
  name: 'notFoundPage',
  title: '404 page (page not found)',
  type: 'document',
  groups: groups(),
  fields: [
    g('hero', str('heroHeading', 'Headline (H1)')),
    g('hero', txt('heroText', 'Text', undefined, 3)),
    g('hero', str('buttonLabel', 'Button text')),
    g('hero', img('heroImage', 'Photo')),
    seoField,
  ],
  preview: {prepare: () => ({title: '404 page'})},
})

export const documents = [siteSettings, homePage, servicesPage, service, aboutPage, contactPage, thankYouPage, notFoundPage]
