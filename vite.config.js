import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    assetsInlineLimit: 4096, // Inlines images under 4KB as base64; set to 0 to disable
  },
});
