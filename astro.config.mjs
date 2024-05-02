import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import bookshop from '@bookshop/astro-bookshop';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import alpine from '@astrojs/alpinejs';
import remarkAutoImport from '@cloudcannon/remark-auto-import'

// https://astro.build/config
export default defineConfig({
  site: 'https://muggy-fish.cloudvent.net/',
  integrations: [mdx(), react(), tailwind(), bookshop(), alpine()],
  markdown: {
    remarkPlugins: [
      [
        remarkAutoImport,
        {
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
});
