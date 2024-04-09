import { resolve } from 'node:path';
import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [
      svelte(),
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'my-component',
          },
        },
      }),
      react(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'components',
        fileName: 'components',
        formats: ['iife'],
      },
      minify: false,
    },
  };
});
