import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  preview: {
    allowedHosts: ['crash01.duckdns.org', '192.168.1.186', 'localhost']
  },
  build: {
    // Output to dist folder
    outDir: 'dist',
    // Inline all assets under 100kb
    assetsInlineLimit: 100000,
    rollupOptions: {
      // Multi-page app: main + admin
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin/index.html')
      },
      output: {
        // Predictable names
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Minify for smaller file size
    minify: 'esbuild'
  }
});
