import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Change this to match your GitHub Pages setup
  build: {
    outDir: 'dist',
    copyPublicDir: true,
  }
});