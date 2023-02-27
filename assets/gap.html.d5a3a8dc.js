import{_ as n,o as s,c as e,a}from"./app.8a7fda1c.js";const c="/flex_learn_manual/image/02-08-01.png",i="/flex_learn_manual/image/02-08-02.png",o="/flex_learn_manual/image/02-08-03.png",l="/flex_learn_manual/image/02-08-04.png",p="/flex_learn_manual/image/02-08-05.png",d="/flex_learn_manual/image/02-08-06.png",t="/flex_learn_manual/image/02-08-07.png",r={},u=a(`<h1 id="📕-flex-容器-gap" tabindex="-1"><a class="header-anchor" href="#📕-flex-容器-gap" aria-hidden="true">#</a> 📕 flex 容器：gap</h1><p>把 <code>gap</code> 说是 flex 容器，是不太严谨地说法，只能说 <code>gap</code> 是写在 flex 容器中，用于控制 flex 元素之间的间距的。是的，<strong>gap</strong> 在 CSS 属性中的作用主要就是元素之间的间距控制。所以，很显然这个间距必定是列与行的间距。</p><ul><li><code>row-gap</code></li><li><code>column-gap</code></li></ul><p>换句话说，<code>gap</code> 是 <code>row-gap</code> 和 <code>column-gap</code> 的简写方式，即，<code>gap</code> 有两个属性值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 代表：
  	 row-gap: 10px;
  	 column-gap: 20px;
  */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性值介绍" tabindex="-1"><a class="header-anchor" href="#属性值介绍" aria-hidden="true">#</a> 属性值介绍</h2><p>间距的属性值比较简单，只要是一个<strong>长度值+单位</strong>就可以了，当然了，也是可以通过 <code>calc()</code> 来计算。</p><p>默认属性值是 <code>normal</code>。</p><p>结合<a href="../../demo.html?id=78">实例看一下效果</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0078.css
  使用 gap 属性让 flex item 元素产生间距
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在 flex 容器超过一行的 flex 元素换行显示 */</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1 20%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们给外层 <code>.demo</code> 增加了一个 <code>gap: 10px;</code> 的同时，还加了 <code>padding: 10px;</code>。至于为什么呢，我们先看一下目前现在这个 demo 的效果。</p><img src="`+c+'" style="zoom:50%;"><p>如没有 <code>gap</code> 属性的话，我们要写这个间距，可能就是要用 <code>margin</code> 结合 <code>:nth-child()</code> 方式来控制。在 <strong><a href="../../demo.html?id=70">demo_0070</a></strong> 中我们是用了 <code>border</code> 的方式来处理的。总之，相对比较折腾，而 <code>gap</code> 就很好地帮我们解决了这个问题。</p><p>那么回到前面的问题，为什么要有 <code>padding</code> 这个属性值呢。其实主要是因为 <code>gap</code> 的作用是元素与元素之间的间距，而不是元素与容器之间的间距。所以，当我们没有 <code>padding</code> 值顶开容器与元素的间距，那么就变成这样了。</p><img src="'+i+`" style="zoom:50%;"><p>显然这跟我们想要的还是有差距的。所以，要记住一点：<strong><code>gap</code> 的作用是元素与元素之间的间距</strong>。</p><p>该属性值有<strong>长度值+单位</strong>，所以，我们也是可以<a href="../../demo.html?id=79">使用百分比来实现</a>，这样结合 flex 的弹性布局，不是更美哉！想想就开心的感觉，对吧。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0079.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ......省略部分代码...... */</span>
  <span class="token comment">/* 这里将原来的 10px 改为 10% */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+'" style="zoom:50%;"><p>好像哪里不对，元素与元素上下之间的间距怎么不见了？莫非 <code>gap: 10%;</code> 的作用于 <code>gap: 10px;</code> 作用是不同的？</p><img src="'+l+`" style="zoom:50%;"><p>但是从这里来看，并没有任何问题，<code>row-gap</code> 中已经有 <code>10%</code> 这个值了。那是为什么呢？对于百分比而言，都是有一个相对的值来做比较的，在这个 flex 弹性布局中，<code>gap: 10%;</code> 中的百分比所比较的值分别是：</p><ul><li><code>row-gap</code> -&gt; <code>height</code></li><li><code>column-gap</code> -&gt; <code>width</code></li></ul><p>而我们现在使用的是 flex 布局，并未设置任何宽高。既然如此，那么我们增加一个 <code>height</code> <a href="../../demo.html?id=80">看看就知道</a>了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0080.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
  增加 height 看一下 gap 效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ......省略部分代码...... */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token comment">/* 这里增加一个 height，看看 row-gap 效果是否改变 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+`" style="zoom:50%;"><p>鉴于现在我们使用的 <code>height</code> 是固定值，所以，当我们改变 flex 容器宽度时，会发现 <code>column-gap</code> 的值是在不断变化，而 <code>row-gap</code> 则是不会变，永远就是 <strong>200px * 10% = 20px</strong> 的这个结果。</p><p>那么问题又来了，如果改变了 <code>flex-direction</code> 的话，会不会同时改变了 <code>row-gap</code> 和 <code>column-gap</code> 的方位呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0081.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
  增加 height 看一下 gap 效果；
  改变 flex-direction 后看看 gap 的效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ......省略部分代码...... */</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 新增一个 flex-direction 的值看效果 */</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+d+'" style="zoom:50%;"><p><a href="../../demo.html?id=81">看这个结果</a>，改变的只是 flex 元素的变化，但 <code>gap</code> 该怎么体现的，还是继续怎么体现。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><code>gap</code> 是处理元素与元素之间的间距；</li><li>当使用百分比作为单位时，注意 flex 容器的宽高值；</li></ul><p><code>gap</code> 这个属性可以让我们在 flex 弹性布局中快速去处理每个 flex 元素的间距问题，不用再去考虑加 <code>margin</code> 后元素的样式处理，整体效果还是很赞的。但，有一个很现实的问题是我们必须要去面对的，是的，<strong>兼容性</strong>这个问题我们是无法逃避的。</p><p>那么我们看一下 <code>gap</code> 属性在 flex 布局中的兼容性情况。</p><img src="'+t+'" style="zoom:50%;"><p>看到 <strong>WD</strong> 这两个字母，再看看那么多红色的小方块，想想也就只是一个期待了。看到 iOS 和 Android 的兼容性后，也就没什么好期待的了，毕竟现在主要还是在移动端去使用 flex 布局居多。</p>',37),m=[u];function v(g,b){return s(),e("div",null,m)}const x=n(r,[["render",v],["__file","gap.html.vue"]]);export{x as default};
