import{_ as s,o as a,c as n,a as l,b as p,d as e,e as o,r}from"./app.236119f4.js";const t=JSON.parse('{"title":"数组","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是数组","slug":"什么是数组","link":"#什么是数组","children":[]},{"level":2,"title":"随机访问","slug":"随机访问","link":"#随机访问","children":[]},{"level":2,"title":"低效的插入和删除","slug":"低效的插入和删除","link":"#低效的插入和删除","children":[{"level":3,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"数组长度和内存大小","slug":"数组长度和内存大小","link":"#数组长度和内存大小","children":[]},{"level":2,"title":"复杂度","slug":"复杂度","link":"#复杂度","children":[]}],"relativePath":"algo/array/array.md"}'),c={name:"algo/array/array.md"},i=p("h1",{id:"数组",tabindex:"-1"},[e("数组 "),p("a",{class:"header-anchor",href:"#数组","aria-hidden":"true"},"#")],-1),y=o('<h2 id="什么是数组" tabindex="-1">什么是数组 <a class="header-anchor" href="#什么是数组" aria-hidden="true">#</a></h2><p>基本每种编程语言都有数组这种数据结构。</p><blockquote><p>数组是一种线性表结构，在内存里，是一组连续的内存空间，用来存储一组类型相同的数据。</p></blockquote><p>在定义里，有几个关键词：</p><ul><li>线性表：</li></ul><p>顾名思义，线性表就是数据排成像一条线一样的结构。每个线性表上的数据最多只有前和后两个方向。其实除了数组，链表、队列、栈等也是线性表结构。</p><p>而与它相对立的概念是非线性表，比如二叉树、堆、图等。之所以叫非线性，是因为，在非线性表中，数据之间并不是简单的前后关系。</p><ul><li>连续的内存空间和类型相同的数据</li></ul><p>有了这两个限制，数组有一个超级特性：随机访问。但是有利也有弊，这两个限制，也让数组的很多操作变得非常低效，比如，插入和删除的时候，为了保持连续性，就需要大量的数据搬移。</p><h2 id="随机访问" tabindex="-1">随机访问 <a class="header-anchor" href="#随机访问" aria-hidden="true">#</a></h2><p>数组是一组连续的内存空间，并存储类型相同的数据。所以只要知道被分配的内存的首地址，就可以通过地址偏移随机访问数组的元素，这就是数组杀手锏的特性<strong>随机访问</strong>。</p><p>那数组是怎么做到随机访问的？</p><p>以一个长度为 10 的 int 类型数组为例 <code>int[] a = new int[10]</code>，计算机给数组 <code>a[10]</code> 分配了一块连续的内存空间 1000 ~ 10039，其中首地址为 base_address = 1000。</p><p>我们知道计算机会给每个内存分配一个地址，通过地址来访问内存中的数据。当计算机要随机访问数组中的某个元素时，它会首先通过下面的寻址公式，计算出该元素的内存地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">a[i]_address = base_address + i * data_type_size</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中 data_type_size 表示数组中每个元素的大小。数组中存储的是 int 类型数据，所以 data_type_size 就为 4 个字节。</p><p>这就实现了随机访问，时间复杂度为 O(1)。</p><p>但是，这并不是说数组查找的时间复杂是 O(1)，即使排好序的数组，使用二分查找，时间复杂度也是 O(logn)。</p><h2 id="低效的插入和删除" tabindex="-1">低效的插入和删除 <a class="header-anchor" href="#低效的插入和删除" aria-hidden="true">#</a></h2><p>由于数组的内存是连续的，为了保证连续性，插入和删除这两个操作都比较低效。</p><h3 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-hidden="true">#</a></h3><p>假设，数组的长度为 n，现在将一个数据插入到第 k 个位置，为了把第 k 个位置腾出来给新的数据，那就需要将第 k ~ n 的这部分数据都顺序的往后挪一位。那时间时间复杂度是多少呢？</p><p>如果在数组的尾部插入元素，那么不需要移动数据了，这个时候的时间复杂是 O(1)；如果是在开头插入元素，那么需要把所有的数据依次的往后移一位，所以最坏的时间复杂度是 O(n)；因为每个位置插入元素的概率是一样的，所以平均时间复杂度就是 (1+2+...+n)/n = <strong>O(n)</strong>。</p><p>如果数组是有序的，那么插入新元素的时候，就必须按照上面的方式移动 k 之后的数据。</p><p>但是，如果数组中的数据没有任何规律，数组只是当作一个存储数据的集合。这种情况下，要将某个数据插入到第 k 个位置，为了避免大规模的数据搬移，一个简单的方法就是，直接将第 k 位数据搬移到数组元素的最后，把新元素直接放入到第 k 个位置。</p><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-hidden="true">#</a></h3><p>和插入类似，如果要删除第 k 个位置的数据，为了内存的连续性，也需要搬移数据，不然中间就会出现空洞，内存就不连续了。</p><p>如果删除的是数组尾部的数据，那最好时间复杂度是 O(1)；如果删除的是开头位置，则最坏情况时间复杂是 O(n)；平均情况时间复杂度是 <strong>O(n)</strong>。</p><p>在某些场景下，并不一定要最求数组中数据的连续性，那么我们将多次删除的操作集中在一次执行，就可以提高删除效率了。</p><p>例如，有一个数组 <code>a[10]</code>，依次删除前 3 个元素。为了避免后面的元素被搬移 3 次，每次删除的时候，不进行真正的数据搬移，只是记录数据已经被删除。当数组没有更多空间的时候，这触发一次真正的删除操作，这样就大大减少了删除操作导致的数据搬移。</p><p>这也是<strong>标记清除</strong>垃圾回收算法的核心思想。</p><h2 id="数组长度和内存大小" tabindex="-1">数组长度和内存大小 <a class="header-anchor" href="#数组长度和内存大小" aria-hidden="true">#</a></h2><p>在平常的代码中，很多时候，定义一个数组时我们没有指定长度，会给我们分配多少的内存空间呢？以及内存不够的时候如何处理呢？</p><p>参考这篇博客<a href="https://www.yinchengli.com/2017/04/16/chrome-js-array/" target="_blank" rel="noreferrer">从Chrome源码看JS Array的实现</a>，浏览器给我们的初始内存空间为 4，当往第存储第 5 个值的时候，将进行<strong>自动扩容</strong>。</p><p>new_capacity = old_capacity /2 + old_capacity + 16</p><p>申请一块更大的内存，把老的数据拷贝过去，然后再将新的数据插入。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>不过值得注意的是，扩容操作涉及内存的申请和数据搬移，是比较耗时的。所以如果事先知道要存储的数据大小，最好在<strong>创建数组的时候指定数据大小</strong>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="复杂度" tabindex="-1">复杂度 <a class="header-anchor" href="#复杂度" aria-hidden="true">#</a></h2><ul><li>读取：O(1)</li><li>插入：最好时间复杂度为 O(1)，最坏时间复杂度为 O(n)，平均时间复杂度为 O(n)</li><li>删除：最好时间复杂度为 O(1)，最坏时间复杂度为 O(n)，平均时间复杂度为 O(n)</li></ul>',41);const d=s(c,[["render",function(s,p,e,o,t,c){const d=r("VueJobs");return a(),n("div",null,[i,l(d),y])}]]);export{t as __pageData,d as default};