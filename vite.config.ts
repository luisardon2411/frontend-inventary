import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon'],
  manifest: {
    name: 'SimpleStock',
    short_name: 'SimpleStock',
    description: 'SimpleStock',
    icons: [{
      src: '/icons/0.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/icons/512x512.png',
      sizes: '512x512',
      type: 'image/png',
    }],
    theme_color: '#01487B',
    background_color: '#FFFF',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait'
  },
  workbox: {
    globDirectory: "dist",
    globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,json}"],
    swDest: "dist/sw.js",
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)], 
})
