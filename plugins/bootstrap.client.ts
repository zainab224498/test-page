import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  if (import.meta.client) {
    const bootstrap = await import('bootstrap');
    nuxtApp.provide('bootstrap', bootstrap);
  }
});