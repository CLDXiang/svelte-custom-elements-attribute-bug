import { resolve } from 'node:path';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [svelte()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'components',
        fileName: 'components',
        formats: ['iife'],
      },
      minify: mode === 'raw' ? false : undefined,
    },
  };
});
