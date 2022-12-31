import{_ as s,o as n,c as a,a as l,b as p,d as o,e,r}from"./app.236119f4.js";const t=JSON.parse('{"title":"Tire 树","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是 Tire 树","slug":"什么是-tire-树","link":"#什么是-tire-树","children":[]},{"level":2,"title":"实现 Tire 树","slug":"实现-tire-树","link":"#实现-tire-树","children":[{"level":3,"title":"Tire 树主要有两个操作","slug":"tire-树主要有两个操作","link":"#tire-树主要有两个操作","children":[]},{"level":3,"title":"经典的存储方式","slug":"经典的存储方式","link":"#经典的存储方式","children":[]},{"level":3,"title":"实现构造和查询","slug":"实现构造和查询","link":"#实现构造和查询","children":[]},{"level":3,"title":"Tire 树是否真的耗内存","slug":"tire-树是否真的耗内存","link":"#tire-树是否真的耗内存","children":[]}]},{"level":2,"title":"Tire 树与散列表、红黑树的比较","slug":"tire-树与散列表、红黑树的比较","link":"#tire-树与散列表、红黑树的比较","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"algo/Tire-tree/Tire-tree.md"}'),c={name:"algo/Tire-tree/Tire-tree.md"},F=p("h1",{id:"tire-树",tabindex:"-1"},[o("Tire 树 "),p("a",{class:"header-anchor",href:"#tire-树","aria-hidden":"true"},"#")],-1),y=e('<p>为了方便输入，当你在搜索引擎的搜索框中，输入要搜索的文字的某一部分，搜索引擎就会自动弹出下拉框，里面是各种关键词提示。然后可以直接选择，而不必输入所有内容。</p><p><img src="/reading-notes/assets/dataStructure-tire-eg1.ca65fcc0.png" alt="search completion"></p><p>它是怎么实现的呢？底层使用的是那种数据结构和算法呢？</p><p>这些搜索引擎的关键词提示功能肯定做了很多优化，但是底层最基本的就是 Tire 树这种数据结构。</p><h2 id="什么是-tire-树" tabindex="-1">什么是 Tire 树 <a class="header-anchor" href="#什么是-tire-树" aria-hidden="true">#</a></h2><p>Tire 树，也叫字典树。顾名思义，它是一种树形结构。这种数据结构专门处理字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。</p><p><strong>Tire 树的本质，就是利用字符串之间的公共前缀，将重复的前缀组合在一起</strong>。</p><p>举个例子，现在有 6 个字符串：how，hi，her，hello，so，see。我们希望在里面多次查找某个字符串是否存在。如果每次查找都是将要查找的字符串和这 6 个字符串匹配，那么效率就比较低了。有没有更高效的方法？</p><p>这时候，可以先对这 6 个字符串做一下预处理，组织成 Tire 树的结构。之后每次查找，都是在 Tire 中进行匹配查找：</p><p><img src="/reading-notes/assets/dataStructure-tire-eg2.2e7f9571.png" alt="tire"></p><p>Tire 的构造过程如下，每一步都相当于往 Tire 树中插入一个字符串，所有字符串都插入完成之后，Tire 树就构造好了。</p><p><img src="/reading-notes/assets/dataStructure-tire-eg3.567e73cc.png" alt="tire"></p><p>在 Tire 树中查找一个字符串的时候，比如查找“her”，先将它分割成单个字符串 h，e，r，然后从 Tire 树的根节点开始匹配。如果所示，绿色的路径就是在 Tire 树中的匹配路径。</p><p><img src="/reading-notes/assets/dataStructure-tire-eg4.961e6d37.png" alt="tire"></p><p>如果要查找 “he”，方法还是一样的，如图所示，绿色路径就是“he”的匹配路径。但是有点不同，<strong>路径的最后一个节点“e”并不是红色的</strong>，也就是说，“he”是某个字符串的前缀，它并不能完全匹配任何字符串。</p><p><img src="/reading-notes/assets/dataStructure-tire-eg5.96c0f80c.png" alt="tire"></p><h2 id="实现-tire-树" tabindex="-1">实现 Tire 树 <a class="header-anchor" href="#实现-tire-树" aria-hidden="true">#</a></h2><h3 id="tire-树主要有两个操作" tabindex="-1">Tire 树主要有两个操作 <a class="header-anchor" href="#tire-树主要有两个操作" aria-hidden="true">#</a></h3><ul><li>构造：将字符串集合构造成 Tire 树。这个过程拆开来看，就是将字符串插入 Tire 树的过程。</li><li>查询：在 Tire 树中查询一个字符串。</li></ul><p>从前面的图可以看出，Tire 树是一棵多叉树。在二叉树中，一个节点的左右子节点是通过两个指针来存储的，那在多叉树中，怎么存储一个节点的所有子节点的指针呢？</p><h3 id="经典的存储方式" tabindex="-1">经典的存储方式 <a class="header-anchor" href="#经典的存储方式" aria-hidden="true">#</a></h3><p>借助散列表的思想，<strong>通过一个下标与字符一一映射的数组，来存储子节点的指针</strong>。如下图：</p><p><img src="/reading-notes/assets/dataStructure-tire-eg6.e31de065.png" alt="tire"></p><p>假设我们的字符串只有 a~z 这 26 个小写字母。那么，在数组下标为 0 的位置存储指向子节点 a 的指针，下标为 1 的位置存储指向子节点 b 的指针，以此类推，下标为 25 的位置存储指向子节点 z 的指针。如果某个节点不存在，那么就在对应的下标位置存储 null。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TrieNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">26</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// 每个下标位置存储的是指向对应子节点的指针</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="实现构造和查询" tabindex="-1">实现构造和查询 <a class="header-anchor" href="#实现构造和查询" aria-hidden="true">#</a></h3><p>接下来，实现构造和查询。当我们在 Tire 树行查找字符串的时候，就可以通过字符的 ASCII 码减去“a”的 ASCII 码（得到的就是数组下标），迅速的找到匹配的子节点的指针。比如 d - a = 3，那子节点 d 的指针就存储在数组下标为 3 的位置。</p><p>整个过程代码的实现为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TrieNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">26</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">isEndingChar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TrieTree</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TrieNode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 往 Trie 树中插入一个字符串</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">insert</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TrieNode</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">char</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isEndingChar</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 在 Trie 树中查找一个字符串</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">find</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">char</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charCodeAt</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isEndingChar</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> tree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TrieTree</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> strs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">how</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">her</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">so</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">see</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> strs) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">tree</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">insert</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> strs) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tree</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(tree</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div><p><strong>那么在 Tire 树中，查找某个字符串的时间复杂是多少？</strong></p><p>如果要在一组字符串中，频繁地查询某些字符串，用 Trie 树会非常高效。</p><p>构建 Trie 树的过程，需要扫描所有的字符串，时间复杂度是 <strong>O(n)（n 表示所有字符串的长度和</strong>）。但是一旦构建成功之后，后续的查询操作会非常高效。</p><p>每次查询时，如果要查询的字符串长度是 k，那我们只需要比对大约 k 个节点，就能完成查询操作。跟原本那组字符串的长度和个数没有任何关系。所以说，构建好 Trie 树后，在其中查找字符串的时间复杂度是 <strong>O(k)</strong>，k 表示要查找的字符串的长度。</p><h3 id="tire-树是否真的耗内存" tabindex="-1">Tire 树是否真的耗内存 <a class="header-anchor" href="#tire-树是否真的耗内存" aria-hidden="true">#</a></h3><p>存储 Tire 树时，用数组来存储一个节点的子节点的指针。</p><p>如果字符串中包含 a~z 这 26 个字符，那么每个节点都需要存储一个长度为 26 的数组，并且每个数组元素存储一个 8 字节指针（或者 4 个字节，跟 CPU、操作系统、编译器等有关）。而且，不管一个节点有多少个子节点，我们都需要维护这个长度为 26 的数组。</p><p>按照上面的例子，数组长度是 26，每个元素是 8 个字节，所以每个节点额外需要 26 * 8 = 208 个字节。而且这还是只包含 26 个字符的情况。</p><p>如果字符串中，不仅包含小写字母，还包含大写字母、数字、甚至中文，那么需要的存储空间就更多了。</p><p>Tire 树的本质是将重复的前缀组合在一起，避免重复存储。但是，在某些情况下，Tire 树并不能节省存储空间。在重复前缀并不多的情况下，Tire 不但不能节省空间，还有可能浪费更多的内存。</p><p><strong>所以 Tire 树是比较耗内存的，是一种空间换时间的解决思路。</strong></p><p>可以牺牲一点查询效率，将每个节点中的数组换成其他数据结构，来存储一个子节点的指针。比如有序数组、跳表、散列表、红黑树等。</p><p>假设是有序数组，查询的时候，可以通过二分查找的方法，快速找到某个字符应该匹配的子节点的指针。往 Tire 插入一个字符串时，需要维护数组中数据的有序性，就会稍微慢点。</p><p>Tire 的变体都可以在一定程度上解决内存的销毁问题。比如，还有<strong>缩点优化</strong>，就是对于只有一个子节点的节点，可以将此节点与子节点合并。也可以节省空间。</p><p><img src="/reading-notes/assets/dataStructure-tire-eg7.97adfaf8.png" alt="tire"></p><h2 id="tire-树与散列表、红黑树的比较" tabindex="-1">Tire 树与散列表、红黑树的比较 <a class="header-anchor" href="#tire-树与散列表、红黑树的比较" aria-hidden="true">#</a></h2><p>支持数据动态操作的数据有，散列表、红黑树、跳表等。这些数据结构也可以实现在一组字符串中查找字符串的功能。这里做个比较。</p><p>在刚刚这个场景中，Tire 树实际上表现得并不好，它对处理的字符串有极其严苛的要求：</p><ol><li>字符串包含的字符集不能太大。字符集太大，存储空间就会浪费很多。</li><li>字符串的前缀重合要比较多，不然消耗也会变大很多。</li><li>要用 Tire 树，首先需要从零开始实现一个 Tire 树，这个在工程上是简单问题复杂化了，除非必须，一般不建议这样做。</li><li>通过指针串起来的数据块不是连续的，而 Tire 树中用到了指针，所以这对缓存并不友好，性能会打折扣。</li></ol><p>针对在一组字符串中查找字符串的问题，在工程中，更倾向于用散列表或者红黑树。因为这两种数据结构，我们都不需要自己去实现，直接利用编程语言中提供的现成类库就行了。</p><p><strong>Trie 树只是不适合精确匹配查找，这种问题更适合用散列表或者红黑树来解决。Trie 树比较适合的是查找前缀匹配的字符串，也就是类似开篇的关键词提示那种场景。</strong></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>解答开篇问题，假设关键词词库是由用户的热门搜索关键词组成，先将这个词库构建成 Tire 树，当用户其中某个单词时，把这个词作为前缀子串在 Tire 树中匹配，将满足这个匹配的关键词展示在搜索提示框。这就是搜索关键词的最基本算法原理。</p><p>Trie 树的这个应用可以扩展到更加广泛的一个应用上，就是<strong>自动输入补全</strong>，比如输入法自动补全功能、IDE 代码编辑器自动补全功能、浏览器网址输入的自动补全功能等等。</p><p>最后总结一下，Tire 树是一种解决字符串快速匹配的数据结构。它比较耗内存，是一种空间换时间的解决问题思路。当然，在 Tire 树中做字符串匹配非常高效，时间复杂度是 O(k)，k 是要匹配的字符串的长度。</p><p>Trie 树的优势并不在于，用它来做动态集合数据的查找，因为，这个工作完全可以用更加合适的散列表或者红黑树来替代。<strong>Trie 树最有优势的是查找前缀匹配的字符串</strong>，比如搜索引擎中的关键词提示功能这个场景，就比较适合用它来解决，也是 Trie 树比较经典的应用场景。</p>',55);const D=s(c,[["render",function(s,p,o,e,t,c){const D=r("VueJobs");return n(),a("div",null,[F,l(D),y])}]]);export{t as __pageData,D as default};