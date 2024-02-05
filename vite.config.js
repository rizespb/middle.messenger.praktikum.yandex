import { resolve } from 'path';
import { defineConfig } from 'vite';

const srcPath = resolve(__dirname, 'src');

export default defineConfig({
  root: srcPath,
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
