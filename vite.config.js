import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
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
    open: true
    // proxy: { // 代理配置
    //   '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/',
    //   '/demo/': 'https://api.vxetable.cn/demo/'
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
