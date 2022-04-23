# KISS

KISS 原则比较经典，耳熟能详。一眼就感觉懂了，但深究的话，又有很多细节问题不是很清楚。

怎么理解 KISS 原则中“简单”两个字？什么样的代码才算“简单”？怎样的代码才算“复杂”？如何才能写出“简单”的代码？

## 如何理解“KISS 原则”

KISS 原则的英文描述有好几个版本：

- Keep It Simple and Stupid.
- Keep It Short and Simple.
- eep It Simple and Straightforward.

它们要表达的意思其实差不多，翻译成中文就是：**尽量保持简单**。

KISS 原则算是一个万金油类型的设计原则，可以应用在很多场景中。它不仅经常用来指导软件开发，还经常用来指导更加广泛的系统设计、产品设计等，比如，冰箱、建筑、iPhone 手机的设计等等。

代码的可读性和可维护性是衡量代码质量非常重要的两个标准。**而 KISS 原则就是保持代码可读和可维护的重要手段**。代码足够简单，也就意味着很容易读懂，bug 比较难隐藏。即便出现 bug，修复起来也比较简单。

这条原则说保持代码“Simple and Stupid”，但并没有讲到，什么样的代码才是“Simple and Stupid”的，更没有给出特别明确的方法论，来指导如何开发出“Simple and Stupid”的代码

接下来，为了能让这条原则切实地落地，我们通过具体例子来理解

### 代码行数越少就越“简单”吗

看个例子，下面这三段代码可以实现同样一个功能：检查输入的字符串 ipAddress 是否是合法的 IP 地址。

```ts

// 第一种实现方式: 使用正则表达式
function isValidIpAddressV1(ipAddress: string): boolean {
  if (StringUtils.isBlank(ipAddress)) return false;
  const regex = "^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\."
          + "(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$";
  return ipAddress.matches(regex);
}

// 第二种实现方式: 使用现成的工具类
function isValidIpAddressV2(ipAddress: string): boolean {
  if (StringUtils.isBlank(ipAddress)) return false;
  const ipUnits = StringUtils.split(ipAddress, '.');
  if (ipUnits.length != 4) {
    return false;
  }
  for (let i = 0; i < 4; ++i) {
    let ipUnitIntValue;
    try {
      ipUnitIntValue = Number.parseInt(ipUnits[i]);
    } catch (e) {
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

// 第三种实现方式: 不使用任何工具类
function isValidIpAddressV2(ipAddress: string): boolean {
  const ipChars = ipAddress.split('');
  const length = ipChars.length;
  let ipUnitIntValue = -1;
  let isFirstUnit = true;
  let unitsCount = 0;
  for (int i = 0; i < length; ++i) {
    const c = ipChars[i];
    if (c == '.') {
      if (ipUnitIntValue < 0 || ipUnitIntValue > 255) return false;
      if (isFirstUnit && ipUnitIntValue == 0) return false;
      if (isFirstUnit) isFirstUnit = false;
      ipUnitIntValue = -1;
      unitsCount++;
      continue;
    }
    if (c < '0' || c > '9') {
      return false;
    }
    if (ipUnitIntValue == -1) ipUnitIntValue = 0;
    ipUnitIntValue = ipUnitIntValue * 10 + (c - '0');
  }
  if (ipUnitIntValue < 0 || ipUnitIntValue > 255) return false;
  if (unitsCount != 3) return false;
  return true;
}
```

哪种方法最符合 KISS 原则？

方式 | 特点 | 是否符合 KISS | 原因
---------|---------|----------|---------
 方式一 | 利用的是正则表达式，只用三行代码就把这个问题搞定了。它的代码行数最少 | 否 | 虽然代码行数最少，看似最简单，实际上却很复杂。一方面，正则表达式本身是比较复杂的，写出完全没有 bug 的正则表达本身就比较有挑战；另一方面，并不是每个程序员都精通正则表达式。看懂并且维护这段正则表达式是比较困难的。代码的可读性和可维护性都差，不符合 KISS 初衷。
 方式二 | 使用了 StringUtils 类、Integer 类提供的一些现成的工具函数，来处理 IP 地址字符串 | 是 | 从可读性上来说，这种实现方式的代码逻辑更清晰、更好理解
 方式三 | 不使用任何工具函数，而是通过逐一处理 IP 地址中的字符，来判断是否合法 | 否 | 从代码行数上来说，和方式二差不多。但是，第三种要比第二种更加有难度，更容易写出 bug

不过，你可能会说，第三种实现方式虽然实现起来稍微有点复杂，但性能要比第二种实现方式高一些啊！

确实。一般来说，工具类的功能都比较通用和全面，所以，在代码实现上，需要考虑和处理更多的细节，执行效率就会有所影响。而第三种实现方式，完全是自己操作底层字符，没有多余的函数调用和不必要逻辑，所以，在执行效率上，这种类似定制化的处理代码方式肯定比通用的工具类要高些。

不过，尽管第三种方式性能更高些，还是更倾向于选择第二种实现方法。因为第三种实现方式实际上**是一种过度优化**。除非 isValidIpAddress() 函数是影响系统性能的瓶颈代码，否则，**这样优化的投入产出比并不高，增加了代码实现的难度、牺牲了代码的可读性，性能上的提升却并不明显**。

### 代码逻辑复杂就违背 KISS 原则吗

通过前面我们知道并不是代码行数越少就越“简单”，还要考虑逻辑复杂度、实现难度、代码的可读性等。那反过来，那如果一段代码的逻辑复杂、实现难度大、可读性也不太好，是不是就一定违背 KISS 原则呢？

例如，KMP 算法

```js
function generateNextArr(pattern) {
  var i = 0;
  var j = -1;
  var next = []
  next[0] = -1
  while (i < pattern.length) {
    if (j === -1 || pattern[i] === pattern[j]) {
      i++;
      j++;
      next[i] = j
    } else {
      j = next[j]
    }
  }
  return next;
}

function kmp(str, pattern) {
  var next = generateNextArr(pattern)
  var i = 0; // str 指针
  var j = 0; // pattern指针
  while (i < str.length && j < pattern.length) {
    if (str[i] === pattern[j] || j === -1) {
      i++;
      j++;
    } else {
      j = next[j] // 右移
    }
  }
  if (j === pattern.length) {
    return i - j
  } else {
    return -1
  }
}
```


段代码完全符合我们刚提到的逻辑复杂、实现难度大、可读性差的特点，但它并不违反 KISS 原则。**本身就复杂的问题，用复杂的方法解决，并不违背 KISS 原则**。

不过，平时的项目开发中涉及的字符串匹配问题，大部分都是针对比较小的文本。在这种情况下，直接调用编程语言提供的现成的字符串匹配函数就足够了。如果非得用 KMP 算法、BM 算法来实现字符串匹配，那就真的违背 KISS 原则了。

### 如何写出满足 KISS 原则的代码

结合前面的例子，总结一下：

- **不要使用同事可能不懂的技术来实现代码**。比如前面例子中的正则表达式，还有一些编程语言中过于高级的语法等。
- **不要重复造轮子，要善于使用已经有的工具类库**。经验证明，自己去实现这些类库，出 bug 的概率会更高，维护的成本也比较高。
- **不要过度优化**。不要过度使用一些奇技淫巧（比如，位运算代替算术运算、复杂的条件语句代替 if-else、使用一些过于底层的函数等）来优化代码，牺牲代码的可读性。

代码是否足够简单是一个挺主观的评判，评判代码是否简单，有一个很有效的间接方法，那就是 **code review**。如果在 code review 的时候，**同事对你的代码有很多疑问，那就说明你的代码有可能不够“简单”**，需要优化啦。

在做开发的时候，一定不要过度设计，不要觉得简单的东西就没有技术含量。实际上，**越是能用简单的方法解决复杂的问题，越能体现一个人的能力**。
