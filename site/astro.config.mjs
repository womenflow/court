import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your deployed URL (Netlify address or custom domain).
export default defineConfig({
  site: 'https://bubblelime-court-course.netlify.app',
  integrations: [sitemap()],
});
