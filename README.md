# Saltbush Cash for Cars: client website

A website for an Adelaide business that buys unwanted cars and tows them away for free. The site has one job: get visitors to **request a quote or call**.

| | |
|---|---|
| **Live site** | https://saltbush-cash-for-cars.vercel.app |
| **CMS (editor login)** | https://saltbush-cash-for-cars.sanity.studio |
| **Pages** | Home · Services · Cash for Cars · Car Removal · Scrap Car Removal · About · Contact · Thank-you · custom 404 |

## Stack and why

**Astro (static site) + Sanity CMS, hosted on Vercel.**

- **Easy for a non-technical client.** Sanity Studio is a hosted web app with a Google or email login and nothing to install or update.
  - Every page appears as a single form in a plain-English sidebar, e.g. "🏠 Home page" and "⚙️ Contact details & site settings".
  - Every field has help text, and images have drag-and-drop upload, a focal-point crop and a **required alt-text field**.
- **Safe.** The client can only edit what exists. Creating, deleting and duplicating documents is switched off, and page addresses are locked. New services or locations go through the developer, as the brief asks.
- **One place for contact details.** Change the phone number once in *Site settings* and it updates the header, buttons, mobile call bar, footer, contact page and Google structured data.
- **Fast.** Astro outputs plain HTML with almost no JavaScript, and Sanity serves images resized and in WebP/AVIF. Lighthouse (mobile): **Performance 96–99, Accessibility 100, Best Practices 100, SEO 100.**
- **Low maintenance.** Unlike WordPress, there are no plugins, PHP or security updates to manage.
- **Content pipeline.** Publishing in Sanity triggers a webhook to a Vercel Deploy Hook, and the live site rebuilds in about 1 minute.

## Hosting recommendation

- **Vercel** for the website. The free Hobby plan is fine for this demo. For a real commercial client, use **Vercel Pro** ($20/month) or **Netlify**: both handle static Astro sites, give global CDN, HTTPS and instant rollbacks, and need no server upkeep.
- **Sanity Free plan** for the CMS (Studio hosting, image CDN, up to 20 users).
- **Web3Forms** emails the quote-form leads (free tier).
- Expected running cost: $0–$20/month plus the domain.

## How the client edits the site

1. Go to **saltbush-cash-for-cars.sanity.studio** and log in.
2. Pick a page in the left sidebar. The tabs along the top split each page into sections: *Top of page*, *Page sections*, *FAQs* and *SEO*.
3. Edit the text you want to change:
   - **Image:** click the image, then *Replace* to upload a new one, and update the *Alt text*.
   - **Phone, email, address or hours:** open *⚙️ Contact details & site settings*.
   - **Google title and description:** open the *SEO* tab on any page. Character limits are shown.
   - **FAQs, reviews, suburbs:** edit the item in its list, or drag to reorder.
4. Click **Publish** (bottom right). The live site updates in about 1 minute.

## Design decisions

- **Concept: "dark premium, neon accents".** A near-black canvas with glass-effect surfaces and a lime-to-teal glow, so a cash-for-cars business looks as polished as a modern tech brand. It's deliberately unlike the bright red, blue and yellow trade sites in this industry, and the bright lime calls to action stand out strongly against the dark background.
- **Palette:**

  | Colour | Hex | Use |
  |---|---|---|
  | Background | `#0A0D0C` | page canvas |
  | Surface | `#121816` | cards |
  | Text | `#F2F5F3` | body text (17:1 contrast) |
  | Muted | `#A3ADA8` | secondary text (8:1) |
  | **Lime** | `#B6F23A` | calls to action |
  | Teal | `#2EE6C5` | gradient accent |

  All text pairs meet WCAG AA contrast.
- **Type:** *Space Grotesk* (geometric, technical display headings) + *Inter* (highly legible body). Both are self-hosted variable fonts, preloaded, Latin subset only.
- **Components:**
  - **Pill buttons:** lime with a soft glow for primary actions, glass outline for secondary. All at least 48px tall for thumbs.
  - **Cards:** 20px radius, glass-effect, with a lime border on hover.
  - **Quote form:** a glass card with a gradient border.
  - **Labels and numbers:** pill "eyebrow" labels, gradient stat numbers.
  - **Backgrounds:** a subtle grid-and-glow pattern in feature sections.
- **Spacing:** 4px-based spacing scale and fluid `clamp()` type sizes.
- **Conversion layout (taken from the reference sites):**
  - Every key page has an H1, a quote button and a call button above the fold.
  - The quote form sits in the hero: a right-hand column on desktop, directly underneath on mobile.
  - A sticky glass header with a phone button on desktop, and a **floating Call / Free Quote bar** on mobile.
- **Images:** free-to-use Unsplash photos, dimmed and desaturated in the hero so the text stays readable. They're served responsively (WebP/AVIF) from the Sanity CDN, and the client can replace them in the CMS.

## SEO keyword plan

| Page | Primary keyword | Supporting keywords |
|---|---|---|
| Home | cash for cars Adelaide | sell my car Adelaide, car buyers Adelaide, cash for unwanted cars |
| Cash for Cars | sell my car for cash Adelaide | top cash for cars, cash for damaged cars, sell car fast Adelaide |
| Car Removal | car removal Adelaide | free car removal Adelaide, unwanted car removal, same-day car pickup |
| Scrap Car Removal | scrap car removal Adelaide | cash for scrap cars, wrecked car removal, car recycling Adelaide |
| Services | car removal services Adelaide | car buyers, wreckers Adelaide |
| About / Contact | brand: Saltbush Cash for Cars | local Adelaide car buyers, car quote Adelaide |

Each page also targets suburb modifiers (e.g. "car removal Salisbury") through the service-areas section.

**Built in:**
- One H1 per page with a logical H2/H3 hierarchy
- A unique title and meta description per page, editable in the CMS
- Canonical URLs and Open Graph tags
- `sitemap-index.xml` and `robots.txt`
- Descriptive alt text on every image (required in the CMS)
- Internal links between related services, About and Contact, plus breadcrumbs
- JSON-LD structured data:
  - **AutomotiveBusiness** (LocalBusiness) on every page: address, contact details, hours, areas served
  - **Service** on the service pages
  - **FAQPage** wherever FAQs appear
  - **BreadcrumbList** on inner pages
  - **WebSite** on the Home page

`npm run check:seo` audits the build automatically.

## AI note

- **Tools:**
  - **Claude Code**: scaffolding, Sanity schemas, components, CSS system, copy drafts, SEO checks
  - **Lighthouse**: performance and accessibility audits
- **Example prompt:**
  > "Write the Car Removal service page for an Adelaide cash-for-cars business called Saltbush. Australian English, plain and trustworthy, no hype. Sections: why remove an unwanted car, situations we help with (deceased estates, landlords, mechanics), what's included, a 3-step process and 4 FAQs. Mention Service SA for rego and only promise same-day pickup 'subject to availability'. Link to the cash-for-cars and scrap pages."
- **What I changed by hand:**
  - Removed risky or unverifiable claims. Payment is by **bank transfer**, not cash, there are no fake licence numbers, and same-day pickup is "subject to availability".
  - Localised the copy: Adelaide suburbs, Wingfield yard, Service SA, rego, ute.
  - Cut filler and repetition, tightened headlines to fit mobile, and checked every title and description against character limits.
  - Picked and cropped the photos, wrote the alt text, and tuned colours for contrast.
  - Placeholders to replace before launch: the phone number (from the range ACMA reserves for fiction), the ABN, the street address and the sample reviews.
- **How AI sped things up:** the full content model, 9 pages of copy and the design system took a few hours instead of a few days. That left time for the parts that need judgement: design, editing the copy, accessibility and testing.

## Developer notes

```bash
npm install && npm run dev          # site at localhost:4321 (needs .env, see below)
npm run build && npm run check:seo  # production build + SEO audit
cd studio && npm install && npx sanity dev   # CMS locally
node seed/build-ndjson.mjs && cd studio && npx sanity dataset import ../seed/seed.ndjson production --replace  # reset content
```

Environment variables:
- `PUBLIC_SANITY_PROJECT_ID=vtngo4p4`
- `PUBLIC_SANITY_DATASET=production`
- `PUBLIC_WEB3FORMS_KEY`
- `SITE_URL`
