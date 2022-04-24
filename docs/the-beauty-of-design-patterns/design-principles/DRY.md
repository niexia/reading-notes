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

## 代码执行重复
