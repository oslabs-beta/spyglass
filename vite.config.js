import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Terminal from 'vite-plugin-terminal';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Terminal()],
  server: {
    port: 8080,
    hmr: {
      host: '0.0.0.0'
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});
