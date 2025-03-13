import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    // Generate a 404.html file that redirects to index.html
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
});