import { defineConfig } from "astro/config";
// import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), UnoCSS({ injectReset: true })],
  site: "https://jasperteo.com/",
  output: "server",
  adapter: vercel(),
  // adapter: cloudflare({
  //   platformProxy: { enabled: true },
  //   imageService: "passthrough",
  // }),
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" },
  },
});
