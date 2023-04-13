// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/Administrator.DESKTOP-RBRLO68/Desktop/shiliangl-dev/vue-datav3/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Administrator.DESKTOP-RBRLO68/Desktop/shiliangl-dev/vue-datav3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Administrator.DESKTOP-RBRLO68/Desktop/shiliangl-dev/vue-datav3/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Administrator.DESKTOP-RBRLO68\\Desktop\\shiliangl-dev\\vue-datav3";
var pathResolve = (dir) => resolve(__vite_injected_original_dirname, dir);
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      "@": pathResolve("./src")
    }
  },
  server: {
    port: 8066,
    open: true,
    host: "localhost"
    // proxy: {
    //   '/': {
    //     // target: 'http://localhost:3000'
    //   }
    // }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html")
        // nested: resolve(__dirname, 'nested/index.html')
      },
      output: {
        manualChunks: {}
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yLkRFU0tUT1AtUkJSTE82OFxcXFxEZXNrdG9wXFxcXHNoaWxpYW5nbC1kZXZcXFxcdnVlLWRhdGF2M1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvci5ERVNLVE9QLVJCUkxPNjhcXFxcRGVza3RvcFxcXFxzaGlsaWFuZ2wtZGV2XFxcXHZ1ZS1kYXRhdjNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IuREVTS1RPUC1SQlJMTzY4L0Rlc2t0b3Avc2hpbGlhbmdsLWRldi92dWUtZGF0YXYzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXHJcblxyXG5jb25zdCBwYXRoUmVzb2x2ZSA9IChkaXIpID0+IHJlc29sdmUoX19kaXJuYW1lLCBkaXIpXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGhSZXNvbHZlKCcuL3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDgwNjYsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCdcclxuICAgIC8vIHByb3h5OiB7XHJcbiAgICAvLyAgICcvJzoge1xyXG4gICAgLy8gICAgIC8vIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKVxyXG4gICAgICAgIC8vIG5lc3RlZDogcmVzb2x2ZShfX2Rpcm5hbWUsICduZXN0ZWQvaW5kZXguaHRtbCcpXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVosU0FBUyxlQUFlO0FBQzNhLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFIbkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxjQUFjLENBQUMsUUFBUSxRQUFRLGtDQUFXLEdBQUc7QUFHbkQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssWUFBWSxPQUFPO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUE7QUFBQSxNQUV2QztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sY0FBYyxDQUVkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
