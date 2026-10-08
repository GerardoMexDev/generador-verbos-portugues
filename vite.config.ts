import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite keeps the development setup small while providing React Fast Refresh
// and an optimized production bundle. PWA installation is described by the
// web manifest; a service worker can be added when offline behavior is defined.
export default defineConfig({
  plugins: [react()],
  // Own port: the browser keeps a stale service worker from an old project on
  // localhost:5173 that hijacks that URL. strictPort fails loudly instead of
  // silently moving to another port.
  server: { port: 5180, strictPort: true, host: true },
  preview: { port: 5181, strictPort: true },
});
