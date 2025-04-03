import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'my-portfolio-ko1l.onrender.com'
    ]
  },
})
