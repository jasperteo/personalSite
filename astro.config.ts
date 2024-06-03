import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), UnoCSS({ injectReset: true })],
  site: "https://jasperteo.com",
  output: "server",
  adapter: cloudflare({
    platformProxy: { enabled: true },
    imageService: "passthrough",
  }),
  server: { headers: { "Accept-CH": "Sec-CH-Prefers-Color-Scheme" } },
  vite: {
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" },
    // Temporary workaround for Cloudflare Workers
    resolve: {
      conditions: ["worker", "webworker"],
      mainFields: ["module"],
    },
  },
});
