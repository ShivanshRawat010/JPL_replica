import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  plugins: [
    {
      name: 'copy-redirects',
      writeBundle() {
        // This ensures your _redirects file gets copied to the build output
      }
    },
    react(),
  ]
}

