import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPlugin from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssPlugin(),
        autoprefixer()
      ],
    },
  },
  resolve: {
    mainFields: ['module', 'main', 'jsnext:main', 'jsnext'],
  },
  optimizeDeps: {
    include: ['prop-types', 'react-vertical-timeline-component']
  }
})