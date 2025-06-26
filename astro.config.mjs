import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://zhuTechLLC.github.io',
  base: '/US_Stock_Investing_Handbook',
  integrations: [mdx()],
  outDir: './docs',
  trailingSlash: 'never',
});