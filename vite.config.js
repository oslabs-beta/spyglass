import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: {
      '/auth/**': {
        target: 'http://localhost:3333',
        secure: false
      }
    }
  }
});
