import{_ as s,o as a,c as n,a as p,b as l,d as e,e as r,r as i}from"./app.236119f4.js";const A=JSON.parse('{"title":"BF 算法和 RK 算法","description":"","frontmatter":{},"headers":[{"level":2,"title":"BF 算法","slug":"bf-算法","link":"#bf-算法","children":[{"level":3,"title":"BF 算法的思路","slug":"bf-算法的思路","link":"#bf-算法的思路","children":[]},{"level":3,"title":"BF 算法复杂度分析","slug":"bf-算法复杂度分析","link":"#bf-算法复杂度分析","children":[]}]},{"level":2,"title":"RK 算法","slug":"rk-算法","link":"#rk-算法","children":[{"level":3,"title":"RK 算法的思路","slug":"rk-算法的思路","link":"#rk-算法的思路","children":[]},{"level":3,"title":"RK 算法复杂度分析","slug":"rk-算法复杂度分析","link":"#rk-算法复杂度分析","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"algo/string-matching/BF-RK.md"}'),t={name:"algo/string-matching/BF-RK.md"},o=l("h1",{id:"bf-算法和-rk-算法",tabindex:"-1"},[e("BF 算法和 RK 算法 "),l("a",{class:"header-anchor",href:"#bf-算法和-rk-算法","aria-hidden":"true"},"#")],-1),c=r('<p>字符串匹配这样一个功能，很多编程语言已经提供了字符串查找的函数，比如 JavaScript 的 <code>indexOf()</code>，底层就是依赖于字符串算法。</p><p>字符串匹配算法有很多：</p><ul><li>单模式串匹配的算法，也就是一个串跟一个串进行匹配：<strong>BF 算法</strong>和 <strong>RK 算法</strong>，还有更加高效的 <strong>BM 算法</strong>和 <strong>KMP 算法</strong>。</li><li>多模式串匹配算法，也就是在一个串中同时查找多个串：<strong>Tire 树</strong>和 <strong>AC 自动机</strong>。</li></ul><h2 id="bf-算法" tabindex="-1">BF 算法 <a class="header-anchor" href="#bf-算法" aria-hidden="true">#</a></h2><p>BK（Brute Force）算法，中文叫作暴力匹配算法，也叫朴素匹配算法。从名字可以看出，这种算法的字符串匹配方式很“暴力”，当然也会比较简单、好懂，但是性能不高。</p><p>先定义两个概念：<strong>主串</strong>和<strong>模式串</strong>。</p><p>举个例子，在字符串 A 中查找字符串 B，那字符串 A 就是主串，字符串 B 就是模式串。我们把主串的长度记作 n，模式串的长度记作 m。因为是在主串中查找模式串，所以 n&gt;m。</p><h3 id="bf-算法的思路" tabindex="-1">BF 算法的思路 <a class="header-anchor" href="#bf-算法的思路" aria-hidden="true">#</a></h3><p><strong>在主串中，检查起始位置分别是 0、1、2…n-m 且长度为 m 的 n-m+1 个子串，看有没有跟模式串匹配的。</strong></p><p>通过一个例子来理解：</p><p><img src="/reading-notes/assets/algorithm-stringMatching-BF.b59f6048.png" alt="BF"></p><h3 id="bf-算法复杂度分析" tabindex="-1">BF 算法复杂度分析 <a class="header-anchor" href="#bf-算法复杂度分析" aria-hidden="true">#</a></h3><p>通过上面的算法思路和例子，可以看出，在极端情况下，比如主串是“aaaaa…aaaaaa”（省略号表示有很多重复的字符 a），模式串是“aaaaab”。那么每次都比对 m 个字符，要比对 n-m+1 次，所以，这种算法的最坏情况时间复杂度是 <strong>O(n*m)</strong>。</p><p>尽管理论上，BF 算法的时间复杂度很高，是 O(n*m)，但在实际的开发中，它却是一个比较常用的字符串匹配算法。为什么这么说呢？原因有两点：</p><ol><li>实际的软件开发中，大部分情况下，模式串和主串的长度<strong>都不会太长</strong>。而且每次模式串与主串中的子串匹配的时候，当中途遇到不能匹配的字符的时候，就可以就停止了，不需要把 m 个字符都比对一下。所以，尽管理论上的最坏情况时间复杂度是 O(n*m)，但是，统计意义上，大部分情况下，算法执行效率要比这个高很多。</li><li>朴素字符串匹配算法思想简单，代码实现也非常简单。简单意味着不容易出错，如果有 bug 也容易暴露和修复。在工程中，在满足性能要求的前提下，简单是首选。</li></ol><h2 id="rk-算法" tabindex="-1">RK 算法 <a class="header-anchor" href="#rk-算法" aria-hidden="true">#</a></h2><p>RK（Rabin-Karp）算法，是由它的两位发明者 Rabin 和 Karp 的名字来命名，它是 BF 算法的升级版。</p><p>BF 算法中，只需要暴力的对比 n-m+1 个子串与模式串，就可以找出主串与模式串匹配的子串。但是在检查主串与子串是否匹配，<strong>需要依次对比每个字符</strong>，所以 BF 算法的复杂度较高，为 O(n*m)。</p><p>通过引入哈希算法，时间复杂度就会立刻降低。</p><h3 id="rk-算法的思路" tabindex="-1">RK 算法的思路 <a class="header-anchor" href="#rk-算法的思路" aria-hidden="true">#</a></h3><p><strong>通过哈希算法对主串中的 n-m+1 个子串分别求哈希值，然后逐个与模式串的哈希值比较大小。如果某个子串的哈希值与模式串相等，那就说明对应的子串和模式串匹配了</strong>（这里先不考虑哈希冲突的问题）。</p><p>因为哈希值是一个数字，数字之间比较是否相等是非常快速的，所以模式串和子串比较的效率就提高了。</p><p><img src="/reading-notes/assets/algorithm-stringMatching-RK1.aa0bdebb.png" alt="RK"></p><p>通过哈希算法求哈希值的时候，需要遍历子串中的每个字符。尽管模式串和子串的对比效率高了，但是算法的整体效率并没有提高。</p><p><strong>如何提高哈希算法计算子串哈希值的效率呢？</strong></p><p>这就需要哈希算法设计得很巧妙了：</p><p><strong>假设字符串的字符集只有 K 个字符，就可以用 K 进制来表示一个子串，然后把这个 K 进制数转为十进制，作为子串的哈希值</strong>。</p><p>举个例子：</p><p>假设要处理的字符值包含 a~z 这个 26 个字符，那么就可以用二十六进制来表示一个字符串，a 表示 0，b 就是 1，...。然后把它转成十进制就可以得到它哈希值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 十进制</span></span>\n<span class="line"><span style="color:#A6ACCD;">657 = 6 * 10^2 + 5 * 10^1 + 7 * 10^0</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">// 二十六进制转为十进制</span></span>\n<span class="line"><span style="color:#A6ACCD;">cba = c * 26^2 + b * 26^1 + a * 10^0</span></span>\n<span class="line"><span style="color:#A6ACCD;">    = 2 * 26^2 + 1 * 26^1 + 0 * 10^0</span></span>\n<span class="line"><span style="color:#A6ACCD;">    = 1378</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>通过这种方式，计算一下子串的哈希值：</p><p><img src="/reading-notes/assets/algorithm-stringMatching-RK2.81c3f317.png" alt="RK"></p><p>可以看出，相邻的 2 个子串 s[i-1] 和 s[i]（i 表示子串在主串中的起始位置，子串的长度都为 m）的计算公式有一定的关系，它们之间字符串是有交集的，也就是说可以使用 s[i-1] 的哈希值跟快的计算出 s[i] 的哈希值。用公式表示就是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">h[i-1] 表示子串 s[i-1, i+m-2] 的哈希值，h[i] 表示子串 s[i, i+m-1] 的哈希值</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">h[i-1] = 26^m-1 * s[i-1] + 26^m-2 * s[i] + ... + 26^0 * s[i+m-2]</span></span>\n<span class="line"><span style="color:#A6ACCD;">h[i] =                     26^m-1 * s[i] + ... + 26^1 * s[i+m-2] + 26^0 * s[i+m-1]</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span>\n<span class="line"><span style="color:#A6ACCD;">可以得出</span></span>\n<span class="line"><span style="color:#A6ACCD;">h[i] = (h[i-1] - 26^m-1 * s[i-1]) * 26 + 26^0 * s[i+m-1]</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>另外，为了再提高效率，26^(m-1) 的这部分计算还可以通过查表的方式来处理。事先计算好 26^0，26^1，...，26^(m-1) 的值存到长度为 m 的数组里，公式中的“次方”对应数组的下标。当计算 x 次方时，直接从数组下标为 x 的位置取值，省去计算时间。</p><p><img src="data:image/png;base64,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" alt="RK"></p><h3 id="rk-算法复杂度分析" tabindex="-1">RK 算法复杂度分析 <a class="header-anchor" href="#rk-算法复杂度分析" aria-hidden="true">#</a></h3><p>RK 算法的整个过程主要分两部分：计算所有子串的哈希值，还有模式串的哈希值和子串哈希值之间的比较。</p><p>计算子串的哈希值，只要遍历一遍主串就可以了，所以这部分时间复杂度是 O(n)。</p><p>模式串哈希值和子串哈希值之间的比较时间复杂是 O(1)，总共比较 n-m+1 个子串，所以这部分的时间复杂度是 O(n)。</p><p>所以整个 RK 算法的时间复杂度是 O(n)。</p><p>RK 算法还存在一些需要注意的问题：</p><ol><li>如果模式串很长，那么上面这种方式计算的哈希值可能很大，可能会超过计算机整型数据可以表示的范围，怎么处理？</li></ol><p>刚才设计得哈希算法是没有散列冲突的，也就是不同字符串的哈希值肯定是不一样的。那么，为了将哈希值落在整型数据的范围内，<strong>可以牺牲一下，允许哈希冲突</strong>。</p><p>这个时候有怎么设计哈希算法呢？</p><p>设计方法有很多，举个例子，还是假设字符串只包含 a~z，这是把每个字母对应一个数字，比如 a 对应 1，b 对应 2，...，z 对应 26。计算哈希值的时候，把字符串中每个字母对应的数字相加，得到的结果就是哈希值。这样哈希值的数值范围就会小很多。</p><p>当然，这种方式的散列冲突概率就比较高了，可以再优化一下，每个字母分别对应的是一个素数，而不是 1，2，3 ... 这样的自然数，这样冲突的概率就会小一些。</p><ol start="2"><li>前面比较的时候，如果子串的哈希值和模式串的哈希值相等，那么子串就一定匹配模式串。但是现在存在散列冲突的话，它们哈希值相等，但是并不一定匹配。怎么处理呢？</li></ol><p>解决的方法很简单，先比较哈希值，如果哈希值相等了，只需要再对比一下子串和模式串本身就好了；如果哈希值不想等，那么子串和模式串肯定就不匹配了。</p><p>所以，哈希算法的散列冲突需要控制相对低一些，存在大量散列冲突的话，RK 算法的时间复杂度就退化了。极端情况下，存在大量的散列冲突，每次都还需要对比子串和模式串本身，那么时间复杂度就是 O(n*m)。但是一般情况下，不会出现太多的散列冲突的，RK 算法的效率还是比 BF 算法高的。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>BF 算法是最简单、粗暴的字符串匹配算法，就是拿模式串与主串的所有子串对比，看看有没有匹配的子串。所以，时间复杂度也比较高，是 O(n*m)，n、m 分别是主串和模式串的长度。不过在实际的开发中，因为这种算法比较简单，对于处理小规模的字符串很好用。</p><p>RK 算法是借助哈希算法对 BF 进行改造，即对每个子串求哈希值，然后将子串的哈希值和模式串的哈希值进行比较，减少了比较的时间。所以理想情况下，RK 算法的时间复杂度是 O(n)。但是这取决于哈希算法的设计，如果存在散列冲突，那么时间复杂度就会退化。极端情况下，哈希算法大量冲突，那么时间复杂度就退化为 O(n*m)。</p>',53);const g=s(t,[["render",function(s,l,e,r,A,t){const g=i("VueJobs");return a(),n("div",null,[o,p(g),c])}]]);export{A as __pageData,g as default};