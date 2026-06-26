import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  server: {
    port: 3000,
    proxy: {
      '/api': { target: 'https://gksruf.store', changeOrigin: true },
      '/oauth2': { target: 'https://gksruf.store', changeOrigin: true },
    },
  },
});
