const path = require("path");
const { config } = require("vuepress-theme-hope");
const sidebar = require('./sidebar')

module.exports = config({
  title: 'Reading Notes',
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
    nav: getNav(),
    sidebarDepth: 2,
    sidebar,
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

function getNav() {
  return [{
      text: '目录',
      items: [{
          text: '🧑🏻‍💻 技术',
          items: [
          {
            text: '数据结构和算法之美',
            link: '/algo/',
          },
          {
            text: '设计模式之美',
            link: '/the-beauty-of-design-patterns/',
          }, {
            text: '从0开始学架构',
            link: '/learn-architecture-from-zero/',
          }, {
            text: '代码整洁之道|程序员的职业素养',
            link: '/the-clean-coder/',
          }, ]
        },
        {
          text: '🌱 软技能',
          items: [{
            text: '金字塔原理',
            link: '/the-minto-pyramid-principle/',
          }, ]
        },
        {
          text: '☕️ 丰富生活',
          items: [{
            text: '美国纽约摄影学院摄影教材',
            link: '/new-york-institute-of-photography/',
          }, ]
        },
        {
          text: '🥤 人物传记',
          items: [{
            text: '硅谷钢铁侠',
            link: '/elon-musk/',
          }, ]
        },
      ]
    },
    {
      text: '个人博客',
      link: 'https://niexia.github.io/'
    }
  ]
}
