import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
      server: {
        host: true,
        port: 5173,
    },
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/*.webp",
    "**/*.avif",
    "**/*.ico",
    "**/*.bmp",
    "**/*.tiff",
  ],
  build: {
    target: "es2019",
    assetsInlineLimit: 4096,
  },
});
