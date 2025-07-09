/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom', // for SolidJS
    globals: true,
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'], // include JSON for automation
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
  }
});
