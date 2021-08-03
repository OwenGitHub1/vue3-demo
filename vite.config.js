import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // 兼容传统浏览器
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/pages'),
      '$': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vue(),
    {
      ...legacy({
        targets: ['defaults', 'not IE 11']
      }),
      apply: 'build', // build -- 生产 serve -- 开发
    },
  ]
})
