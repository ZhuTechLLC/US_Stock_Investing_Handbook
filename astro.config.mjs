import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// 检查是否为生产构建
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProduction ? 'https://zhutechllc.github.io' : undefined,
  base: isProduction ? '/US_Stock_Investing_Handbook' : undefined,
  outDir: isProduction ? './docs' : './dist',
  integrations: [mdx()],
});