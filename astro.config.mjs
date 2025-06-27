import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  base: '/US_Stock_Investing_Handbook/',
  outDir: 'dist',
  integrations: [mdx()],
});