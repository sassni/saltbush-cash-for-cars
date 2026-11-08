# Saltbush Cash for Cars: client website

A mobile-first site for an Adelaide business that buys unwanted cars and tows them away for free. Its one job is to get visitors to **request a quote or call**.

- **Live site:** https://saltbush-cash-for-cars.vercel.app
- **CMS (editor login):** https://saltbush-cash-for-cars.sanity.studio
- **Pages:** Home, Services, Cash for Cars, Car Removal, Scrap Car Removal, About, Contact, Thank-you, custom 404

## Stack and why

**Astro (static site) + Sanity CMS, hosted on Vercel.**

- **Easy for the client.** Sanity Studio is a hosted web app with nothing to install. Each page is one form in a plain-English sidebar, and every field has help text.
- **Everything is editable**, including:
  - every heading, paragraph, button and small label
  - images, with alt text required
  - service content, FAQs and reviews
  - SEO titles and meta descriptions
- **Contact details live in one place.** Change the phone number once in *Site settings* and the header, buttons, call bar, footer, contact page and structured data all update.
- **Safe.** Creating, deleting and duplicating pages is switched off, and page addresses are locked. The client edits what exists, and new services or locations come to the developer.
- **Fast and low-maintenance.** The output is plain HTML with almost no JavaScript, and images come resized and in WebP/AVIF from the Sanity CDN. There are no plugins or security updates to manage.
  - PageSpeed mobile: **98–100** performance, **100** accessibility, best practices and SEO.
  - PageSpeed desktop: **100** across the board.
- **Publishing.** Clicking Publish triggers a webhook to a Vercel Deploy Hook, and the live site rebuilds in about 1 minute.

## Hosting recommendation

- **Website: Vercel.** The Hobby plan is fine for the demo. Use **Pro** ($20/month) or **Netlify** for a commercial client. Both give a global CDN, HTTPS and instant rollbacks with no server to maintain.
- **CMS: Sanity Free plan.**
- **Quote-form emails: Web3Forms** (free).
- **Expected cost:** $0–$20/month plus the domain.

## How the client edits the site

1. Log in at **saltbush-cash-for-cars.sanity.studio**.
2. Pick a page in the sidebar. The tabs split it into *Top of page*, *Page sections*, *FAQs* and *SEO*.
3. Make your change:
   - **Text:** type over it.
   - **Image:** click it, choose *Replace*, then update the *Alt text*.
   - **Phone, email, address or hours:** open *Contact details & site settings*.
   - **Menu names, small labels, footer text or form labels:** use the same document's *Small labels & buttons* and *Quote form* tabs.
4. Click **Publish**. The live site updates in about 1 minute.

## Design decisions

- **Concept: dark premium with neon accents.** A near-black canvas, glass-effect cards and a lime-to-teal glow make a trade business look as polished as a tech brand. It stands apart from the red, blue and yellow sites common in this industry, and the lime calls to action stand out strongly.
- **Palette:** all text meets WCAG AA contrast.

  | Colour | Hex | Use |
  |---|---|---|
  | Background | `#0A0D0C` | page canvas |
  | Surface | `#121816` | cards |
  | Text | `#F2F5F3` | body text |
  | Muted | `#A3ADA8` | secondary text |
  | Lime | `#B6F23A` | calls to action |
  | Teal | `#2EE6C5` | gradient accent |

- **Type:** *Space Grotesk* for headings and *Inter* for body text. Both are self-hosted and preloaded.
- **Components:**
  - lime pill buttons at least 48px tall, with a glass outline for secondary actions
  - 20px-radius glass cards
  - a gradient-bordered quote card
  - a front-view car logo on a gradient tile
- **Spacing:** a 4px spacing scale with fluid type sizes.
- **Conversion layout** (as on the reference sites):
  - Every key page has an H1, a quote button and a call button above the fold.
  - The quote form sits in the hero: a right-hand column on desktop, directly underneath on mobile.
  - A sticky header on desktop and a floating Call / Free Quote bar on mobile.
- **Images:** free Unsplash photos, replaceable in the CMS.

## SEO keyword plan

| Page | Primary keyword | Supporting keywords |
|---|---|---|
| Home | cash for cars Adelaide | sell my car Adelaide, car buyers Adelaide |
| Cash for Cars | sell my car for cash Adelaide | cash for damaged cars, sell car fast |
| Car Removal | car removal Adelaide | free car removal, unwanted car removal |
| Scrap Car Removal | scrap car removal Adelaide | cash for scrap cars, car recycling |
| Services | car removal services Adelaide | car buyers, wreckers Adelaide |
| About / Contact | Saltbush Cash for Cars (brand) | local car buyers, car quote Adelaide |

The service-areas section adds suburb modifiers (e.g. "car removal Salisbury").

**Built in:**
- one H1 per page with a logical heading hierarchy
- a unique title and meta description per page, editable in the CMS
- canonical URLs, plus Open Graph and Twitter tags with a branded share image
- a sitemap and `robots.txt`
- required alt text on every image
- internal links between services, About and Contact, plus breadcrumbs
- JSON-LD structured data:
  - LocalBusiness (AutomotiveBusiness) on every page
  - Service on the service pages
  - FAQPage wherever FAQs appear
  - BreadcrumbList on inner pages
  - WebSite on the Home page

`npm run check:seo` audits every built page.

## AI note

- **Tools:**
  - **Claude Code:** scaffolding, CMS schemas, components, CSS, copy drafts and SEO checks
  - **Lighthouse / PageSpeed:** performance and accessibility testing
- **Example prompt:**
  > "Write the Car Removal service page for an Adelaide cash-for-cars business called Saltbush. Australian English, plain and trustworthy, no hype. Sections: why remove an unwanted car, situations we help with, what's included, a 3-step process and 4 FAQs. Mention Service SA for rego, only promise same-day pickup 'subject to availability', and link to the cash-for-cars and scrap pages."
- **What I changed by hand:**
  - Removed risky claims: payment is by bank transfer, there are no fake licence numbers, and same-day pickup is "subject to availability".
  - Localised the copy (Adelaide suburbs, Service SA, rego, ute) and cut filler.
  - Tightened headlines for mobile and checked every title and description length.
  - Chose and replaced photos, wrote the alt text, redesigned the theme, and checked contrast and speed.
  - Clearly marked placeholders: phone number (from ACMA's fictional range), ABN, address and sample reviews.
- **How AI sped things up:** the content model, 9 pages of copy and the design system took hours instead of days. That left time for design, editing and testing.

## Developer notes

```bash
npm install && npm run dev          # localhost:4321 (needs .env)
npm run build && npm run check:seo  # production build + SEO audit
cd studio && npm install && npx sanity dev
```

**Environment variables:**
- `PUBLIC_SANITY_PROJECT_ID=vtngo4p4`
- `PUBLIC_SANITY_DATASET=production`
- `PUBLIC_WEB3FORMS_KEY`
- `SITE_URL`
