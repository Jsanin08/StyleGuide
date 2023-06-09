import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "src/**/*.jsx",
  })],
  assetsInclude:"src/**/*.html",
  exports:// vite.config.js
  {
    transforms: [
      {
        test: ({ path }) => path.endsWith('.html'),
        transform({ code }) {
          return `export default ${JSON.stringify(code)}`
        }
      }
    ]
  }
})
