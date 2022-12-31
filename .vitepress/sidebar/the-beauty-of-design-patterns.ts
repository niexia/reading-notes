function getTheBeautyOfDesignPatternsSidebar () {
  return [
    {
      text: '设计模式之美',
      items: [
        {
          text: '为什么要学习设计模式',
          link: '/the-beauty-of-design-patterns/',
        }
      ]
    },
    {
      text: '面向对象',
      items: [
        {
          text: 'what-is-object-oriented',
          link: '/the-beauty-of-design-patterns/object-oriented/what-is-object-oriented',
        },
        {
          text: 'practice',
          link: '/the-beauty-of-design-patterns/object-oriented/practice',
        }
      ]
    }, 
    {
    text: '设计原则',
    items: [
      {
        text: 'SOLID',
        link: '/the-beauty-of-design-patterns/design-principles/SOLID',
      },
      {
        text: 'KISS',
        link: '/the-beauty-of-design-patterns/design-principles/KISS',
      },
      {
        text: 'YAGNI',
        link: '/the-beauty-of-design-patterns/design-principles/YAGNI',
      },
      {
        text: 'DRY',
        link: '/the-beauty-of-design-patterns/design-principles/DRY',
      },
      {
        text: 'LOD',
        link: '/the-beauty-of-design-patterns/design-principles/LOD',
      },
      {
        text: 'practice',
        link: '/the-beauty-of-design-patterns/design-principles/practice',
      },
    ],
    }, 
    {
    text: '规范与重构',
    items: [
      {
        text: 'refactor',
        link: '/the-beauty-of-design-patterns/standard-refactor/refactor',
      },
      {
        text: 'standard',
        link: '/the-beauty-of-design-patterns/standard-refactor/standard',
      },
      {
        text: 'practice',
        link: '/the-beauty-of-design-patterns/standard-refactor/practice',
      },
    ]
    }, 
    {
    text: '设计模式',
    items: [{
        text: '创建型',
        items: [
          {
            text: 'singleton-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/create-type/singleton-design-pattern',
          },
          {
            text: 'factory-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/create-type/factory-design-pattern',
          },
          {
            text: 'builder-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/create-type/builder-pattern',
          },
          {
            text: 'prototype-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/create-type/prototype-design-pattern',
          },
          {
            text: 'summary',
            link: '/the-beauty-of-design-patterns/design-patterns/summary',
          },
        ]
      },
      {
        text: '结构型',
        items: [
          {
            text: 'proxy-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/proxy-design-pattern',
          },
          {
            text: 'bridge-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/bridge-design-pattern',
          },
          {
            text: 'director-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/director-design-pattern',
          },
          {
            text: 'adapter-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/adapter-design-pattern',
          },
          {
            text: 'facade-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/facade-design-pattern',
          },
          {
            text: 'composite-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/composite-design-pattern',
          },
          {
            text: 'flyweight-design-pattern',
            link: '/the-beauty-of-design-patterns/design-patterns/structural-type/flyweight-design-pattern',
          },
        ]
      },
      // {
      //   text: '行为型',
      //   items: []
      // }
    ]
    }, 
  ]
}

export {
  getTheBeautyOfDesignPatternsSidebar
}