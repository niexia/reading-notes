# 代理模式

开始学习另外一种类型的设计模式：**结构型模式**。结构型模式主要总结了**一些类或对象组合在一起**的经典结构，这些经典的结构可以解决特定应用场景的问题。

先看代理模式，它是实际开发中经常被用到的一种设计模式。

## 代理模式的原理解析

代理模式（Proxy Design Pattern）的原理和代码实现都不难掌握。**它在不改变原始类（或叫被代理类）代码的情况下，通过引入代理类来给原始类附加功能**。

结合前面的性能计数器例子看一下。开发一个 MetricsCollector 类，用来收集接口请求的原始数据，比如访问时间、处理时常等。在业务系统中，采用以下方式来使用这个 MetricsCollector 类：

```ts

class UserController {
  //...省略其他属性和方法...
  private metricsCollector: MetricsCollector;
  constructor() {
    this.metricsCollector =  new MetricsCollector();
  }

  login(telephone: string, password: string) {
    const startTimestamp = System.currentTimeMillis();

    // ... 省略login逻辑...

    const endTimeStamp = System.currentTimeMillis();
    const responseTime = endTimeStamp - startTimestamp;
    const requestInfo = new RequestInfo("login", responseTime, startTimestamp);
    metricsCollector.recordRequest(requestInfo);

    //...返回UserVo数据...
  }

  register(telephone: string, password: string) {
    const startTimestamp = System.currentTimeMillis();

    // ... 省略register逻辑...

    const endTimeStamp = System.currentTimeMillis();
    const responseTime = endTimeStamp - startTimestamp;
    const requestInfo = new RequestInfo("register", responseTime, startTimestamp);
    metricsCollector.recordRequest(requestInfo);

    //...返回UserVo数据...
  }
}
```

很明显，这样的写法**存在两个问题**：

- 性能计数器框架代码侵入到业务代码中，跟业务代码高度耦合。如果未来需要替换这个框架，那替换的成本会比较大。
- 收集接口请求的代码跟业务代码无关，本就不应该放到一个类中。业务类最好职责更加单一，只聚焦业务处理。

**为了将框架代码和业务代码解耦，代理模式就派上用场了**。

代理类 UserControllerProxy 和原始类 UserController 实现相同的接口 IUserController。

- UserController 类只负责业务功能。
- 代理类 UserControllerProxy 负责在业务代码执行前后附加其他逻辑代码，并通过委托的方式调用原始类来执行业务代码。

```ts

interface IUserController {
  login: (telephone: string, password: string) => UserVo;
  register: (telephone: string, password: string) => UserVo;
}

class UserController implements IUserController {
  //...省略其他属性和方法...

  login(telephone: string, password: string) {
    //...省略login逻辑...
    //...返回UserVo数据...
  }
  register(telephone: string, password: string) {
    //...省略register逻辑...
    //...返回UserVo数据...
  }
}

class UserControllerProxy implements IUserController {
  private metricsCollector: MetricsCollector;
  private userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;
    this.metricsCollector = new MetricsCollector();
  }

  login(telephone: string, password: string) {
    const startTimestamp = System.currentTimeMillis();

    // 委托
    const userVo = userController.login(telephone, password);

    const endTimeStamp = System.currentTimeMillis();
    const responseTime = endTimeStamp - startTimestamp;
    const requestInfo = new RequestInfo("login", responseTime, startTimestamp);
    metricsCollector.recordRequest(requestInfo);

    return userVo;
  }

  register(telephone: string, password: string) {
    const startTimestamp = System.currentTimeMillis();

    const userVo = userController.register(telephone, password);

    const endTimeStamp = System.currentTimeMillis();
    const responseTime = endTimeStamp - startTimestamp;
    const requestInfo = new RequestInfo("register", responseTime, startTimestamp);
    metricsCollector.recordRequest(requestInfo);

    return userVo;
  }
}

// UserControllerProxy 使用举例
// 因为原始类和代理类实现相同的接口，是基于接口而非实现编程
// 将 UserController 类对象替换为 UserControllerProxy 类对象，不需要改动太多代码
const userController = new UserControllerProxy(new UserController());
```

在刚刚的代码中，代理类和原始类都是基于接口而非实现编程的设计思想。为了让代码改动少，代理类和原始类需要实现相同的接口。

但是，如果原始类并没有定义接口，并且原始类代码并不是我们开发维护的（比如它来自一个第三方的类库），我们也没办法直接修改原始类，给它重新定义一个接口。

**对于这种外部类的扩展，我们一般都是采用继承的方式**。

```ts

class UserControllerProxy extends UserController {
  private metricsCollector: MetricsCollector;

  constructor() {
    this.metricsCollector = new MetricsCollector();
  }

  login(telephone: string, password: string) {
    const startTimestamp = System.currentTimeMillis();
    // 调用！
    const userVo = super.login(telephone, password);

    const endTimeStamp = System.currentTimeMillis();
    const responseTime = endTimeStamp - startTimestamp;
    const requestInfo = new RequestInfo("login", responseTime, startTimestamp);
    metricsCollector.recordRequest(requestInfo);

    return userVo;
  }

}
// UserControllerProxy 使用举例
const userController = new UserControllerProxy();
```

## 动态代理的原理解析

如果按照前面的方式，还是有点问题

- 一方面，我们需要在代理类中，将原始类中的所有的方法，都重新实现一遍，并且为每个方法都附加相似的代码逻辑。
- 另一方面，如果要添加附加功能的类有不止一个，我们需要针对每个类都创建一个代理类。

比如，有 50 个类要添加附加功能的原始类，那就要创建 50 个对应的代理类。类的个数增加会增加代码的**维护成本**，并且每个代理中都有点模板式的“重复”代码，也增加了不必要的**开发成本**。

我们可以使用动态代理来解决这个问题。

所谓**动态代理（Dynamic Proxy），就是不事先为每个原始类编写代理类，而是在运行的时候，动态地创建原始类对应的代理类，然后在系统中用代理类代替原始类**。

## 代理模式的应用场景

代理模式的应用场景非常多，这里列举一些比较常见的用法

### 业务系统的非功能性需求开发

代理模式最常用的一个应用场景就是，在业务系统中开发一些非功能性需求，比如：监控、统计、鉴权、限流、事务、幂等、日志。我们将这些附加功能与业务功能解耦，放到代理类中统一处理，让程序员只需要关注业务方面的开发。实际上，前面举的搜集接口请求信息的例子，就是这个应用场景的一个典型例子。

### 代理模式在 RPC、缓存中的应用

**实际上，RPC 框架也可以看作一种代理模式**，GoF 的《设计模式》一书中把它称作远程代理。通过远程代理，将网络通信、数据编解码等细节隐藏起来。客户端在使用 RPC 服务的时候，就像使用本地函数一样，无需了解跟服务器交互的细节。除此之外，RPC 服务的开发者也只需要开发业务逻辑，就像开发本地使用的函数一样，不需要关注跟客户端的交互细节。

**我们再来看代理模式在缓存中的应用**。假设我们要开发一个接口请求的缓存功能，**对于某些接口请求，如果入参相同，在设定的过期时间内，直接返回缓存结果**，而不用重新进行逻辑处理。

最简单的实现方法就是刚刚我们讲到的，给每个需要支持缓存的查询需求都开发两个不同的接口，一个支持缓存，一个支持实时查询。但是，这样做显然增加了开发成本，而且会让代码看起来非常臃肿（接口个数成倍增加），也不方便缓存接口的集中管理（增加、删除缓存接口）、集中配置（比如配置每个接口缓存过期时间）

针对这些问题，代理模式就能派上用场了，确切地说，应该是动态代理。如果是基于 Spring 框架来开发的话，那就可以在 AOP 切面中完成接口缓存的功能。在应用启动的时候，我们从配置文件中加载需要支持缓存的接口，以及相应的缓存策略（比如过期时间）等。当请求到来的时候，我们在 AOP 切面中拦截请求，如果请求中带有支持缓存的字段（比如 <http://…?..&cached=true>），我们便从缓存（内存缓存或者 Redis 缓存等）中获取数据直接返回。
