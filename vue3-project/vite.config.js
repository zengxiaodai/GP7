// Vite的配置文件，支持ES6模块化、也支持CommonJS模块化

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 从vite的角度来支持JSX语法
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
