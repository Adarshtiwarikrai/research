// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 2. Add the 'resolve' configuration
    alias: {
      '@': path.resolve(__dirname, './src'), // 3. Define the alias
    },
  },
})