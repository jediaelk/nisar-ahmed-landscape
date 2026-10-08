import type { ImageMetadata } from "astro";

/**
 * Reads every image in the top-level /photos folder at build time. Drop a file
 * in there and it appears on the site — no code changes needed.
 *
 * Filenames drive the caption and the filter tag:
 *
 *   01-artificial-grass--villa-side-garden.jpg
 *   ^^ order         ^^ tag          ^^ caption
 *
 * The number prefix and the tag are both optional. See photos/README.md.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true }
);

/** Pretty names for tags. Anything not listed is title-cased automatically. */
const tagLabels: Record<string, string> = {
  "artificial-grass": "Artificial Grass",
  pergolas: "Pergolas & Shades",
  paving: "Paving & Tiling",
  planting: "Planting",
  irrigation: "Irrigation",
  maintenance: "Maintenance",
};

const titleCase = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export type GalleryItem = {
  image: ImageMetadata;
  caption: string;
  tag: string;
  tagSlug: string;
};

export const galleryItems: GalleryItem[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))
  .map(([path, module]) => {
    const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
    const withoutOrder = name.replace(/^\d+[-_]/, "");
    const [first, second] = withoutOrder.split("--");

    const tagSlug = second ? first : "our-work";
    const captionSlug = second ?? first;

    return {
      image: module.default,
      caption: titleCase(captionSlug),
      tag: tagLabels[tagSlug] ?? titleCase(tagSlug),
      tagSlug,
    };
  });

/** Tags present in the gallery, for the filter buttons. */
export const galleryTags = [...new Set(galleryItems.map((item) => item.tag))];
