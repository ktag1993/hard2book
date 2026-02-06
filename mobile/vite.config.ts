import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify(
        mode === 'production'
          ? 'https://hard2book-backend.vercel.app/api'
          : 'https://hard2book-backend.vercel.app/api'
      ),
      'import.meta.env.VITE_ENV': JSON.stringify(mode),
    },
  }
})
