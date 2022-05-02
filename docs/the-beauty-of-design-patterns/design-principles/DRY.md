# DRY原则
它的英文描述为：Don’t Repeat Yourself。中文直译为：不要重复自己。将它应用在编程中，可以理解为：不要写重复的代码。

只要两段代码长得一样，那就是违反 DRY 原则了。真的是这样吗？

实际上，重复的代码不一定违反 DRY 原则，而且有些看似不重复的代码也有可能违反 DRY 原则。另外，DRY 原则与代码的复用性也有一些联系。

## 如何理解 DRY 原则（Don’t Repeat Yourself）

定义很简单，不做太多解读。主要看三种典型的代码重复情况，它们分别是：
- 实现逻辑重复
- 功能语义重复
- 代码执行重复。

这三种代码重复，有的看似违反 DRY，实际上并不违反；有的看似不违反，实际上却违反了。

## 实现逻辑重复

先看下面这段代码，是否违反了 DRY 原则。

```ts

class UserAuthenticator {
  authenticate(username: string, password: string) {
    if (!isValidUsername(username)) {
      // ...throw InvalidUsernameException...
    }
    if (!isValidPassword(password)) {
      // ...throw InvalidPasswordException...
    }
    //...省略其他代码...
  }

  isValidUsername(username: string) {
    // check not null, not empty
    if (StringUtils.isBlank(username)) {
      return false;
    }
    // check length: 4~64
    int length = username.length();
    if (length < 4 || length > 64) {
      return false;
    }
    // contains only lowcase characters
    if (!StringUtils.isAllLowerCase(username)) {
      return false;
    }
    // contains only a~z,0~9,dot
    for (int i = 0; i < length; ++i) {
      char c = username.charAt(i);
      if (!(c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '.') {
        return false;
      }
    }
    return true;
  }

  isValidPassword(password: string) {
    // check not null, not empty
    if (StringUtils.isBlank(password)) {
      return false;
    }
    // check length: 4~64
    int length = password.length();
    if (length < 4 || length > 64) {
      return false;
    }
    // contains only lowcase characters
    if (!StringUtils.isAllLowerCase(password)) {
      return false;
    }
    // contains only a~z,0~9,dot
    for (int i = 0; i < length; ++i) {
      char c = password.charAt(i);
      if (!(c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || c == '.') {
        return false;
      }
    }
    return true;
  }
}
```

有两处非常明显的重复代码片段：isValidUsername 和 isValidPassword，看起来明显违反 DRY 原则。为了移除重复代码，我们对上面的方法进行重构：

```ts
class UserAuthenticator {
  authenticate(username: string, password: string) {
    if (!isValidUsernameOrPassword(username)) {
      // throw error...
    }
    if (!isValidUsernameOrPassword(password)) {
      // throw error...
    }
    // 省略其他代码...
  }

  isValidUsernameOrPassword(password: string) {
    // check not null, not empty
    // ...
  }
}
```

经过重构之后，代码行数减少了，也没有重复代码，**那是不是更好了**？

答案是否定的。合并之后的 isValidUserNameOrPassword() 函数，负责两件事情：验证用户名和验证密码，**违反了“单一职责原则”和“接口隔离原则”**。

实际上，即便将两个函数合并成 isValidUserNameOrPassword()，代码仍然存在问题。尽管现在的视线中，两个校验逻辑完全一样，但是按照这种写法，如果未来，我们修改密码的校验逻辑，那这个时候 isValidUsername 和 isValidPassword 的实现逻辑就会不同，这时候就要把合并的函数重新拆成两个。

所以，**尽管代码的实现逻辑是相同的，但语义不同，我们判定它并不违反 DRY 原则**。对于包含重复代码的问题，我们**可以通过抽象成更细粒度函数**的方式来解决。比如将校验只包含 a~z、0~9、dot 的逻辑封装成 boolean onlyContains(str, charlist); 函数。

## 功能语义重复

再来看另外一个例子，之所以在同一个项目中会有两个功能相同的函数，那是因为这两个函数是由两个不同的同事开发的，其中一个同事在不知道已经有了 isValidIp() 的情况下，自己又定义并实现了同样用来校验 IP 地址是否合法的 checkIfIpValid() 函数。

```ts

public boolean isValidIp(String ipAddress) {
  if (StringUtils.isBlank(ipAddress)) return false;
  String regex = "^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$";
  return ipAddress.matches(regex);
}

checkIfIpValid(ipAddress: String) {
  if (StringUtils.isBlank(ipAddress)) return false;
  String[] ipUnits = StringUtils.split(ipAddress, '.');
  if (ipUnits.length != 4) {
    return false;
  }
  for (int i = 0; i < 4; ++i) {
    int ipUnitIntValue;
    try {
      ipUnitIntValue = Integer.parseInt(ipUnits[i]);
    } catch (NumberFormatException e) {
      return false;
    }
    if (ipUnitIntValue < 0 || ipUnitIntValue > 255) {
      return false;
    }
    if (i == 0 && ipUnitIntValue == 0) {
      return false;
    }
  }
  return true;
}
```

而在这个例子中，尽管两段代码的实现逻辑不重复，但语义重复，也就是功能重复，**我们认为它违反了 DRY 原则**。

假设我们不统一，容易留坑

- 可读性差，这些代码看起来很奇怪：给不熟悉的同事增加阅读难度，为什么会定义两个功能类似的函数？
- 难维护：如果哪天 IP 地址的判断规则改了，相应的我们需要对函数实现进行修改，如果只改了其中一个，或者根本不知道有另外一个，就知道规则不一致出现 bug。

## 代码执行重复

```java

public class UserService {
  private UserRepo userRepo;//通过依赖注入或者IOC框架注入

  public User login(String email, String password) {
    boolean existed = userRepo.checkIfUserExisted(email, password);
    if (!existed) {
      // ... throw AuthenticationFailureException...
    }
    User user = userRepo.getUserByEmail(email);
    return user;
  }
}

public class UserRepo {
  public boolean checkIfUserExisted(String email, String password) {
    if (!EmailValidation.validate(email)) {
      // ... throw InvalidEmailException...
    }

    if (!PasswordValidation.validate(password)) {
      // ... throw InvalidPasswordException...
    }

    //...query db to check if email&password exists...
  }

  public User getUserByEmail(String email) {
    if (!EmailValidation.validate(email)) {
      // ... throw InvalidEmailException...
    }
    //...query db to get user by email...
  }
}
```

上面这段代码，没有逻辑重复、语义重复，但是仍然违背 DRY 原则。这是因为代码存在“执行重复”。

- 相同逻辑执行两次：在 login 函数中，email 的校验执行了两次，分别在 checkIfUserExisted 和 getUserByEmail 中。可以把这个逻辑统一放到 UserService 中。
- 执行了不必要的逻辑：实际上 login 函数并不需要调用 checkIfUserExisted 函数。调用 getUserByEmail 从数据库获取到用户的 email、password 信息，可以直接和用户输入的做对比，判断是否登录成功。这个优化是很有必要的，I/O 操作比较耗时，应当尽量减少这类 I/O 操作。

通过移除“重复执行”的代码，只校验一次 email 和 password，重构之后代码如下：

```ts

public class UserService {
  private UserRepo userRepo;//通过依赖注入或者IOC框架注入

  public User login(String email, String password) {
    if (!EmailValidation.validate(email)) {
      // ... throw InvalidEmailException...
    }
    if (!PasswordValidation.validate(password)) {
      // ... throw InvalidPasswordException...
    }
    User user = userRepo.getUserByEmail(email);
    if (user == null || !password.equals(user.getPassword()) {
      // ... throw AuthenticationFailureException...
    }
    return user;
  }
}

public class UserRepo {
  public boolean checkIfUserExisted(String email, String password) {
    //...query db to check if email&password exists
  }

  public User getUserByEmail(String email) {
    //...query db to get user by email...
  }
}
```

## 代码的复用性

**代码的复用性是评判代码质量的一个非常重要的标准**。

### 什么是代码的复用性

首先区分三个概念：代码复用性（Code Reusability）、代码复用（Code Reuse）和 DRY 原则。

- 代码复用：表示一种行为。我们在开发新功能的时候，尽量复用已经存在的代码。
- 代码可复用性：表示一段代码可被复用的特性或能力。我们在编写代码的时候，让代码尽量可复用。
- DRY 原则：是一条原则。不要写重复代码。

从定义上比较类似，但是差别蛮大的。

1. 首先“不重复”并不代表“可复用”

DRY 和可复用性讲的是两回事，一个项目可能没有重复代码，并不代表里面有可复用的代码。

2. 其次“复用”和“可复用性”的关注角度不同

“可复用性”是从代码的开发者的角度来讲的，“复用”是从代码的使用者的角度来讲的。

尽管它们从理解上有所区别，但是**目标是相似的，都是为了减少代码量，提高代码的可读性、可维护性**。除此之外，经过测试的老代码 bug 会比从零重新写少。

### 怎么提高代码复用性

前面已经介绍过很多提高代码可复用性的手段，这里集中总结一下，总共有 7 条。

- **减少代码耦合**

对于高度耦合的代码，当我们希望复用其中的一个功能，想把这个功能的代码抽取出来成为一个独立的模块、类或者函数的时候，往往会发现牵一发而动全身。移动一点代码，就要牵连到很多其他相关的代码。所以，高度耦合的代码会影响到代码的复用性，我们要尽量减少代码耦合。

- **满足单一职责原则**

如果职责不够单一，模块、类设计得大而全，那依赖它的代码或者它依赖的代码就会比较多，进而增加了代码的**耦合**。根据上一点，也就会影响到代码的复用性。相反，越细粒度的代码，代码的通用性会越好，越容易被复用。

- **模块化**

这里的“模块”，不单单指一组类构成的模块，还可以理解为单个类、函数。我**们要善于将功能独立的代码，封装成模块**。独立的模块就像一块一块的积木，更加容易复用，可以直接拿来搭建更加复杂的系统。

- **业务与非业务逻辑分离**

越是跟业务无关的代码越是容易复用，越是针对特定业务的代码越难复用。所以，为了复用跟业务无关的代码，我们将业务和非业务逻辑代码分离，抽取成一些通用的框架、类库、组件等。

- **通用代码下沉**

从分层的角度来看，**越底层的代码越通用、会被越多的模块调用，越应该设计得足够可复用**。一般情况下，在代码分层之后，为了避免交叉调用导致调用关系混乱，我们只允许上层代码调用下层代码及同层代码之间的调用，杜绝下层代码调用上层代码。所以，通用的代码我们尽量下沉到更下层。

- **继承、多态、抽象、封装**

利用继承，可以将公共的代码抽取到父类，子类复用父类的属性和方法。利用多态，我们可以动态地替换一段代码的部分逻辑，让这段代码可复用。除此之外，抽象和封装，从更加广义的层面、而非狭义的面向对象特性的层面来理解的话，越抽象、越不依赖具体的实现，越容易复用。代码封装成模块，隐藏可变的细节、暴露不变的接口，就越容易复用。

- **应用模板等设计模式**

一些设计模式，也能提高代码的复用性。比如，模板模式利用了多态来实现，可以灵活地替换其中的部分代码，整个流程模板代码可复用。

除了这些方法，重要的是我们要有复用意识。写代码大以后多思考，这个代码是否可以抽出来，作为一个独立的模块、类或函数供多处使用。

## 辩证思考和灵活应用

什么时候考虑复用性？是不是每个需求花时间去设计代码的复用性？

如果开发的时候，已经有需要复用的场景，那么根据需要去开发可复用的代码，这可能不难。但是如果没有复用的需求，我们只希望编写的代码具有可复用的特点，方便未来某个新功能也能用上。在这种没有具体的需求下，我们需要预测代码如何复用就比较有挑战了。

**除非有非常明确的复用需求，否则，为了暂时用不到的复用需求，花费太多的时间、精力，投入太多的开发成本，并不是一个值得推荐的做法。这也违反我们之前讲到的 YAGNI 原则。**

- 第一次编写代码的时候，我们不考虑复用性：如果当下没有复用的需求，而未来的复用需求也不是特别明确，并且开发可复用代码的成本比较高，那我们就不需要考虑代码的复用性
- 第二次遇到复用场景的时候，再进行重构使其复用：之后我们开发新的功能的时候，发现可以复用之前写的这段代码，那我们就重构这段代码，让其变得更加可复用
