import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Currently published on GitHub Pages at <site><base>.
// Moving to a custom domain later: set `site` to the domain and delete `base`.
export default defineConfig({
  site: "https://jediaelk.github.io",
  base: "/nisar-ahmed-landscape",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
