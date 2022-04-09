# 实战

前面学习了面向对象的一些理论知识，比如，面向对象四大特性、接口和抽象类、面向对象和面向过程的编程风格、基于接口而非实现编程和多用组合少用继承设计思想等等。接下来，通过两个更加贴近项目的项目来进一步了解如何将它们应用到软件开发中。

## 常用的基于贫血模型的 MVC 架构违背 OPP 吗

虽然这种开发模式已经成为 Web 项目的标准开发模式，但是它却违背了面向对象的编程风格，属于面向过程编程。特别是领域驱动设计（Domain Driven Design，简称 DDD）盛行之后，这种开发模式更加被人诟病，基于充血模型的 DDD 开发模式越来越被人提倡。

### 什么是基于贫血模型的传统开发模式

#### MVC 三层架构

- M：表示 Model
- V：表示 View
- C：表示 Controller

它将整个项目分为三层：表示层、逻辑层、数据层。它是一个笼统的分层方式，实际项目开发并不是 100% 遵从这种分层方式，会根据实际项目需求做相当调整。

比如，现在很多 Web 都是**前后端分离**的，后端给前端提供接口调用。一般将项目分为 Repository 层、Service 层、Controller 层。

- Repository：负责数据访问
- Service：负责业务逻辑
- Controller：负责暴露接口

基本所有的 Web 项目都按照类似的思路进行分层。

#### 贫血模型

结合一个例子来解释一下什么事贫血模型

```java

////////// Controller+VO(View Object) //////////

public class UserController {
  private UserService userService; //通过构造函数或者IOC框架注入
  
  public UserVo getUserById(Long userId) {
    UserBo userBo = userService.getUserById(userId);
    UserVo userVo = [...convert userBo to userVo...];
    return userVo;
  }
}

public class UserVo {//省略其他属性、get/set/construct方法
  private Long id;
  private String name;
  private String cellphone;
}

////////// Service+BO(Business Object) //////////

public class UserService {
  private UserRepository userRepository; //通过构造函数或者IOC框架注入
  
  public UserBo getUserById(Long userId) {
    UserEntity userEntity = userRepository.getUserById(userId);
    UserBo userBo = [...convert userEntity to userBo...];
    return userBo;
  }
}

public class UserBo {//省略其他属性、get/set/construct方法
  private Long id;
  private String name;
  private String cellphone;
}

////////// Repository+Entity //////////

public class UserRepository {
  public UserEntity getUserById(Long userId) { //... }
}

public class UserEntity {//省略其他属性、get/set/construct方法
  private Long id;
  private String name;
  private String cellphone;
}
```

从代码可以看出，UserBo 是一个纯粹的数据结构，只包含数据不包含业务逻辑，业务逻辑在 UserService 中。通过 UserService 来操作 UserBo。换句话说，Service 的数据和业务逻辑，被分割在 BO 和 Service 两个类中。

像 UserBo 这样，**只包含数据，不包含业务逻辑的类，就叫作贫血模型（Anemic Domain Model）**。同 UserEntity、UserVo 都是基于贫血模型设计的。

贫血模型将数据和操作分开，破坏了面向对象的封装特性，是一种典型的面向过程编程风格。

### 什么是基于充血模型的 DDD 开发模式

#### 先看一下什么是充血模型

- 贫血模型：数据和业务逻辑被分割到不同类中
- 充血模型：正好相反，数据和业务逻辑被封装到同一个类中

#### 再看一下什么事领域驱动设计 DDD

- 作用：领域驱动设计（DDD）**主要用来指导如何解耦业务系统，划分业务模块，定义业务领域及其交互的**。
- 关键：**做好领域驱动设计的关键是，看你自己对所做的业务的熟悉程度，而并不是对领域设计这个概念本身的掌握程度**。即便你把领域驱动搞得再清楚，但是对业务不熟悉，也不一定能做出合理的领域设计。所以领域驱动并不是银弹。
- 区别：基于贫血模型的传统的开发模式，重 Service 轻 BO；基于充血模型的 DDD 开发模式，轻 Service 重 Domain。

基于充血模型的 DDD 开发模式实现的代码，也是按照 MVC 三层架构分层，它跟基于贫血模型的传统的开发模式**区别主要在 Service 层**。

基于贫血模型的传统开发模式：**Service 层包含 Service 类和 BO 类两部分**，BO 是贫血模型，只包含数据不包含具体的业务逻辑，业务逻辑集中在 Service 类。

基于充血模型的 DDD 开发模式：**Service 包含 Service 和 Domain 类两部分**，Domain 相当于 BO，不过，Domain 是基于充血模型开发的，即包含数据也包含业务逻辑，这时 Service 类就变得很单薄。

### 为什么基于贫血模型的传统开发模式如此受欢迎

几乎所有的 Web 项目都是基于这种贫血模型的开发模式。前面介绍过，面向过程存在的种种弊端，比如，数据和操作分离，数据本身的操作就不受限制，任何代码都可以修改。

为什么面向过程风格的基于贫血模型的开发模式还这么受欢迎？

主要有三个原因：

- 大部分情况我们业务都比较简单，贫血模型就可以满足。
  - 可能简单到就是基于 SQL 的 CRUD 操作，不需要精心设计充血模型，贫血模型足以满足这种简单的业务开发工作。
  - 另外，在业务简单的情况下，即便我们设计了充血模型，那模型本身包含的业务并不多，设计出来的领域模型也会比较单薄，跟贫血模型差不多，没有太多意义。
- 设计充血模型比贫血模型更有难度。因为充血模型是一种面向对象的编程风格，一开始就要设计好针对数据要暴露哪些操作，定义哪些业务逻辑。而不是像贫血模型那样，只需定义好数据，之后有功能需求，就在 Service 层定义什么操作，不需要太多事先设计。
- 思维已经固化，转型有成本。贫血模型经历了很多年，已经深入人心，习以为常。如果转向充血模型、领域驱动设计，势必有一定的学习成本，没有遇到痛点的时候不愿意做这件事。

### 什么项目应该考虑使用基于充血模型的 DDD 开发模式

前面讲到，业务简单用基于贫血模型的传统开发模型就可以。相对应的，**基于充血模型的 DDD 开发模式，更适合业务复杂的系统开发**。比如，包含各种利息计算模型、还款模型等复杂业务的金融系统。

- 基于充血模型的 DDD 开发模式真正优势是开发流程

前面讲到这两种模式区别落实到代码上是，一个将业务逻辑放到 Service，一个放到 Domain 领域模型中。除了这个区别之外，还有一个非常重要的区别，**那就是两种不同的开发模式会导致不同的开发流程**。基于充血模型的 DDD 开发模式的开发流程，在应对复杂业务系统的开发的时候更加有优势。

