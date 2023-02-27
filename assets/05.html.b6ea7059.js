import{_ as n,o as s,c as a,a as e}from"./app.8a7fda1c.js";const t="/flex_learn_manual/image/03-05-01.png",p="/flex_learn_manual/image/03-05-02.png",i="/flex_learn_manual/image/03-05-03.png",l="/flex_learn_manual/image/03-05-04.png",c={},o=e(`<h1 id="📕-实例-上下固定中间可滚" tabindex="-1"><a class="header-anchor" href="#📕-实例-上下固定中间可滚" aria-hidden="true">#</a> 📕 实例：上下固定中间可滚</h1><p>在网上很容易可以搜到固定头部或者固定底部，另外一部分可根据内容滚动的代码，且实现的方式也有很多。而现在，我们要聊的是使用 flex 方式布局，<strong>实现上下高度不定，中间高度也不定，且中间部分内容增加很多之后可以滚动，如果中间部分内容不多，上下两个部分保持在浏览器顶部和底部</strong>。</p><p>也不知道这个描述是否能够明白，如果不明白也没关系，我们一点点来，相信到最后就能明白了。如果已经明白这句话的意思，那就可以先想想这个效果应该怎么实现吧。如果已经知道这个效果怎么实现了，那……那就跳过这个章节吧。</p><p>首先第一步，我们先实现一个撑满浏览器的 flex 容器，且里面<a href="../../demo.html?id=75">三个 flex 元素分别占据上中下</a>的位置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0075.css
  上中下三行布局效果
*/</span>
<span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 设置 html 和 body 的高度为 100%，并将 margin 重置为 0 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* demo 作为 body 的子元素，高度为 100% 时，将会撑满整个窗口 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* 将 item 的排列方向改为列的形式 */</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(n+4)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 从第 4 个元素开始隐藏，目前不需要 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+t+`" style="zoom:50%;"><p>上中下的布局有了，不过第 3 个 <strong>item</strong> 并没有置底。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item_2</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上这个，我们就得到一个<a href="../../demo.html?id=76">看似满足需求的界面效果</a>了。</p><img src="`+p+'" style="zoom:50%;"><p>为什么说只是一个看似满足需求的呢，我们随便加点内容就会明白了。</p><img src="'+i+`" style="zoom:50%;"><p>这个时候由于我们在 <code>body</code> 中设置了 <code>overflow: hidden;</code>，所以，无论怎么样，都是看不到更多的内容了。在本章节开始的时候，就提到了一点，中间的内容是可以滚动的。所以，这个看似满足求的效果，我们还差一个满足滚动的需求。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item_2</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+'" style="zoom:50%;"><p>现在这样就可以让<a href="../../demo.html?id=77">中间的那个部分滚起来了</a>。突然有种错觉，flex 弹性布局真的好赞啊。</p>',16),d=[o];function r(u,m){return s(),a("div",null,d)}const k=n(c,[["render",r],["__file","05.html.vue"]]);export{k as default};
