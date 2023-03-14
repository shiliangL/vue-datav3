import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue()
  ],
  resolve: {

  },
  server: {
    port: 8066,
    host: '0.0.0.0',
    open: true
    // proxy: { // 代理配置
    //   '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/',
    //   '/demo/': 'https://api.vxetable.cn/demo/'
    // }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {

        }
      }
    }
  }
})
