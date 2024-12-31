import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
