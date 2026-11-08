import {defineType, defineField, defineArrayMember} from 'sanity'

/* ---------- Small helpers so every field has friendly help text ---------- */
export const str = (name: string, title: string, description?: string, extra: object = {}) =>
  defineField({name, title, type: 'string', description, ...extra})
export const txt = (name: string, title: string, description?: string, rows = 3, extra: object = {}) =>
  defineField({name, title, type: 'text', rows, description, ...extra})
export const img = (name: string, title: string, description?: string, extra: object = {}) =>
  defineField({name, title, type: 'altImage', description, ...extra})
export const list = (name: string, title: string, of: string, description?: string, extra: object = {}) =>
  defineField({name, title, type: 'array', of: [defineArrayMember({type: of})], description, ...extra})
export const strList = (name: string, title: string, description?: string, extra: object = {}) =>
  defineField({name, title, type: 'array', of: [defineArrayMember({type: 'string'})], description, ...extra})

/* ---------- Image with required alt text ---------- */
export const altImage = defineType({
  name: 'altImage',
  title: 'Image',
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text (describe the photo)',
      type: 'string',
      description:
        'Describe what is in the photo for people using screen readers and for Google, e.g. "Tow truck collecting a damaged sedan in Salisbury".',
      validation: (r) => r.required().error('Please describe the image - it helps Google and accessibility.'),
    }),
  ],
})

/* ---------- SEO ---------- */
export const seo = defineType({
  name: 'seo',
  title: 'Google search listing (SEO)',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  description: 'How this page appears in Google search results and when shared on social media.',
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      description: 'Blue clickable headline in Google. Aim for 50–60 characters and include the main keyword + "Adelaide".',
      validation: (r) => r.required().max(65).warning('Keep it under about 60 characters so Google does not cut it off.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'The grey text under the title in Google. Aim for 140–160 characters and end with a reason to click.',
      validation: (r) => r.required().max(170).warning('Keep it under about 160 characters.'),
    }),
  ],
})

export const faqItem = defineType({
  name: 'faqItem',
  title: 'Question',
  type: 'object',
  fields: [
    str('question', 'Question', undefined, {validation: (r: any) => r.required()}),
    txt('answer', 'Answer', 'Keep it short and plain. Leave a blank line to start a new paragraph.', 4, {
      validation: (r: any) => r.required(),
    }),
  ],
  preview: {select: {title: 'question', subtitle: 'answer'}},
})

export const step = defineType({
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [str('title', 'Step title'), txt('text', 'Step description', undefined, 2)],
  preview: {select: {title: 'title', subtitle: 'text'}},
})

export const feature = defineType({
  name: 'feature',
  title: 'Card',
  type: 'object',
  fields: [str('title', 'Card heading'), txt('text', 'Card text', undefined, 3)],
  preview: {select: {title: 'title', subtitle: 'text'}},
})

export const stat = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'object',
  fields: [
    str('value', 'Big number / short value', 'e.g. "Same day" or "$15k"'),
    str('label', 'Label under the number', 'e.g. "pickup across Adelaide"'),
  ],
  preview: {select: {title: 'value', subtitle: 'label'}},
})

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Customer review',
  type: 'object',
  fields: [
    txt('quote', 'What the customer said', undefined, 3),
    str('name', 'Customer first name'),
    str('suburb', 'Customer suburb'),
    str('car', 'Car sold', 'e.g. "2006 Holden Commodore"'),
  ],
  preview: {select: {title: 'name', subtitle: 'quote'}},
})

export const contentSection = defineType({
  name: 'contentSection',
  title: 'Content section',
  type: 'object',
  fields: [
    str('heading', 'Section heading'),
    defineField({
      name: 'body',
      title: 'Section text',
      type: 'array',
      description: 'Use the toolbar for bold text, bullet lists and links to other pages (e.g. /services/car-removal).',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Bold', value: 'strong'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [{name: 'href', type: 'string', title: 'Link (e.g. /contact or https://...)'}],
              },
            ],
          },
        }),
      ],
    }),
    img('image', 'Image beside the text (optional)'),
  ],
  preview: {select: {title: 'heading', media: 'image'}},
})

export const objects = [altImage, seo, faqItem, step, feature, stat, testimonial, contentSection]
