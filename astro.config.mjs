// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

const isDev = process.argv.includes('dev');
const enableKeystaticSsr = process.env.ENABLE_KEYSTATIC_SSR === 'true';

// https://astro.build/config
export default defineConfig({
  site:
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://pottery-studio-astro.vercel.app'),
  output: 'static',
  integrations: [
    react(),
    markdoc(),
    ...(isDev || enableKeystaticSsr ? [keystatic()] : []),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
