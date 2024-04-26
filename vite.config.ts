import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { VitePWA } from "vite-plugin-pwa";
import UnoCSS from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  css: { transformer: "lightningcss" },
  build: { cssMinify: "lightningcss" },
  plugins: [
    UnoCSS(),
    react(),
    TanStackRouterVite(),
    VitePWA({
      registerType: "autoUpdate",
      selfDestroying: true,
      // manifest: {
      //   name: "Jasper Teo",
      //   short_name: "Jasper Teo",
      //   icons: [
      //     {
      //       src: "/pwa-192x192.png",
      //       sizes: "192x192",
      //       type: "image/png",
      //       purpose: "any",
      //     },
      //     {
      //       src: "/pwa-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //       purpose: "any",
      //     },
      //     {
      //       src: "/pwa-maskable-192x192.png",
      //       sizes: "192x192",
      //       type: "image/png",
      //       purpose: "maskable",
      //     },
      //     {
      //       src: "/pwa-maskable-512x512.png",
      //       sizes: "512x512",
      //       type: "image/png",
      //       purpose: "maskable",
      //     },
      //   ],
      //   start_url: "/",
      //   display: "browser",
      //   background_color: "#E4E4E7",
      //   theme_color: "#27272A",
      //   description: "Welcome to my personal site!",
      // },
    }),
  ],
});
