import { defineConfig } from 'vite';

// Plugin to make the build work with file:// protocol
function standalonePlugin() {
  return {
    name: 'standalone-build',
    enforce: 'post',
    generateBundle(options, bundle) {
      // Find the HTML file and modify it
      for (const fileName in bundle) {
        if (fileName.endsWith('.html')) {
          const htmlChunk = bundle[fileName];
          if (htmlChunk.type === 'asset') {
            let html = htmlChunk.source;
            // Remove type="module" and crossorigin from script tags
            html = html
              .replace(/ type="module"/g, '')
              .replace(/ crossorigin/g, '');

            // Move script from head to end of body for DOM readiness
            const scriptMatch = html.match(/<script src="[^"]+"><\/script>/);
            if (scriptMatch) {
              // Remove script from head
              html = html.replace(scriptMatch[0], '');
              // Add script before closing body tag
              html = html.replace('</body>', scriptMatch[0] + '\n</body>');
            }

            htmlChunk.source = html;
          }
        }
      }
    }
  };
}

export default defineConfig({
  // For standalone build that works with file:// protocol
  base: './',
  plugins: [standalonePlugin()],
  build: {
    // Output to dist folder
    outDir: 'dist',
    // Inline all assets under 100kb
    assetsInlineLimit: 100000,
    // Generate single JS file as IIFE (not ES module)
    rollupOptions: {
      output: {
        // IIFE format works with file:// protocol
        format: 'iife',
        // Single JS bundle
        inlineDynamicImports: true,
        // Predictable names
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Minify for smaller file size
    minify: 'esbuild'
  }
});
