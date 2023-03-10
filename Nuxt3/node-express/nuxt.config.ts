import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    { path: '/api', handler: '~/server/api.ts' }, // `/api/**` does NOT handle /api
    { path: '/api/**', handler: '~/server/api.ts' },
  ],
});
