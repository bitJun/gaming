import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from "path";

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://fi30210888.zicp.fun",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
