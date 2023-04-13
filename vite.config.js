import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const pathResolve = (dir) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx()
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
        main: resolve(__dirname, 'index.html')
        // nested: resolve(__dirname, 'nested/index.html')
      },
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/datav/index.js'),
        name: 'datav3',
        // the proper extensions will be added
        fileName: 'datav3'
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
