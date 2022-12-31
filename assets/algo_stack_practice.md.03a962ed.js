import{_ as s,o as a,c as n,a as l,b as p,d as o,e,r as c}from"./app.7b8c6bb5.js";const r=JSON.parse('{"title":"练习","description":"","frontmatter":{},"headers":[{"level":2,"title":"栈的压入、弹出序列","slug":"栈的压入、弹出序列","link":"#栈的压入、弹出序列","children":[{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}]}],"relativePath":"algo/stack/practice.md"}'),t={name:"algo/stack/practice.md"},F=p("h1",{id:"练习",tabindex:"-1"},[o("练习 "),p("a",{class:"header-anchor",href:"#练习","aria-hidden":"true"},"#")],-1),y=e('<h2 id="栈的压入、弹出序列" tabindex="-1">栈的压入、弹出序列 <a class="header-anchor" href="#栈的压入、弹出序列" aria-hidden="true">#</a></h2><p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。</p><p>例如序列 <code>{1, 2, 3, 4, 5}</code> 是某栈的压入顺序，序列 <code>{4, 5, 3, 2, 1}</code> 是该压栈序列对应的一个弹出序列，但 <code>{4, 3, 5, 1, 2}</code>就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）</p><h3 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-hidden="true">#</a></h3><ol><li>使用一个栈 <code>stack</code> 来根据压入顺序，依次压入数据，同时定义索引 <code>index</code> 指向弹出序列的第一个位置。</li><li>每次入栈，如果栈顶的数据和 <code>index</code> 指向的值相等，则将该数据出栈，并且 <code>index++</code> 向后移一位，指向下一个出栈的数据。</li><li>循环判断栈顶数据和 <code>index</code> 指向的值是否还相等，如果还相等，则和上一步操作相同，将数据出栈并 <code>index++</code>。</li><li>如果不想等，并且还有数据，则继续入栈。</li><li>入栈结束后，如果 <code>stack</code> 为空，则说明弹出序列是该栈的弹出顺序，反之不是。</li></ol><h3 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isPopOrder</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">pushOrder</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">popOrder</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">pushOder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">popOrder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pushOrder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">popOrder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pushOrder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pushOrder</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pushOrder</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">index</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">++;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>',7);const D=s(t,[["render",function(s,p,o,e,r,t){const D=c("VueJobs");return a(),n("div",null,[F,l(D),y])}]]);export{r as __pageData,D as default};
