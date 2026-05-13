import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'lenis',
    ],
  },
})
