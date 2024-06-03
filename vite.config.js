import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'MyLibrary',
      formats: ['iife']
    }
  },
  server: {
    port: 8000
  }
})