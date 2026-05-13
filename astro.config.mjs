// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://INST466-Advocacy-Project.github.io",
  fonts: [{
      provider: fontProviders.google(),
      name: "Roboto Mono",
      cssVariable: "--font-roboto-mono",
  }],

  vite: {
    plugins: [tailwindcss()]
  }
});