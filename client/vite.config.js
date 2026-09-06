import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
