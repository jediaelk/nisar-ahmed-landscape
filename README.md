# Nisar Ahmed Landscape & Gardening

Marketing site for a landscaping and gardening business in Dubai. Built with
[Astro](https://astro.build) and Tailwind CSS — it's a static site, so it's fast and can be
hosted for free.

## Running it locally

```bash
npm install     # once
npm run dev     # then open http://localhost:4321
```

The dev server reloads as soon as you save a file, including when you add a photo.

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Local preview with live reload                 |
| `npm run build`   | Builds the finished site into `dist/`          |
| `npm run preview` | Serves `dist/` so you can check the real build |

---

## Adding photos

Drop image files into the **[`photos/`](./photos)** folder and they appear in the "Our Work"
gallery. The filename sets the caption and the filter tag:

```
01-artificial-grass--villa-side-garden.jpg
```

Full naming guide and the list of tags: **[`photos/README.md`](./photos/README.md)**.

Photos are automatically resized and converted to WebP at build time, so straight-off-the-phone
images are fine.

## Changing the text, phone number or services

Almost all copy lives in one file: **[`src/data/site.ts`](./src/data/site.ts)**.

- **Phone / WhatsApp number** — change `phoneDigits` at the top. Every WhatsApp button, the
  pre-filled message and the click-to-call links all update from that one value.
- **Services** — edit the `services` array.
- **Testimonials** — edit the `testimonials` array.
- **Opening hours, areas served, business name** — all in the `site` object.

The big headline and hero paragraph are in
[`src/components/Hero.astro`](./src/components/Hero.astro).

## Changing the hero and section images

Three images are used outside the gallery. Replace the files, keeping the same names:

| File                       | Where it appears                   |
| -------------------------- | ---------------------------------- |
| `src/images/site/hero.jpg` | Big image behind the main headline |
| `src/images/site/about.jpg`| "Why choose us" section            |
| `src/images/site/cta.jpg`  | "Get a free quote" band            |

## Colours and fonts

Defined as theme variables at the top of
[`src/styles/global.css`](./src/styles/global.css) — change them in one place and they apply
across the site.

---

## Page structure

The site is a single scrolling page. Sections live in `src/components/` and are assembled in
[`src/pages/index.astro`](./src/pages/index.astro):

```
Header      sticky nav, goes solid on scroll
Hero        headline + "book a free site visit" card
Services    six service cards
WhyUs       about the business, reasons to pick them, stats
Gallery     auto-built from /photos, with filters and a lightbox
Process     four-step "how it works"
Testimonials
CtaBand     closing call to action
Footer      contact details and areas served
WhatsAppFab floating WhatsApp button, always visible
```

## Publishing it

`npm run build` produces a plain static site in `dist/`. Upload that folder anywhere, or
connect the repo to [Netlify](https://netlify.com), [Vercel](https://vercel.com) or
Cloudflare Pages with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Before going live, set the real domain in [`astro.config.mjs`](./astro.config.mjs) (the `site`
field) and in [`public/robots.txt`](./public/robots.txt), so the sitemap and canonical URLs
are correct.
