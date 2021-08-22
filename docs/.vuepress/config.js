const path = require("path");
const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: 'Reading Notes',
  description: '还是写点啦!',
  base: '/reading-notes/',
  dest: 'dist',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets")
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'niexia/reading-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sitemap: false,
    nav: [{
        text: '📃 分类',
        items: [{
            text: '架构设计',
            items: [
              {
                text: '从 0 开始学架构',
                link: '/learn-architecture-from-zero/',
              },
            ]
          },
        ]
      },
      {
        text: '个人博客',
        link: 'https://niexia.github.io/'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/learn-architecture-from-zero/': [{
          title: '基础架构',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            'infrastructure/what-is-architecture',
            'infrastructure/principles',
            'infrastructure/sources-of-complexity',
            'infrastructure/design-flow',
          ]
        },
        {
          title: '高可用架构模式',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        },
        {
          title: '高性能架构模式',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        },
        {
          title: '可扩展架构模式',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        },
        {
          title: '架构实战',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        },
        {
          title: '思考总结',
          collapsable: false,
          sidebarDepth: 2,
          children: []
        }
      ],
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "文档内容有更新，点击刷新立即查看新内容。",
          buttonText: "刷新"
        }
      }
    ]
  ]
});