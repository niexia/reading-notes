const path = require("path");

module.exports = {
  title: '读书笔记',
  description: '记性不好 还是写点啦',
  base: '/book-note/',
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
    repo: 'niexias/book-note',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [{
      text: '个人博客',
      link: 'https://niexias.github.io/'
    }],
    sidebarDepth: 2,
    sidebar: [{
      title: "写在最前面",
      collapsable: false,
      children: [
      ]
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