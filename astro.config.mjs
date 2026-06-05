// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Tailwind is wired via postcss.config.mjs + src/styles/global.css.
export default defineConfig({
  // 실제 배포 도메인 (sitemap/OG 절대경로에 사용)
  site: 'https://hotdeal-demo.vercel.app',
});
