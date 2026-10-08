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

The site is live at **https://jediaelk.github.io/nisar-ahmed-landscape/**.

Every push to `main` rebuilds and redeploys automatically via GitHub Actions
([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)). So adding a photo is just:

```bash
cp ~/Desktop/new-job.jpg photos/07-paving--jumeirah-driveway.jpg
git add photos && git commit -m "Add Jumeirah driveway photo" && git push
```

Give it about a minute, then refresh the live site.

### Moving to a real domain

When the business gets its own domain, in [`astro.config.mjs`](./astro.config.mjs):

- set `site` to the domain, e.g. `https://nisarahmedlandscape.ae`
- **delete the `base` line** (it only exists because GitHub Pages serves from a subfolder)

Then update the sitemap URL in [`public/robots.txt`](./public/robots.txt) and point the domain
at GitHub Pages (or move to Netlify/Vercel — build command `npm run build`, publish directory
`dist`).
