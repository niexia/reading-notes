const path = require("path");
const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: '读书笔记',
  description: '写点啦!',
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
        text: '🚦 目录',
        items: [{
            text: '架构设计',
            items: [
              {
                text: '从 0 开始学架构',
                link: '/learn-architecture-from-zero/',
              },
            ]
          },
          {
            text: '代码整洁之道',
            items: [
              {
                text: '代码整洁之道-程序员的职业素养',
                link: '/the-clean-coder/',
              },
            ]
          }
        ]
      },
      {
        text: '个人博客',
        link: 'https://niexia.github.io/'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/learn-architecture-from-zero/': getLearnArchitectureFromZeroSideBar(),
      '/the-clean-coder/': getTheCleanCoderSideBar(),
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

function getLearnArchitectureFromZeroSideBar() {
  return [{
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
  ]
}

function getTheCleanCoderSideBar() {
  return [{
    title: '专业主义',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', '程序员的职业素养'],
      'professionalism/professionalism',
    ]
  }, {
    title: '说不',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'say-no/say-no',
    ]
  }, ]
}