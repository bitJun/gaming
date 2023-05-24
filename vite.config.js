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
    host: '0.0.0.0',
    port: 8000,
    // 是否开启 https
    https: false,
    proxy: {
      "/api": {
        target: "https://fi30210888.zicp.fun",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
