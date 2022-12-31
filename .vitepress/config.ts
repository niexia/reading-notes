import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import { jobsPlugin } from './jobsMdPlugin'
import sideBar from './sidebar'

const nav: ThemeConfig['nav'] = [
  {
    text: 'Docs',
    activeMatch: `^/(algo|learn-architecture-from-zero|the-minto-pyramid-principle|the-clean-coder|elon-musk)/`,
    items: [
      // { text: 'Guide', link: '/guide/introduction' },
      {
        text: "编程",
        items: [
          {
            text: '数据结构和算法',
            link: '/algo/'
          },
          {
            text: '设计模式之美',
            link: '/the-beauty-of-design-patterns/'
          },
        ]
      },
      {
        text: "设计",
        items: [
          {
            text: '从0开始学架构',
            link: '/learn-architecture-from-zero/'
          },
        ]
      },
      {
        text: "通用能力",
        items: [
          {
            text: '金字塔原理',
            link: '/the-minto-pyramid-principle/'
          },
          {
            text: '程序员的职业素养',
            link: '/the-clean-coder/'
          }
        ]
      },
      {
        text: "人物",
        items: [
          {
            text: '硅谷钢铁侠',
            link: '/elon-musk/'
          },
        ]
      },
      {
        text: "其他",
        items: [
          {
            text: '前端学习笔记',
            link: 'https://niexia.github.io/fe-tutorial/'
          },
          {
            text: '源码解析',
            link: 'https://niexia.github.io/learn-source-code/'
          }
        ]
      }
    ]
  },
  {
    text: '精读',
    activeMatch: `^/intensive-reading/`,
    link: '/intensive-reading/'
  },
  {
    text: '翻译',
    activeMatch: `^/translate/`,
    items: []
  },
  {
    text: 'Blog',
    link: 'https://niexia.github.io/'
  },
]

export const sidebar: ThemeConfig['sidebar'] = {
  ...sideBar,
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'Reading note',
  description: 'Reading note - 种类多的持续更新的认真整理的',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@niexia' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/niexia/' },
    ],

    editLink: {
      repo: 'niexia/reading-notes',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2020-${new Date().getFullYear()} Yang Jin`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin).use(jobsPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
