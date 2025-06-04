// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pabloulloadev.site/',
  integrations: [
    react(), 
    sitemap({
      filter: (route) => {
        return !route.includes('#');
      },
    }),
  ]
});