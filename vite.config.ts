import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: 'app', replacement: path.resolve(__dirname, 'src') }],
  },

  plugins: [
    react(),
    svgr({
      svgrOptions: {},
    })],
})
