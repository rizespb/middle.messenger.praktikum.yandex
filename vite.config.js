import { resolve } from 'path';
import { defineConfig } from 'vite';

const srcPath = resolve(__dirname, 'src');

export default defineConfig({
  root: srcPath,
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:8]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/app/styles/index.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
