import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'MyLibrary',
      formats: ['iife']
    },
    rollupOptions: {
        output: {
            entryFileNames: 'third-party.js'
        }
    }
  },
  server: {
    port: 8000
  }
})