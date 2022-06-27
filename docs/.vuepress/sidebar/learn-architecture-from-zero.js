exports.getLearnArchitectureFromZeroSideBar = function () {
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