import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/https://github.com/CeeZ-11/Odin-Project-CV-Application/",
  server: {
    watch: {
      usePolling: true, // Force polling to detect changes
    },
  },
  plugins: [react()],
});
