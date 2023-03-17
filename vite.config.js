import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const pathResolve = (dir) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  server: {
    port: 8066,
    open: true,
    host: 'localhost'
    // proxy: {
    //   '/': {
    //     // target: 'http://localhost:3000'
    //   }
    // }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      },
      output: {
        manualChunks: {

        }
      }
    }
  }
})
