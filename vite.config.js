import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssPxtorem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import {viteMockServe }  from 'vite-plugin-mock';



// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssPxtorem({
          rootValue: 37.5, // 根据设计稿基准宽度设置根元素html字体大小的参考值（例如：设计稿宽度为750px）
          unitPrecision: 5, // 允许REM单位增长到的最小精度
          propList: ['*'], // 转换哪些属性上的px值，默认是所有，可以自定义如['font-size', 'width']
          selectorBlackList: [], // 忽略转换正则匹配项
          minPixelValue: 2, // 设置最小转换px值，小于这个值的px不转换
          mediaQuery: false, // 是否在媒体查询中也转换px单位
          replace: true, // 是否直接替换px为rem而不添加备用px单位
          exclude: /node_modules/, // 排除无需转换的目录，比如node_modules下的第三方包
        })
      ]
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    vueJsx(),
    viteMockServe({
      // default
      mockPath: 'src/mock',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
