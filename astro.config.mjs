import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oburguer013.vercel.app',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/identidade') && !page.includes('/404') })],
  vite: { plugins: [tailwindcss()], server: { allowedHosts: ['terminal.local'] } },
});
