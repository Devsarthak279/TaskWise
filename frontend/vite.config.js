import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // Adds polyfills for Node.js protocols
    }),
  ],
  build: {
    outDir: "dist", // Ensure this matches the publish directory in netlify.toml
    target: "esnext", // Ensure modern JavaScript support
    rollupOptions: {
      output: {
        format: "esm", // Use ES module format for modern environments
      },
    },
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify", // Polyfill crypto if any dependency requires it
    },
  },
});
