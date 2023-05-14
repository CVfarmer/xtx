import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
//element 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
    resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        //1.通知element采用sass样式配色系统
        ElementPlusResolver({importStyle:"sass"})
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    
  },
  css: {
    preprocessorOptions:{
      scss:{
         //自动导入样式文件,组件中不需要写import了
        additionalData:`
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;           
        `
    
      },
    }
  }
})
