import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portfolio/", // since this is on my github repo
  plugins: [react()],
})
