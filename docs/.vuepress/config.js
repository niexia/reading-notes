const path = require("path");

module.exports = {
  title: 'Reading Notes',
  description: '还是写点啦!',
  base: '/reading-notes/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
    nav: [{
      text: '个人博客',
      link: 'https://niexia.github.io/'
    }],
    sidebarDepth: 2,
    sidebar: [{
      '/architecture/': {
        title: '基础架构',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '介绍'],
          '基础架构/了解架构设计',
          '基础架构/架构设计的三个原则',
          '基础架构/系统复杂度来源',
          '基础架构/架构设计流程',
        ]
      }
    }]
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
}