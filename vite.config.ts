import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import VueSvgPlugin from 'vite-plugin-vue-svg'

export default defineConfig({
  base: '/password-strength-meter/',

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    VueSvgPlugin({
      defaultExport: 'component',
      svgoConfig: {
        plugins: [
          {
            cleanupIDs: false,
          },
        ],
      },
    }),

    Vue({
      include: [/\.vue$/],
    }),

    ViteComponents({
      extensions: ['vue', 'svg'],

      globalComponentsDeclaration: true,

      customComponentResolvers: [
      ],
    }),

    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

  ],

  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },
})
