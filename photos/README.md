# Drop your project photos in this folder

Any image you put in this folder automatically appears in the **Our Work** gallery on the
website. You don't need to touch any code.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` (upper-case extensions are fine too)

---

## How to name your files

The filename decides the caption and the filter tag. The pattern is:

```
01-artificial-grass--villa-side-garden.jpg
│   │                 │
│   │                 └── Caption shown on the photo: "Villa Side Garden"
│   └── Filter tag: "Artificial Grass"
└── Sort order (lowest number appears first)
```

Use single dashes `-` between words, and a **double dash** `--` to separate the tag from
the caption.

### Tags you can use

| Type this in the filename | Shows on the site as |
| ------------------------- | -------------------- |
| `artificial-grass`        | Artificial Grass     |
| `pergolas`                | Pergolas & Shades    |
| `paving`                  | Paving & Tiling      |
| `planting`                | Planting             |
| `irrigation`              | Irrigation           |
| `maintenance`             | Maintenance          |

Any other tag works too — it just gets title-cased. For example
`06-pool-landscaping--damac-hills-villa.jpg` creates a "Pool Landscaping" filter.

### Good examples

```
06-pergolas--arabian-ranches-terrace.jpg
07-planting--front-garden-flower-beds.jpg
08-maintenance--monthly-hedge-trimming.jpg
```

### Shortcuts

Both parts are optional. If you can't be bothered with the full format:

- `pergolas--terrace-shade.jpg` — no number, sorts alphabetically
- `new-lawn-in-mudon.jpg` — no tag, lands under a "Our Work" tag

---

## Removing a photo

Delete the file. It disappears from the site on the next build.

## Reordering photos

Change the number at the front of the filename. `01` shows first, `02` second, and so on.

---

## Seeing your changes

- **While the dev server is running** (`npm run dev`): save the file and the browser updates
  on its own.
- **To publish**: run `npm run build`, then deploy the `dist/` folder.

## A note on file size

Photos straight off a phone are fine — the site automatically resizes and compresses them
into efficient WebP versions. Just avoid anything above roughly 10 MB so the build stays fast.
