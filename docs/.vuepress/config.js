const path = require("path");
const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: '💡Reading notes',
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
    sidebar: {
      '/learn-architecture-from-zero/': getLearnArchitectureFromZeroSideBar(),
      '/the-clean-coder/': getTheCleanCoderSideBar(),
      '/the-beauty-of-design-patterns/': getTheBeautyOfDesignPatternsSidebar(),
      '/elon-musk/': getTheElonMuskBiographySideBar(),
      '/the-minto-pyramid-principle/': getTheMintoPyramidPrincipleSidebar(),
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

function getNav() {
  return [{
      text: '目录',
      items: [{
          text: '技术',
          items: [
          {
            text: '设计模式之美',
            link: '/the-beauty-of-design-patterns/',
          }, {
            text: '从 0 开始学架构',
            link: '/learn-architecture-from-zero/',
          }, {
            text: '代码整洁之道-程序员的职业素养',
            link: '/the-clean-coder/',
          }, ]
        },
        {
          text: '表达',
          items: [{
            text: '金字塔原理',
            link: '/the-minto-pyramid-principle/',
          }, ]
        },
        {
          text: '人物传记',
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

function getTheElonMuskBiographySideBar() {
  return [{
    title: '马斯克的世界：跨领域创造',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', '硅谷钢铁侠'],
      'musk-world/',
    ]
  }, {
    title: '出生非洲地：冒险无极限的基因',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'born-in-africa/',
    ]
  }, {
    title: '挺进加拿大：追寻太阳的人',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'advance-to-canada/',
    ]
  }, {
    title: '第一次创业：征服网络世界',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'first-business/',
    ]
  }, {
    title: 'PayPal 黑帮大佬：发动国际金融革命',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'paypal-boss/',
    ]
  }, {
    title: '太空召唤：建立 SpaceX 创新大军',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'call-of-space/',
    ]
  }, {
    title: '全电动车：超酷超快的特斯拉',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'all-electric-car/',
    ]
  }, {
    title: '痛苦磨难与新生：现实版钢铁侠的商业版图',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'pain-and-rebirth/',
    ]
  }, {
    title: '腾飞：被颠覆的航空业',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'take-off/',
    ]
  }, {
    title: '电动车的复仇：毫不妥协换来最好的时机',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'revenge-of-the-electric-car/',
    ]
  }, {
    title: '埃隆.马斯克的统一场理论：下一个 10 年',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'elon-musk-unified-field-theory/',
    ]
  }, ]
}

function getTheMintoPyramidPrincipleSidebar() {
  return [{
    title: '表达的逻辑',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', '程序员的职业素养'],
      'the-minto-pyramid-principle/professionalism',
    ]
  }, {
    title: '思考的逻辑',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'say-no/say-no',
    ]
  }, {
    title: '解决问题的逻辑',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'say-no/say-no',
    ]
  }, {
    title: '演示的逻辑',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'say-no/say-no',
    ]
  }, ]
}

function getTheBeautyOfDesignPatternsSidebar() {
  return [{
    title: '面向对象',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'object-oriented/what-is-object-oriented',
    ]
  }, {
    title: '设计原则',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'design-principles/say-no',
    ]
  }, {
    title: '规范与重构',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'standard-refactor/say-no',
    ]
  }, {
    title: '设计模式',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'design-patterns/say-no',
    ]
  }, ]
}