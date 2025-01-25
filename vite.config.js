import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "casino-guatemala-crisis-draws.trycloudflare.com",
      // You can add other allowed hosts here if needed
    ],
  },
});
