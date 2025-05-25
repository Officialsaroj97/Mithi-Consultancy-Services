import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Warning limit adjust kiya gaya
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Sirf React aur React DOM ko chunk karna
        },
      },
    },
  },
});
