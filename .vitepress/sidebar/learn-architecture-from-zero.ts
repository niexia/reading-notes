function getLearnArchitectureFromZeroSideBar () {
  return [
    {
      text: '基础架构',
      items: [
        {
          text: 'what-is-architecture',
          link: '/learn-architecture-from-zero/infrastructure/what-is-architecture',
        },
        {
          text: 'principles',
          link: '/learn-architecture-from-zero/infrastructure/principles',
        },
        {
          text: 'sources-of-complexity',
          link: '/learn-architecture-from-zero/infrastructure/sources-of-complexity',
        },
        {
          text: 'design-flow',
          link: '/learn-architecture-from-zero/infrastructure/design-flow',
        }
      ]
    },
    {
      text: '高可用架构模式',
      items: []
    },
    {
      text: '高性能架构模式',
      items: []
    },
    {
      text: '可扩展架构模式',
      items: []
    },
    {
      text: '架构实战',
      items: []
    },
    {
      text: '思考总结',
      items: []
    }
  ]
}

export {
  getLearnArchitectureFromZeroSideBar
}