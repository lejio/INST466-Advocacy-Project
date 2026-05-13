// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [{
      provider: fontProviders.google(),
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});