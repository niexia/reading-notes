# SOLID

接下来，学习一些经典设计原则，其中包括 SOLID、KISS、YAGNI、DRY、LOD 等，介绍这些原则的定义，**原则设计的初衷，能解决哪些问题，有哪些应用场景等**。

SOLID 原则并非单纯的 1 个原则，而是由 5 个设计原则组成的，它们分别是：

- S：单一职责原则
- O：开闭原则
- L：里式替换原则
- I：接口隔离原则
- D：依赖反转原则

## 单一职责原则 Single Responsibility Principle

### 如何理解单一指责原则

单一职责原则的英文是 Single Responsibility Principle，缩写为 SRP。这个原则的英文描述是这样的：A class or module should have a single responsibility。如果我们把它翻译成中文，那就是：**一个类或者模块只负责完成一个职责（或者功能）**

这个原则的描述对象包含两个：**类（class）和模块（module）**

关于这个概念有两个理解方式：

- 把模块看作是**更加抽象的概念**，类也可以看作模块；
- 把模块看作比类**更粗粒度的代码块**，模块包含多个类，多个类组成一个模块。

接下来只从“类”的角度进行分析。

单一指责定义很简单，也很好理解。**一个类只负责完成一个职责或功能，也就是说不要设计大而全的类，要设计粒度小、功能单一的类**。如果把两个或两个以上业务不相干的功能放到一个类中，那么我们就可以说它的职责不单一，应该进行拆分。

例如一个类包含了订单的一些操作，也包含了用户的一些操作，而订单和用户是两个独立的业务模型，将两个不相干的功能放到一个类中，就违反单一指责原则。

### 怎么判断职责是否单一

虽然有时我们容易看出两个功能是否想干，但是在大部分真实开发中，**对于一个类是否职责单一的判断是很拿捏的**。

举个列子，在一个社交商品中，用下面 UserInfo 类来记录用户信息：

``` ts
class UserInfo {
  private userId: number;
  private username: string;
  private email: string;
  private telephone: string;
  private createTime: number;;
  private lastLoginTime: number;;
  private avatarUrl: string;
  private provinceOfAddress: string; // 省
  private cityOfAddress: string; // 市
  private regionOfAddress: string; // 区 
  private detailedAddress: string; // 详细地址
  // ...省略其他属性和方法...
}
```

你觉得它是否满足单一职责原则呢？

关于这个问题有两个观点：

1.UserInfo 都是跟用户相关的信息，所有属性和方法都隶属于用户这个业务模型，满足单一指责；<br/>
2.地址信息在 UserInfo 中占比比较重，可以拆分成独立的 UserAddressInfo 类，拆分之后两个类职责更加单一。

**做选择的时候不能脱离具体的应用场景**。如果地址信息和其他信息，只是单纯用来展示，那现在 UserInfo 的设计是合理的；如果产品发展很好，之后又添加了电商模块，用户地址信息还会用在电商物流中，那最好是将地址信息从 UserInfo 中拆分出来独立成用户物流信息（或者叫地址信息）

从刚刚这里例子可以总结出：

- 不同应用场景、不同阶段的需求背景下，对同一个类的职责是否单一的判断，可能都是不一样。
- 另外从不同业务层面，去看待同一个类的设计，对类是否职责单一，也会有不同的认识。如果从“用户”这个业务层面，UserInfo 包含所有用户满足单一职责原则；从“用户展示信息”、“地址信息”等这些更细粒度的业务层面来看，那 UserInfo 就应该继续拆分。

这样看来，**判断一个类的职责是否单一没有一个明确的、可以量化的标准**。这是一件非常主观的事情。

**在真正的软件开发中，我们没必要过于未雨绸缪，过度设计**。可以先写一个粗粒度的类，满足业务需求。随着业务发展，如果粗粒度的类越来越大，代码越来越多，这个时候我们就可以将这个类，拆分成几个更细粒度的类。这就是所谓的**持续重构**。

#### 判断技巧

为了更好拿捏这个原则，这里有些小技巧，能够很好帮你从侧面上判定一个类是否足够单一。比起主观的思考更有指导意义、更有可执行性。

- 类太大：类中的代码行数、函数或属性过多，会影响代码的可读性和可维护性，我们就需要考虑对类进行拆分；
- 类依赖太多（**耦合重**）：类依赖的其他类过多，或者依赖类的其他类过多，不符合高内聚、低耦合的设计思想，我们就需要考虑对类进行拆分；
- 私有方法过多不能复用：私有方法过多，我们就要考虑能否将私有方法独立到新的类中，设置为 public 方法，供更多的类使用，从而提高代码的复用性；
- 很难命名：比较难给类起一个合适名字，很难用一个业务名词概括，或者只能用一些笼统的 Manager、Context 之类的词语来命名，这就说明类的职责定义得可能不够清晰；
- 方法只和少数属性相关：类中大量的方法都是集中操作类中的某几个属性，比如，在 UserInfo 例子中，如果一半的方法都是在操作 address 信息，那就可以考虑将这几个属性和对应的方法拆分出来。

不过，上面的判断原则还是“模糊的”，代码函数多少才算多？前期我们约定可以量化的标准，例如代码函数不超过 200 行。随着经验的积累，就可以在开发中慢慢“品尝”出来。就像大厨“放少许盐”。

### 类的职责是否设计越单一越好

答案是否定的。

还是看一个例子，Serialization 类实现了一个简单协议的序列化和反序列功能。

```ts

/**
 * Protocol format: identifier-string;{gson string}
 * For example: UEUEUE;{"a":"A","b":"B"}
 */
class Serialization {
  private static IDENTIFIER_STRING: string = "UEUEUE;";
  private gson;
  
  constructor() {
    this.gson = new Gson();
  }
  
  serialize() {
    const textBuilder = new StringBuilder();
    textBuilder.append(IDENTIFIER_STRING);
    textBuilder.append(gson.toJson(object));
    return textBuilder.toString();
  }
  
  deserialize(text: string) {
    if (!text.startsWith(IDENTIFIER_STRING)) {
        return Collections.emptyMap();
    }
    const gsonStr = text.substring(IDENTIFIER_STRING.length());
    return gson.fromJson(gsonStr, Map.class);
  }
}
```

如果想当职责更加单一，拆分成两个类：一个负责序列化，一个负责反序列化。

```ts
class Serialize {
  private static IDENTIFIER_STRING: string = "UEUEUE;";
  private gson;
  
  constructor() {
    this.gson = new Gson();
  }
  
  serialize() {
    // ...
  }
}

class Deserializer {
  private static IDENTIFIER_STRING: string = "UEUEUE;";
  private gson;
  
  constructor() {
    this.gson = new Gson();
  }
  
  deserialize(text: string) {
    // ...
  }
}
```

拆分之后职责更单一，但是带来了一些新问题，可维护性更差了：

- 不内聚：如果我们需要修改协议格式（JSON => XML），那么两个类都需要修改
- 容易修改漏：如果修改的时候只改了 Serialize，忘记修改 Deserializer 就导致序列化、反序列化不匹配出错

<nx-tip type="warning" text="实际上，不管是应用设计原则还是设计模式，最终的目的还是**提高代码的可读性、可扩展性、复用性、可维护性等**。我们在考虑应用某一个设计原则是否合理的时候，也可以以此作为最终的考量标准。"/>

**单一职责：将相关的“在一起”，提高内聚，避免不相关的“在一起”，降低耦合**。_提升维护性_。

