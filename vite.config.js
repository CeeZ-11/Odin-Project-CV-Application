import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Force polling to detect changes
    },
  },
  plugins: [react()],
  base: "/Odin-Project-CV-Application/",
});