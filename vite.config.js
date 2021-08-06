import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy'; // 兼容传统浏览器
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './src/pages'),
      $: path.resolve(__dirname, './src/components'),
    },
    server: {
      host: '127.0.0.1',
      port: 3000,
      open: 'http://127.0.0.1:3000',
      proxy: {
        '/api': {
          target: 'http://haofenqi-mapi-envc.test.rrdbg.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
    build: {
      target: 'es2015',
    },
    // extensions:[ 'js' ], // 默认文件扩展名，vite会按顺序尝试匹配
  },
  plugins: [
    vue(),
    eslintPlugin(),
    {
      ...legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      apply: 'build', // build -- 生产 serve -- 开发
    },
  ],
});
