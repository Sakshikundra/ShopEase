import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for JS/CSS assets
  build: {
    outDir: 'dist' // Default, but explicit for clarity
  }
})
