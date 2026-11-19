# myfasset website

Bilingual (English / Swedish) marketing website for **myfasset**, a Swedish SaaS
company in Halmstad. Built with Next.js App Router, TypeScript and Tailwind CSS,
based on the supplied company booklet.

The site ships with **placeholder contact details and leadership bio** where real
company information was not provided. No clients, awards, statistics or
testimonials have been invented. See
[Replacing placeholders](#replacing-placeholders).

---

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js `16.4.6` (App Router, Turbopack)      |
| UI         | React `19.3.1`, TypeScript `5.9.3`             |
| Styling    | Tailwind CSS `4.3.5`                          |
| Fonts      | Self-hosted Inter (body) + Manrope (display)  |
| Rendering  | Fully static (`generateStaticParams` + SSG)   |
| Deployment | Vercel (or any Node.js / static host)         |

Fonts are stored in `src/fonts` and loaded with `next/font/local`, so builds do
not depend on Google Fonts at runtime.

---

## Requirements

- Node.js **20.9+** (`.nvmrc` is included)
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The root URL redirects to `/en`.

### Scripts

| Command           | Purpose                                |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the development server           |
| `npm run build`   | Create an optimized production build   |
| `npm run start`   | Serve the production build             |
| `npm run typecheck` | Run TypeScript without emitting     |

Production check:

```bash
npm run build
npm run start
```

---

## Routes

| Route                              | Content                          |
| ---------------------------------- | -------------------------------- |
| `/`                                | Redirects to `/en`               |
| `/en`, `/sv`                       | Localized one-page home          |
| `/en/products/saloon-sweden` etc.  | 308 redirect to the live product |
| `/sv/products/my-sweet-desserts`   | 308 redirect to the live product |
| `/sitemap.xml`, `/robots.txt`      | Generated SEO routes             |
| `/manifest.webmanifest`            | Web app manifest                 |

Product cards link directly to the live sites in a new tab. The
`/[locale]/products/[slug]` routes remain as permanent redirects so old links
keep working. Unknown product slugs and unknown locales return the localized
404 page.

---

## Editing content

**All copy lives in one file:** `src/data/content.ts`.

It contains:

- `site` — company name, URL, address, email, phone, logo, CEO photo
- `content.en` / `content.sv` — every string on the site:
  - meta titles / descriptions / OG images
  - navigation labels, header CTA
  - hero, about, strengths, principles, products intro
  - process, why-us, tech stack, leadership, contact, footer
  - products (2 entries per locale, each with a live URL)
  - contact form copy

Update both `en` and `sv` when changing shared content. The TypeScript types in
`src/lib/types.ts` will flag missing fields at build time.

### Navigation and section anchors

Nav items link to section IDs on the home page (`#about`, `#strengths`,
`#products`, `#process`, `#leadership`, `#contact`). If you rename a section,
update the corresponding `id` in its component and the nav entries.

---

## Replacing placeholders

Search the project for `[` and for `Placeholder`:

```bash
grep -rn "\[email\]\|\[phone\]\|placeholder" src
```

### 1. Contact details

In `src/data/content.ts` → `site`:

```ts
email: "[email]",   // replace with the real address
phone: "[phone]",   // replace with the real number
```

The address is already the supplied one:

> Nyvången 16A, LGH 1102, 302 57 Halmstad, Sweden

The Google Maps link is generated from `site.mapUrl`. The form itself is a
front-end template — see [Contact form](#contact-form).

### 2. Leadership bio

`content.en.leadership.bio` and `content.sv.leadership.bio` are placeholders.
Replace them with an approved short bio. The portrait
(`public/ashraful-alam.png`) is the supplied image; do not redraw or replace it
unless a new photo is provided.

### 3. Products

The site currently lists two live products:

| Product            | Live site                                      | Card image                                  |
| ------------------ | ---------------------------------------------- | ------------------------------------------- |
| Saloon Sweden      | https://saloon-sweden.vercel.app/              | `public/products/saloon-sweden.jpg`         |
| My Sweet Desserts  | https://my-sweet-desserts.onrender.com/        | `public/products/my-sweet-desserts.jpg`     |

Each entry in `content.en.products` / `content.sv.products` has:

- `slug` — used only by the legacy redirect route
- `name`, `tagline`, `status` (`live` / `beta` / `coming-soon`)
- `cover`, `coverAlt` — the card image and its alt text
- `tags`
- `url` — the live site opened by the card (new tab)

The cards are `16:9` and use `object-cover`, so use a wide screenshot or hero
image (roughly 1200×675 or larger). Replace a product by editing both locale
entries and swapping the image; the redirect updates automatically. To add a
product, add it to both arrays. To remove one, delete it from both arrays.

If a product should open an internal page instead of an external site, change
the card link and remove the redirect in
`src/app/[locale]/products/[slug]/page.tsx`.

### 4. Site URL

Canonical URLs, Open Graph URLs, the sitemap and JSON-LD use
`NEXT_PUBLIC_SITE_URL`:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://myfasset.se
```

The fallback is `https://myfasset.se`. Set the real production domain before
deploying.

### 5. Open Graph images

`public/og-en.png` and `public/og-sv.png` (1200×630) are generated from the
booklet design and referenced in `content.*.meta.ogImage`. Regenerate them if
the company name or tagline changes.

### 6. Favicon and app icons

- `src/app/favicon.ico` (RGBA, derived from the "M" symbol)
- `src/app/icon.png`, `src/app/apple-icon.png`
- `public/icon-512.png` (manifest)

Keep these in sync if the logo changes.

---

## Contact form

The form validates name, email and message on the client:

- inline, screen-reader-announced errors (`role="alert"`)
- focus moves to the first invalid field
- submit button shows a sending state
- success panel receives focus; "Send another message" returns focus to Name

**It does not send email yet.** The submit handler is a simulated delay ending in
the success state, and the UI says so ("Template form — connect an email or form
service before launch."). Before launch, connect one of:

- a Next.js route handler (`src/app/api/contact/route.ts`) using Resend, Postmark,
  SendGrid or similar
- a hosted form endpoint (Formspree, Basin, Netlify Forms)
- a CRM / ticketing integration

Replace the `setTimeout` in `src/components/ContactForm.tsx` with a real
`fetch`. Keep the existing success and error states, add server-side validation,
rate limiting and spam protection (e.g. honeypot + provider captcha), and update
the form note in `content.*.contact.formNote`.

---

## Internationalization

- Locales: `en` (default) and `sv`
- Routes are prefixed (`/en`, `/sv`); `src/lib/i18n.ts` handles locale checks,
  path building and language switching
- The language switcher keeps the current product path when switching
- `<html lang>` and `hreflang` alternates are set per locale
- Swedish copy follows the supplied Swedish booklet

There is no automatic locale negotiation; `/` always redirects to `/en`. To
change that, edit the redirect in `next.config.ts`.

---

## Theme and design tokens

The palette comes from the booklet and is defined as CSS variables in
`src/app/globals.css`:

| Token          | Light / dark                          |
| -------------- | ------------------------------------- |
| Navy           | `#0A2A66` / dark surface `#061A44`    |
| Gold accent    | `#C8962A`; light gold `#F3D77A`       |
| Page           | `#F3F5FA` / `#061A44`                 |
| Cards          | white 12px radius, thin gold left bar |
| Body text      | `#1B2540`; muted `#5B6785`            |

Accessible gold text on light backgrounds uses the darker `#8A6512`; decorative
accents keep `#C8962A`. Dark mode uses lighter gold for text.

The theme toggle stores the choice in `localStorage` under `myfasset-theme`.
If no choice is stored, the OS `prefers-color-scheme` is used.

---

## Accessibility and motion

- Targets WCAG 2.1 AA; axe reports 0 violations on the home page across light,
  dark, English, Swedish and mobile layouts
- Product cards are single links with clear names, alt text and a new-tab note
- Skip link, visible focus styles, semantic landmarks and heading order
- Keyboard-operable mobile menu and language switcher; Escape closes the menu
- All images have alt text; decorative graphics are `aria-hidden`
- Scroll reveals are progressive enhancement: content is visible without
  JavaScript
- `prefers-reduced-motion: reduce` disables reveal and transition animations
- Touch targets are sized for mobile; layout is mobile-first from 360 px

---

## SEO

- Per-locale metadata, canonical URLs and `hreflang` (`en`, `sv`, `x-default`)
- Open Graph + Twitter cards with locale-specific images
- `Organization` JSON-LD with name, URL, logo, founder, founding date and address
- Generated `sitemap.xml`, `robots.txt` and web app manifest
- Security headers in `next.config.ts`

Update `NEXT_PUBLIC_SITE_URL`, social handles (if added) and the organization
details in `src/app/[locale]/layout.tsx` before launch.

---

## Deploying to Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command `npm run build`,
   output is handled automatically.
4. Add an environment variable for Production (and Preview if desired):

   ```text
   NEXT_PUBLIC_SITE_URL=https://myfasset.se
   ```

5. Deploy, then add the custom domain under **Settings → Domains**.
6. Verify after deployment:
   - `/` redirects to `/en`
   - `/en` and `/sv` load with the correct `lang`
   - `/sitemap.xml` and `/robots.txt` use the production domain
   - both product cards open their live sites in a new tab
   - `/en/products/saloon-sweden` and `/sv/products/my-sweet-desserts` redirect
     to the matching live site
   - unknown product slugs return 404
   - the contact form is either connected or clearly still labelled as a template

Any Node.js host works as well (`npm run build` + `npm run start`). The site is
fully static, so it can also be exported if that is preferred.

---

## Verification

Checks performed on the production build:

- `npm run build`, `npm run typecheck`: pass
- Lighthouse (mobile, simulated throttling): **Performance 97,
  Accessibility 100, Best Practices 100, SEO 100**; desktop 100 across all four
  categories
- axe WCAG 2.1 AA: 0 violations on the home page in EN/SV, light/dark and mobile
- Product cards link to the correct live URLs with `target="_blank"` and
  `rel="noopener noreferrer"`; legacy product URLs return `308` to the live sites
- No horizontal overflow at 360, 390, 768, 1024, 1280 and 1440 px
- Keyboard: skip link, mobile menu (focus trap/Escape), theme toggle, language
  switch and form validation verified

---

## Source material

The supplied reference documents live in `DOCUMENTs/`:
`myfasset-company-booklet.pdf`, `myfasset-foretagsbroschyr-sv.pdf` and the
business-card PDFs. They are design and copy references and are not served by
the site.
