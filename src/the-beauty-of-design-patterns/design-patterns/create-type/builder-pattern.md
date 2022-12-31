# 建造者模式

另外一个比较常用的创建型设计模式，**Builder 模式**，中文翻译为**建造者模式**或者**构建者模式**，也有人叫它**生成器模式**。

建造者模式原理比较简单，难点在于应用场景，考虑一下下面这些问题：

- 直接使用构造函数或者配合 set 方法就能创建对象，为什么还需要建造者模式来创建呢？
- 建造者模式和工厂模式都可以创建对象，那它们有什么区别呢？

## 为什么需要建造者模式

在平时的开发中，创建一个对象最常用的方式是，使用 new 关键字调用类的构造函数来完成。

**那什么情况下，这种方式会不适用需要采用建造者模式来创建对象呢？**

### 实现一个资源配置类

假设有这样一个场景：需要定义一个资源池配置类 ResourcePoolConfig。这里的资源池，你可以简单理解为线程池、连接池、对象池等。在这个资源池配置类中，有以下几个成员变量，也就是可配置项。

现在请你编写代码实现这个 ResourcePoolConfig

成员变量 | 说明 | 是否必填 | 默认值
---------|----------|---------|---------
 name | 资源名称 | 是 | --
 maxTotal | 最大总资源数量 | 否 | 8
 maxIdle | 最大空闲资源数量 | 否 | 8
 minIdle | 最小空闲资源数量 | 否 | 8

这不难，对于非必填的参数，在创建 ResourcePoolConfig 对象的时候，不传这几个参数就表示使用默认值。

```ts
class ResourcePoolConfig {
  private static DEFAULT_MAX_TOTAL = 8;
  private static DEFAULT_MAX_IDLE = 8;
  private static DEFAULT_MIN_IDLE = 0;

  private name: string = '';
  private maxTotal: number = DEFAULT_MAX_TOTAL;
  private maxIdle: number = DEFAULT_MAX_IDLE;
  private minIdle: number = DEFAULT_MIN_IDLE;

  constructor(name:string, maxTotal: number | null, maxIdle: number | null, minIdle: number | null) {
    if (!name) {
      throw new Error('name should not be empty');
    }
    this.name = name;

    if (maxTotal !== null) {
      if (maxTotal < 0) {
        throw new Error('maxTotal should be positive.');
      }
      this.maxTotal = maxTotal;
    }
    // ...
  }
}
```

现在只有 4 个配置项，对应到构造函数，也只有 4 个参数。**但是可配置项逐步增加（变成 8 个、10 个），那么按照这种方式构造函数的参数列表会变得很长，代码的可读性、易用性都会变差**。

```ts
const config = new ResourcePoolConfig('test', 16, null, null, null, false, true, ...)
```

还容易导致传错，解决这个问题可以通过**提供 set() 函数来对成员变量赋值**。

```ts
class ResourcePoolConfig {
  private static DEFAULT_MAX_TOTAL = 8;
  private static DEFAULT_MAX_IDLE = 8;
  private static DEFAULT_MIN_IDLE = 0;

  private name: string = '';
  private maxTotal: number = DEFAULT_MAX_TOTAL;
  private maxIdle: number = DEFAULT_MAX_IDLE;
  private minIdle: number = DEFAULT_MIN_IDLE;

  constructor(name:string) {
    // name 是必填的，所以放到构造函数中，通过校验强制必须填写
    if (!name) {
      throw new Error('name should not be empty');
    }
    this.name = name;
  }

  // 通过 set 方法来设置值
  setMaxTotal(maxTotal: number) {
    if (maxTotal < 0) {
      throw new Error('maxTotal should be positive.');
    }
    this.maxTotal = maxTotal;
  }
  // ...
}
```

这样，没有了冗长的函数调用和参数列表，代码在可读性和易用性上高了很多。

```ts
const config = new ResourcePoolConfig('test');
config.setMaxTotal(16)
```

到目前为止，我们还没有使用到建造者模式，**通过构造函数设置必填项，通过 set 方法设置可选项**，就能满足我们的要求。

### 要满足更多需求呢

上面的实现，面对下面的场景时还能解决吗？

- 必填的属性很多
 
我们把类的必填属性放到构造函数中，强制创建对象的时候就设置。如果必填的属性有很多，把这些必填属性都放到构造函数中设置，那构造函数就又会出现参数列表很长的问题。如果我们把必填属性通过 set() 方法设置，那校验这些必填属性是否已经填写的逻辑就无处安放了。

- 属性之间有一定的依赖关系或者约束条件

如果类的属性之间有一定的依赖关系或者约束条件，我们继续使用构造函数配合 set() 方法的设计思路，那这些依赖关系或约束条件的校验逻辑就无处安放了。

- 希望创建不可变对象

也就是说，对象在创建好之后，就不能再修改内部的属性值，要实现这个功能，我们就不能在类中暴露 set() 方法。构造函数配合 set() 方法来设置属性值的方式就不适用了。

为了解决这些问题，建造者模式就派上用场了。

1. 把校验逻辑放到 Builder 中，先创建建造者
2. 并通过 set 方法设置建造者变量值
3. 再使用 build 方法真正在创建对象之前，做集中校验，校验之后才创建对象
4. 此外，把构造函数设置为 private，这样只能通过建造者创建 ResourcePoolConfig 对象。并且对象没有提供任何 set 方法，这样创建出来的就是一个不可变对象

```ts
class ResourcePoolConfig {
  

  private name: string;
  private maxTotal: number;
  private maxIdle: number;
  private minIdle: number;

  constructor(builder) {
    this.name = builder.name;
    this.maxTotal = builder.maxTotal;
    this.maxIdle = builder.maxIdle;
    this.minIdle = builder.minIdle;
  }

  // 我们将Builder类设计成了ResourcePoolConfig的内部类。 
  // 我们也可以将Builder类设计成独立的非内部类ResourcePoolConfigBuilder。
  static class Builder {
    private static DEFAULT_MAX_TOTAL = 8;
    private static DEFAULT_MAX_IDLE = 8;
    private static DEFAULT_MIN_IDLE = 0;

    private name: string = '';
    private maxTotal: number = DEFAULT_MAX_TOTAL;
    private maxIdle: number = DEFAULT_MAX_IDLE;
    private minIdle: number = DEFAULT_MIN_IDLE;

    // 校验逻辑放这里
    build() {
      if (!this.name) {
        throw new Error('name should not be empty');
      }

      if (this.maxIdle > this.maxTotal) {
        throw new Error('...')
      }

      if (this.minIdle > this.maxIdle) {
        throw new Error('...')
      }

      // 校验通过才创建
      return new ResourcePoolConfig(this);
    }

    // 提供 set 方法
    setMaxTotal(maxTotal: number) {
      if (maxTotal < 0) {
        throw new Error('maxTotal should be positive.');
      }
      this.maxTotal = maxTotal;
      // 返回 this 可以链式调用
      return this
    }
    // ...
  }
}

// 使用
// 这段代码会报错，因为 minIdle > maxIdle
const config = config = new ResourcePoolConfig
  .Builder() 
  .setName("test") 
  .setMaxTotal(16) 
  .setMaxIdle(10) 
  .setMinIdle(12) 
  .build();
```

实际上使用建造者模式，**还可以避免对象存在无效状态**。如果我们不是创建对象时一次性初始化好所有的成员变量，而是提供 set 方法，创建之后再通过 set 设置，会出现因为成员变量是无效的，导致对象是无效状态。

```ts
const r = new Rectange(); // r is invalid
r.setWidth(2); // r is invalid
// 下面 set 之后素有参数都有效，才是一个有效的对象
r.setHeight(3); // r is valid
```

## 与工厂模式的区别

从上面可以看出：

- 建造者模式：让建造者类来负责对象的创建工作
- 工厂模式：是由工厂类来负责对象创建的工作

实际上，工厂模式是**用来创建不同但是相关类型的对象**（继承同一父类或者接口的一组子类），由给定的参数来决定创建哪种类型的对象。建造者模式是用来创建**一种类型的复杂对象，通过设置不同的可选参数，“定制化”地创建不同的对象**。

> 网上有一个经典的例子很好地解释了两者的区别：
> 
> 顾客走进一家餐馆点餐，我们利用工厂模式，根据用户不同的选择，来制作不同的食物，比如披萨、汉堡、沙拉。对于披萨来说，用户又有各种配料可以定制，比如奶酪、西红柿、起司，我们通过建造者模式根据用户选择的不同配料来制作披萨。

我们不用非得学院派的把工厂模式、建造者模式分的那么清楚。**更重要的是需要知道每个模式为什么这么设计，能解决什么问题。只有了解了这些最本质的东西，我们才能不生搬硬套，才能灵活应用，甚至可以混用各种模式创造出新的模式，来解决特定场景的问题。**
