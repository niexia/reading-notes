# 工厂模式

接下来看另一个比较常用的创建型模式：工厂模式（Factory Design Pattern）。

一般情况下，工厂模式分为三种细分的类型：**简单工厂**、**工厂方法**和**抽象工厂**。（不过 GoF 的《设计模式》中，讲简单工厂看作是工厂方法的一种特例）

其中简单工厂、工厂方法原理比较简单，在项目中也很常用。而抽象工厂原理稍微复杂，也不常用，了解一下即可。

当然，重点不是学习原理，而是使用场景：

- 什么时候该用工厂模式？
- 相对于直接 new 来创建对象，使用工厂模式有什么优势？

## 简单工厂

首先看一下，什么是简单工厂模式（Simple Factory），通过一个例子看一下

我们需要根据不同后缀的配置文件（json、xml、yaml、properties）选择不同的解析器（JsonRuleConfigParser、XmlRuleConfigParser），将存储在文件中的配置解析成内存对象 RuleConfig。

```ts
class RuleConfigSource {
  load(ruleConfigFilePath: string) {
    // 获取配置文件的后缀
    const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath);

    // 选择解析器
    const parser = null;
    if ("json" === ruleConfigFileExtension) {
      parser = new JsonRuleConfigParser();
    } else if ("xml" === ruleConfigFileExtension) {
      parser = new XmlRuleConfigParser();
    } else if () {
      //...
    } else {
      throw new Error('Rule config file format is not supported')
    }

    // 从 ruleConfigFilePath 读取配置文本到 configText 中
    const configText = 'xxx' 

    // 返回解析的配置
    return parser.parse(configText);
  }

  private getFileExtension(filePath: string) {
    // 返回文件名后缀
    return 'json'
  }
}
```

根据“规范重构”中，为了让代码逻辑更加清晰，可读性更好，我们要善于将功能独立的代码块封装成函数。将 parser 剥离出来：

```ts
class RuleConfigSource {
  load(ruleConfigFilePath: string) {
    // 获取配置文件的后缀
    const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath);

    const parser = this.createParser();
    if (parser === null) {
      throw new Error('Rule config file format is not supported')
    }

    // 从 ruleConfigFilePath 读取配置文本到 configText 中
    const configText = 'xxx' 

    // 返回解析的配置
    return parser.parse(configText);
  }

  private getFileExtension(filePath: string) {
    // 返回文件名后缀
    return 'json'
  }

  private createParser(configFormat) {
    // 创建解析器
    const parser = null;
    if ("json" === ruleConfigFileExtension) {
      parser = new JsonRuleConfigParser();
    } else if ("xml" === ruleConfigFileExtension) {
      parser = new XmlRuleConfigParser();
    } else if () {
      //...
    }

    return parser;
  }
}
```

为了让类的职责更加单一、代码更加清晰，我们还可以进一步将 createParser() 函数剥离到一个独立的类中，**让这个类只负责对象的创建**。这个类就是要讲的**简单模式类**。

```ts
class RuleConfigSource {
  load(ruleConfigFilePath: string) {
    // 获取配置文件的后缀
    const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath);
    const parser = RuleConfigParserFactory.createParser();
    if (parser === null) {
      throw new Error('Rule config file format is not supported')
    }
    // ...
  }

  private getFileExtension(filePath: string) {
    // 返回文件名后缀
    return 'json'
  }
}

// 简单工厂模式
class RuleConfigParserFactory {
  // 构造函数的方法
  static createParser(configFormat) {
    // 创建解析器
    const parser = null;
    if ("json" === ruleConfigFileExtension) {
      parser = new JsonRuleConfigParser();
    } else if ("xml" === ruleConfigFileExtension) {
      parser = new XmlRuleConfigParser();
    } else if () {
      //...
    }

    return parser;
  }
}
```

有几个需要注意的点：

- 方法命名：工厂类一般以“`Factory`”作为结尾，但是不是必须的。另外工厂类中的创建方法一般以 `create` 开头，比如 `createParser`，也有命名为 `getInstance`，根据习惯来就可以。
- 性能优化：如果 parser 可以复用，为了节省内存和对象创建的时间，我们**可以将 parser 事先创建好缓存起来**。当调用 createParser() 函数的时候，我们从缓存中取出 parser 对象直接使用

这里缓存，有点类似单例模式和简单工厂模式的结合（把这种实现方法叫做简单工厂模式的第二种实现方法），具体代码如下：

```ts
class RuleConfigParserFactory {
  private static cachedParser = new Map();
  cachedParser.set('json', new JsonRuleConfigParser());
  cachedParser.set('xml', new XmlRuleConfigParser());
  // ...

  static createParser(configFormat) {
    // 获取解析器
    if (!configFormat) {
      return null;
    }

    return cachedParser.get(configFormat);
  }
}
```

对于前面这两种方法，如果要添加新的 parser，那肯定要改动 RuleConfigParserFactory，**这是不是违反开闭原则呢**？如果只是偶尔修改一下是可以接受的。

另外第一种方式中有很多 if 判断，是不是应该用多态或者其他设计模式来替代呢？如果 if 不是很多是可以接受的，应用多态或设计模式来替代也不是没有任何缺点，引入更多类，虽然提高了代码的扩展性但是也牺牲了代码的可读性。

总结一下，尽管简单工厂模式的代码实现中，有多处 if 分支判断逻辑，违背开闭原则，但是权衡扩展性和可读性，这样的代码事没有问题的。

## 工厂方法

### 实现

如果想将 if 分支逻辑去掉，该怎么办呢？**比较典型的方法就是利用多态**。

```ts
interface IRuleConfigParserFactory {
  createParser: () => IRuleConfigParser;
}

class JsonRuleConfigParserFactory implements IRuleConfigParserFactory {
  // 是实例的方法
  createParser() {
    return new JsonRuleConfigParser();
  }
}
// ...
```

**这就是工厂方法模式的典型代码实现**。

这样当我们新增一种 parser 的时候，只需新增一个实现了 IRuleConfigParserFactory 接口的 Factory 类即可。所以，**工厂方法模式比简单工厂模式更加符合开闭原则**。

不过这么实现之后，使用起来会存在很大的问题，和前面类似：

```ts
class RuleConfigSource {
  load(ruleConfigFilePath: string) {
    // 获取配置文件的后缀
    const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath);

    // 获取工厂
    const parserFactory = null;
    if ("json" === ruleConfigFileExtension) {
      parser = new JsonRuleConfigParserFactory();
    } else if ("xml" === ruleConfigFileExtension) {
      // ...
    } else if () {
      //...
    } else {
      throw new Error('Rule config file format is not supported')
    }

    const parser = parserFactory.createParser();
    // ...
  }
  // ...
}
```

上面的代码，工厂类对象的创建逻辑又耦合进了 load() 函数中，代码设计更加复杂了，怎么解决这个问题？

**我们可以为工厂类再创建一个简单工厂，也就是工厂的工厂，用来创建工厂类对象**。

```ts
class RuleConfigSource {
  load(ruleConfigFilePath: string) {
    // 获取配置文件的后缀
    const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath);

    // 获取工厂函数
    const parserFactory = RuleConfigParserFactoryMap.getParserFactory(ruleConfigFileExtension);
    if (parserFactory === null) {
      throw new Error('Rule config file format is not supported')
    }

    const parser = parserFactory.createParser();
    // ...
  }
  // ...
}

class RuleConfigParserFactoryMap {
  private static cachedFactories = new Map();

  cachedFactories.set("json", new JsonRuleConfigParserFactory()); 
  cachedFactories.set("xml", new XmlRuleConfigParserFactory()); 
  cachedFactories.set("yaml", new YamlRuleConfigParserFactory()); 
  cachedFactories.set("properties", new PropertiesRuleConfigParserFactory());

  public static getParserFactory(type: string) {
    if (!type) {
      return null;
    }

    return cachedFactories.get(type);
  }
}
```

但我们需要新增规则配置解析器的时候，只需要创建新的 parser 类和 parser factory 类，并在 map 中添加即可。代码改动很小，基本符合开闭原则。

对这个例子来说，使用工厂模式会有些重，每个 Factory 类只做简单的 new 操作，功能非常单薄，没有必要设计成独立的类。这种情况下使用简单模式更合适。

### 什么时候该用工厂方法模式而非简单工厂模式

通过前面，我们知道当某个代码块的逻辑过于复杂的时候，可以将它剥离出来，独立为函数或者类。让代码更加可读、可维护。但是如果代码不复杂，完全没有必要拆分成独立的类。

基于这个思想：

- 如果创建对象的逻辑复杂，就使用工厂方法模式：创建对象不是简单的 new 一下就可以完成，而是要组合其他类，做各种初始化操作，这个时候通过工厂方法模式，将复杂的创建逻辑拆分到多个工厂类中，让每个工厂类不至于复杂。这个时候使用简单工厂模式，将所有创建逻辑放到一个工厂类中，会导致这个工厂类很复杂。
- 另外如果想减少 if 分支的判断，同时可以使用工厂方法模式。

## 抽象工厂

抽象工厂模式（Abstract Factory）的使用场景比较特殊，简单了解即可。

简单工厂、工厂方法中，**类的分类方式只有一种**，例如前面例子中根据文件格式（Json、Xml...）。但是**如果类有两种分类方式**，比如，既可以按照文件格式，可以按照解析的对象（Rule 规则配置还是 System 系统配置）来分类，那就会对应 8 个 parser 类：

```

针对规则配置的解析器：基于接口 IRuleConfigParser
JsonRuleConfigParser
XmlRuleConfigParser
YamlRuleConfigParser
PropertiesRuleConfigParser

针对系统配置的解析器：基于接口 ISystemConfigParser
JsonSystemConfigParser
XmlSystemConfigParser
YamlSystemConfigParser
PropertiesSystemConfigParser
```

针对这种特殊场景，如果还是用工厂方法来实现，就需要针对每个 parser 写一个工厂类，需要编写 8 个类！如果之后还需要增加对业务配置的解析器（比如 IBizConfigParser），那么就再增加 4 个工厂类。

过多的类会让系统很难维护，怎么处理？

抽象工厂就是针对这种非常特殊的场景，**可以让一个工厂负责创建多个不同类型的对象**（IRuleConfigParser、ISystemConfigParser 等），而不是只创建一种 parser 对象。这样就可以有效减少工厂类的个数。具体代码如下：

```ts
interface IRuleConfigParserFactory {
  createRuleParser: () => IRuleConfigParser;
  createSystemParser: () => ISystemConfigParser;
}

class JsonRuleConfigParserFactory implements IRuleConfigParserFactory {
  createRuleParser() {
    return new JsonRuleConfigParser();
  }
  createSystemParser() {
    return new JsonSystemConfigParser();
  }
}
```

## 总结一下

三种工厂模式中，简单工厂和工厂方法比较常用，抽象工厂的应用场景比较特殊，所以很少用到。

上升一个思维层面来看工厂模式，它的作用无外乎下面这四个。这也是判断要不要使用工厂模式的最本质的参考标准。
- 封装变化：创建逻辑有可能变化，封装成工厂类之后，创建逻辑的变更对调用者透明。
- 代码复用：创建代码抽离到独立的工厂类之后可以复用。
- 隔离复杂性：封装复杂的创建逻辑，调用者无需了解如何创建对象。
- 控制复杂度：将创建代码抽离出来，让原本的函数或类职责更单一，代码更简洁。

<nx-tip text="简单工厂模式和工厂方法模式差异点主要是什么？"/>

<nx-tip text="简单工厂模式还叫作静态工厂方法模式（Static Factory Method Pattern）。之所以叫静态工厂方法模式，是因为其中创建对象的方法是静态的。为什么设置成静态的？" />

## 如何设计一个 Dependency Injection 框架

再来讲一个创建对象的“大工程”，依赖注入框架，或者叫依赖注入容器（Dependency Injection Container），简称 DI 容器。

主要搞清楚几个问题：

- DI 容器跟我们讲的工厂模式又有何区别和联系？
- DI 容器的核心功能有哪些，以及如何实现一个简单的 DI 容器？

### 工厂模式和 DI 容器有何区别

实际上，DI 容器底层最基本的设计思路就是基于工厂模式的。

DI 容器相当于一个大的工厂类，**负责在程序启动的时候，根据配置（要创建哪些类对象，每个类对象的创建需要依赖哪些其他类对象）事先创建好对象**。当应用程序需要使用某个类对象的时候，直接从容器中获取即可。正是因为它持有一堆对象，所以这个框架才被称为“容器”。


- 它处理的是更大的对象创建工程

工厂模式中一个工厂类只负责某个类对象或者某一组相关类对象（继承自统一抽象类或者接口的子类）的创建，而 DI 容器负责整个应用中所有类对象的创建。

- 做的事情更多

DI 容器还负责，配置的解析、对象生命周期的管理。

接下来仔细讲讲一个简单 DI 容器应该包含哪些核心功能。

### DI 容器的核心功能有哪些

一个简单的 DI 容器的核心功能一般有三个：**配置解析、对象创建和对象生命周期管理**。


