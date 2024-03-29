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

**基于充血模型的 DDD 开发模式真正优势是开发流程**。

前面讲到这两种模式区别落实到代码上是，一个将业务逻辑放到 Service，一个放到 Domain 领域模型中。除了这个区别之外，还有一个非常重要的区别，**那就是两种不同的开发模式会导致不同的开发流程**。基于充血模型的 DDD 开发模式的开发流程，在应对复杂业务系统的开发的时候更加有优势。

不夸张的说我们平时的开发是 SQL 驱动（SQL-Driven）的开发模式。

一般流程是，接到一个接口的开发需求，就去看接口需要的数据对应到数据库中需要哪些表，然后思考如何编写 SQL 语句来获取数据。之后就是定义 Entity、BO、VO，然后模板式地往对应的 Repository、Service、Controller 类中添加代码。

业务逻辑实际是包裹在一个大的 SQL 中，而 Service 做的很少。SQL 是针对特定的业务功能编写的，复用性很差。开发另外的功能时，只能重新写一个满足新需求的 SQL。最后导致很多区别很小的 SQL 语句满天飞。

对于简单的业务系统，这种开发方式问题不大。但是对于复杂系统，这种方式会让代码越来越混乱，最终导致无法维护。

基于充血模型的 DDD 开发模式流程完全不一样。

我们需要**先理清楚所有的业务，定义领域领域模型包含的属性和方法。领域模型相当于可复用的业务中间层。新功能的开发，都基于之前定义好的这些领域模型来完成**。

<nx-tip type="warning" text="领域模型在前端中可以看作是业务单元/模块，提供相关的属性和方法，作为可复用的中间层。"/>

## 利用基于充血模型的DDD开发一个虚拟钱包系统

### 业务背景介绍

很多具有支付、购买功能的应用（淘宝、滴滴、极客时间）都支持钱包的功能。其中为每个用户开设一个系统内的虚拟钱包，支持用户充值、提现、支付、冻结、查询账户余额、查询交易流水等。一般来讲，每个虚拟钱包都会对应用户的一个真实支付账户，可能是银行卡账号，也可能是三方支付账户（支付宝、微信钱包）。

为了方便讲解，限定钱包暂时只支持充值、提现、支付、查询余额、查询交易流水这五个核心的功能。

1. 充值：用户通过三方支付渠道，把自己银行卡账户内的钱，充值到虚拟钱包账号中。
2. 支付：用户用钱包内的余额，支付购买应用内的商品。
3. 提现：将虚拟钱包中的余额，提现到自己的银行卡中。
4. 查询余额：查询虚拟钱包中的余额数字。
5. 查询交易流水：在用户充值、支付、提现的时候，我们会记录相应的交易信息，查询时将之前记录的交易流水，按照时间、类型等条件过滤之后，显示出来即可。

![钱包](../../public/assets//object-oriented-wallet.png)

### 设计思路

根据前面的业务流程，可以把整个钱包系统的业务划分为两部分：

- 一部分单纯跟应用内的虚拟钱包账户打交道
- 另一部分单纯跟银行账户打交单

基于这个业务划分，给系统解耦，将整个钱包系统拆分成两个子系统：虚拟钱包系统和三方支付系统。

接下来聚焦于虚拟钱包系统的设计和实现。

我们来看下，**如果要支持钱包的这五个核心功能，虚拟钱包系统需要对应实现哪些操作**。

钱包 | 虚拟钱包
---------|----------
 充值 | + 余额
 提现 | - 余额
 支付 | +- 余额（一个账户减余额，另一个账户加余额）
 查询余额 | 查询余额
 查询交易流水 | -

具体看一下查询交易流水，也就是交易流水如何记录和查询？首先交易流水一般必须包含几个信息：

交易流水 ID | 交易时间 | 交易余额 | 交易类型 | 入账钱包账号 | 出账钱包账号 
---------|----------|----------|----------|----------|----------

交易类型包括：充值、提现、支付。为了兼容支付这种涉及两个账号的交易类型，钱包账号区分出入。

接下来看一下如何分别设计实现这样一个虚拟钱包。

### 基于贫血模型的传统开发模式

这是一个典型的 Web 后端项目的三层结构。

- Controller 层

Controller 和 VO 负责暴露接口。接口实现比较简单，主要就是调用 Service 的方法。

```java

public class VirtualWalletController {
  // 通过构造函数或者IOC框架注入
  private VirtualWalletService virtualWalletService;
  
  public BigDecimal getBalance(Long walletId) { ... } //查询余额
  public void debit(Long walletId, BigDecimal amount) { ... } //出账
  public void credit(Long walletId, BigDecimal amount) { ... } //入账
  public void transfer(Long fromWalletId, Long toWalletId, BigDecimal amount) { ...} //转账
  //省略查询transaction的接口
}
```

- Service 层

Service 和 BO 负责核心业务逻辑。

```java

public class VirtualWalletBo {//省略getter/setter/constructor方法
  private Long id;
  private Long createTime;
  private BigDecimal balance;
}

public Enum TransactionType {
  DEBIT,
  CREDIT,
  TRANSFER;
}

public class VirtualWalletService {
  // 通过构造函数或者IOC框架注入
  private VirtualWalletRepository walletRepo;
  private VirtualWalletTransactionRepository transactionRepo;
  
  public VirtualWalletBo getVirtualWallet(Long walletId) {
    VirtualWalletEntity walletEntity = walletRepo.getWalletEntity(walletId);
    VirtualWalletBo walletBo = convert(walletEntity);
    return walletBo;
  }
  
  // 查询余额
  public BigDecimal getBalance(Long walletId) {
    return walletRepo.getBalance(walletId);
  }

  // 提现
  @Transactional
  public void debit(Long walletId, BigDecimal amount) {
    VirtualWalletEntity walletEntity = walletRepo.getWalletEntity(walletId);
    BigDecimal balance = walletEntity.getBalance();
    if (balance.compareTo(amount) < 0) {
      throw new NoSufficientBalanceException(...);
    }
    // 记录交易
    VirtualWalletTransactionEntity transactionEntity = new VirtualWalletTransactionEntity();
    transactionEntity.setAmount(amount);
    transactionEntity.setCreateTime(System.currentTimeMillis());
    transactionEntity.setType(TransactionType.DEBIT);
    transactionEntity.setFromWalletId(walletId);
    transactionRepo.saveTransaction(transactionEntity);
    // 操作钱包
    walletRepo.updateBalance(walletId, balance.subtract(amount));
  }

  // 充值
  @Transactional
  public void credit(Long walletId, BigDecimal amount) {
    //...
  }

  // 支付
  @Transactional
  public void transfer(Long fromWalletId, Long toWalletId, BigDecimal amount) {
    VirtualWalletTransactionEntity transactionEntity = new VirtualWalletTransactionEntity();
    transactionEntity.setAmount(amount);
    // ...
    debit(fromWalletId, amount);
    credit(toWalletId, amount);
  }
}

```

- Repository 层

Repository 和 Entity 负责数据存取。层的代码实现比较简单，不是重点，省略。

### 基于充血模型的 DDD 开发模式

基于充血模型的 DDD 开发模式，跟基于贫血模型的传统开发模式的主要区别就在 Service 层，Controller 层和 Repository 层的代码基本上相同。所以我们重点看 Service 层，基于充血模型的 DDD 开发模式该如何实现。

```java
// Domain领域模型(充血模型)
public class VirtualWallet { 
  private Long id;
  private Long createTime = System.currentTimeMillis();;
  private BigDecimal balance = BigDecimal.ZERO;
  
  public VirtualWallet(Long preAllocatedId) {
    this.id = preAllocatedId;
  }
  
  public BigDecimal balance() {
    return this.balance;
  }
  // 包含业务逻辑了
  public void debit(BigDecimal amount) {
    if (this.balance.compareTo(amount) < 0) {
      throw new InsufficientBalanceException(...);
    }
    this.balance = this.balance.subtract(amount);
  }
  
  public void credit(BigDecimal amount) {
    if (amount.compareTo(BigDecimal.ZERO) < 0) {
      throw new InvalidAmountException(...);
    }
    this.balance = this.balance.add(amount);
  }
}

public class VirtualWalletService {
  // 通过构造函数或者IOC框架注入
  private VirtualWalletRepository walletRepo;
  private VirtualWalletTransactionRepository transactionRepo;
  
  public VirtualWallet getVirtualWallet(Long walletId) {
    VirtualWalletEntity walletEntity = walletRepo.getWalletEntity(walletId);
    VirtualWallet wallet = convert(walletEntity);
    return wallet;
  }
  
  public BigDecimal getBalance(Long walletId) {
    return walletRepo.getBalance(walletId);
  }
  
  @Transactional
  public void debit(Long walletId, BigDecimal amount) {
    VirtualWalletEntity walletEntity = walletRepo.getWalletEntity(walletId);
    VirtualWallet wallet = convert(walletEntity);
    wallet.debit(amount);
    VirtualWalletTransactionEntity transactionEntity = new VirtualWalletTransactionEntity();
    transactionEntity.setAmount(amount);
    // ...
    walletRepo.updateBalance(walletId, wallet.balance());
  }
  
  @Transactional
  public void credit(Long walletId, BigDecimal amount) {
    // ...
  }

  @Transactional
  public void transfer(Long fromWalletId, Long toWalletId, BigDecimal amount) {
    // 跟基于贫血模型的传统开发模式的代码一样...
  }
}

```

<nx-tip text="有 domain 了，walletRepo 是什么？原来是看错了！不是 BO，walletRepo 就是VirtualWalletRepository，和数据库打交道"/>

**现在领域模型 VirtualWallet 类很单薄，包含的业务逻辑很简单**。相对于原来的贫血模型的设计思路，这种充血模型的设计思路，貌似并没有太大优势。没错！这也是大部分业务系统都使用基于贫血模型开发的原因。

不过如果虚拟钱包支持更复杂的业务逻辑，充血模型的优势就出来了。比如，我们要支持透支一定额度和冻结部分余额的功能，这个时候再看一下 VirtualWallet 类：

```java

public class VirtualWallet {
  private Long id;
  private Long createTime = System.currentTimeMillis();;
  private BigDecimal balance = BigDecimal.ZERO;
  private boolean isAllowedOverdraft = true;
  private BigDecimal overdraftAmount = BigDecimal.ZERO;
  private BigDecimal frozenAmount = BigDecimal.ZERO;
  
  public VirtualWallet(Long preAllocatedId) {
    this.id = preAllocatedId;
  }
  
  public void freeze(BigDecimal amount) { ... }
  public void unfreeze(BigDecimal amount) { ...}
  public void increaseOverdraftAmount(BigDecimal amount) { ... }
  public void decreaseOverdraftAmount(BigDecimal amount) { ... }
  public void closeOverdraft() { ... }
  public void openOverdraft() { ... }
  
  public BigDecimal balance() {
    return this.balance;
  }
  
  public BigDecimal getAvaliableBalance() {
    BigDecimal totalAvaliableBalance = this.balance.subtract(this.frozenAmount);
    if (isAllowedOverdraft) {
      totalAvaliableBalance += this.overdraftAmount;
    }
    return totalAvaliableBalance;
  }
  
  public void debit(BigDecimal amount) {
    // ...
  }
  
  public void credit(BigDecimal amount) {
    // ...
  }
}
```

领域模型 VirtualWallet 现在看起来丰富很多了。VirtualWallet 类的业务逻辑会变得越来越复杂，也就很值得设计成充血模型了。
### 辩证思考与灵活应用

接下来还有两个问题值得探讨。

#### Service 的作用是什么

在基于充血模型的 DDD 开发模式中，将业务逻辑移动到 Domain 中，Service 类变得很薄，但在我们的代码设计与实现中，并没有完全将 Service 类去掉，这是为什么？或者说，Service 类在这种情况下担当的职责是什么？哪些功能逻辑会放到 Service 类中？

区别于 Domain 的职责，Service 类主要有下面这样几个职责：

- Service 类负责与 Repository 交流。
  - 它调用 Respository 类的方法，获取数据库中的数据，转化成领域模型 VirtualWallet，然后由领域模型 VirtualWallet 来完成业务逻辑，最后调用 Repository 类的方法，将数据存回数据库。
  - 之所以这样做是，我们想**保持领域模型的独立性**，不与任何其他层代码（Repository）或开发框架（如 Spring）耦合在一起，将流程性的代码逻辑（从 DB 读数据等）和领域模型的业务逻辑解耦，让领域模型更加可复用。

- Service 类负责跨领域模型的业务聚合功能。VirtualWalletService 类中的 transfer() 转账函数会涉及两个钱包的操作，因此这部分业务逻辑无法放到 VirtualWallet 类中，所以，我们暂且把转账业务放到 VirtualWalletService 类中了。当然，随着功能演进，我们也可以将转账业务抽取出来，设计成一个独立的领域模型。

- Service 类负责一些非功能性及与三方系统交互的工作。比如发消息、记录日志、调用其他系统的 RPC 接口等，都可以放到 Service 类中。

#### Controller 层和 Repository 需要变成充血模型吗

在基于充血模型的 DDD 开发模式中，尽管 Service 层被改造成了充血模型，但是 Controller 层和 Repository 层还是贫血模型，是否有必要也进行充血领域建模呢？

答案是没有必要。Controller 层主要负责接口的暴露，Repository 层主要负责与数据库打交道，这两层包含的业务逻辑并不多。业务逻辑比较简单，就没有做充血模型。即便做了，也很担保单薄，看起来也很奇怪。

## 如何对接口鉴权这样一个功能开发做面向对象分析

面向对象分析（OOA）、面向对象设计（OOD）、面向对象（OOA）是面向对象开发的三个环节。接下来结合实际案例，从基础的需求分析、职责划分、类的定义、交互、组装运行讲起，理解这三个过程。

### 案例介绍和难点剖析

假设，你正在参与开发一个微服务，微服务通过 HTTP 协议暴露接口给其他系统调用。有天你 leader 找你说：为了保证接口调用的安全性，我们希望设计实现一个接口调用鉴权功能，只有经过认证之后的系统才能调用我们的接口，没有认证过的系统调用我们的接口会被拒绝。让你负责开发。

这个时候你可能无从下手，主要原因有两点

- 需求不明确

leader 给到的需求过于模糊、笼统，不够具体、细化，**离落地到设计、编码还有一定的距离**。所以我们需要**做需求分析**，通过沟通、挖掘、分析、假设、梳理、搞清楚具体需求是哪些，哪些需要做。

- 缺少锻炼

相比单纯的业务 CRUD 开发，鉴权这个开发任务，要更有难度。鉴权模块是业务无关的，我们完全可以把它开发成一个独立的框架，集成到很多系统中。而通用的模块对工程师的分析能力、设计能力、设计能力要求都比较高，和平常的 CRUD 差异很大。

### 对案例进行需求分析

实际上，这跟做算法题类似，先从最简单的方案想起，然后再优化。把整个过程分为循序渐进的四轮。

#### 第一轮基础分析

对于如何做鉴权这样一个问题，最简单的解决方案就是，**通过用户名加密码来做认证**。我们给每个允许访问我们服务的调用方，派发一个应用名（或者叫应用 ID、AppID）和一个对应的密码（或者叫秘钥）。调用方每次调用都带上自己的 AppID 和密码，微服务接受到请求之后判断是否有效。

#### 第一轮分析优化

不过，这样的验证方式，每次都要明文传输密码。密码很容易被截获，是不安全的。

我们借助加密算法（比如 SHA），对密码进行加密之后，再传递到微服务端验证，是不是就可以了呢？实际上，这样也是不安全的，因为加密之后的密码及 AppID，照样可以被未认证系统（或者说黑客）截获，未认证系统可以携带这个加密之后的密码以及对应的 AppID，伪装成已认证系统来访问我们的接口。

**提出问题，然后再解决问题，是一个非常好的迭代优化方法。**

对于刚刚这个问题，我们可以借助 OAuth 的验证思路来解决。调用方将请求接口的 URL 跟 AppID、密码拼接在一起，然后进行加密，**生成一个 token**。

调用方在进行接口请求的的时候，将这个 token 及 AppID，随 URL 一块传递给微服务端。微服务端接收到这些数据之后，根据 AppID 从数据库中取出对应的密码，并通过同样的 token 生成算法，生成另外一个 token。用这个新生成的 token 跟调用方传递过来的 token 对比。如果一致，则允许接口调用请求；否则，就拒绝接口调用请求。

解决的问题：密码是加密的，不会被直接截获。但是 token 还是会被截获用于访问

#### 第三轮分析优化

不过，这样的设计仍然存在重放攻击的风险，还是不够安全。

为了解决这个问题，我们可以进一步优化 token 生成算法，**引入一个随机变量**，让每次接口请求生成的 token 都不一样。我们可以选择时间戳作为随机变量。原来的 token 是对 URL、AppID、密码三者进行加密生成的，现在我们将 URL、AppID、密码、时间戳四者进行加密来生成 token。调用方在进行接口请求的时候，将 token、AppID、时间戳，随 URL 一并传递给微服务端。

微服务端在收到这些数据之后，会验证当前时间戳跟传递过来的时间戳，是否在一定的时间窗口内（比如一分钟）。如果超过一分钟，则判定 token 过期，拒绝接口请求。如果没有超过一分钟，则说明 token 没有过期，就再通过同样的 token 生成算法，在服务端生成新的 token，与调用方传递过来的 token 比对，看是否一致。

解决的问题：引入随机变量，可以验证 token 的有效期。但是在有效期内，但是 token 还是会被截获用于访问

#### 第四轮分析优化

你可能会说，这样还是不够安全啊。未认证系统还是可以在这一分钟的 token 失效窗口内，通过截获请求、重放请求，来调用我们的接口！

你说得没错。不过，攻与防之间，本来就没有绝对的安全。我们能做的就是，尽量提高攻击的成本。这个方案虽然还有漏洞，但是实现起来足够简单，而且不会过度影响接口本身的性能（比如响应时间）。所以，权衡安全性、开发成本、对系统性能的影响，这个方案算是比较折中、比较合理的了。

### 最终确定需求

- 调用方进行接口请求的时候，将 URL、AppID、密码、时间戳拼接在一起，通过加密算法生成 token，并且将 token、AppID、时间戳拼接在 URL 中，一并发送到微服务端。
- 微服务端在接收到调用方的接口请求之后，从请求中拆解出 token、AppID、时间戳。
- 微服务端首先检查传递过来的时间戳跟当前时间，是否在 token 失效时间窗口内。如果已经超过失效时间，那就算接口调用鉴权失败，拒绝接口调用请求。
- 如果 token 验证没有过期失效，微服务端再从自己的存储中，取出 AppID 对应的密码，通过同样的 token 生成算法，生成另外一个 token，与调用方传递过来的 token 进行匹配；如果一致，则鉴权成功，允许接口调用，否则就拒绝接口调用。

**从最粗糙、最模糊的需求开始，通过“提出问题 - 解决问题”的方式，最后得到具体的需求。整个过程实际就是明确解决的问题是什么，这种问题的最佳实践方案是什么。**

## 如何利用面向对象设计和编程开发接口鉴权功能

todo

