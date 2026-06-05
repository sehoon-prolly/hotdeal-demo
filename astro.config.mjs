// @ts-check
import { defineConfig } from 'astro/config';

// Static output (default). Tailwind is wired via postcss.config.mjs + src/styles/global.css.
export default defineConfig({
  // 배포 시 실제 도메인으로 변경하세요 (sitemap/OG 절대경로에 사용)
  site: 'https://fillempty.example.com',
});
