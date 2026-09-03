import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },

  server: {
    port: 5173,
    strictPort: false,
    open: false,
  },
})
