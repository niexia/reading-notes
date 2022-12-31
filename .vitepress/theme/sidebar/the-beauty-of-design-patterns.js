exports.getTheBeautyOfDesignPatternsSidebar = function () {
  return [{
    title: '面向对象',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'object-oriented/what-is-object-oriented',
      'object-oriented/practice',
    ]
  }, {
    title: '设计原则',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'design-principles/SOLID',
      'design-principles/KISS',
      'design-principles/YAGNI',
      'design-principles/DRY',
      'design-principles/LOD',
      'design-principles/practice',
    ]
  }, {
    title: '规范与重构',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      'standard-refactor/refactor',
      'standard-refactor/standard',
      'standard-refactor/practice',
    ]
  }, {
    title: '设计模式',
    collapsable: false,
    sidebarDepth: 2,
    children: [{
        title: '创建型',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'design-patterns/create-type/singleton-design-pattern',
          'design-patterns/create-type/factory-design-pattern',
          'design-patterns/create-type/builder-pattern',
          'design-patterns/create-type/prototype-design-pattern',
          'design-patterns/summary',
        ]
      },
      {
        title: '结构型',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'design-patterns/structural-type/proxy-design-pattern',
          'design-patterns/structural-type/bridge-design-pattern',
          'design-patterns/structural-type/director-design-pattern',
          'design-patterns/structural-type/adapter-design-pattern',
          'design-patterns/structural-type/facade-design-pattern',
          'design-patterns/structural-type/composite-design-pattern',
          'design-patterns/structural-type/flyweight-design-pattern',
        ]
      },
      {
        title: '行为型',
        collapsable: false,
        sidebarDepth: 2,
        children: []
      }
    ]
  }, ]
}