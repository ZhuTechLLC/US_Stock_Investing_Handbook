import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/US_Stock_Investing_Handbook/' : '/',
  outDir: 'dist',
  build: {
    assets: '_astro'
  },
  integrations: [mdx()],
});