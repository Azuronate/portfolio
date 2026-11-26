import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // output: 'hybrid', https://docs.astro.build/en/guides/upgrade-to/v5/#removed-hybrid-rendering-mode
  site: 'https://www.ncp.dev/',
  prefetch: {
    prefetchAll: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: false
    },
    imageService: true
  }),
  integrations: [metaTags()],
  build: {
    trailingSlash: 'never'
  }
});