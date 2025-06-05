import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // output both ESM and CJS
  dts: true,              // generate .d.ts files
  clean: true,            // clean dist before build
  sourcemap: true,        // optional, useful for debugging
  splitting: false,       // optional: true if you use multiple entry points and want code-splitting in ESM
  outDir: 'dist',         // output directory
});
