import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  content: {
    collections: {
      concerts: {
        schema: {
          title: 'string',
          date: 'string',
          location: 'string',
          image: 'string',
          description: 'string'
        }
      }
    }
  }
});
