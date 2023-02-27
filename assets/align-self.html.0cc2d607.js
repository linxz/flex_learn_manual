import{_ as n}from"./02-11-04.a133a710.js";import{_ as s,o as e,c as a,a as i}from"./app.8a7fda1c.js";const t="/flex_learn_manual/image/02-11-01.png",l="/flex_learn_manual/image/02-11-02.png",o="/flex_learn_manual/image/02-11-03.png",c={},p=i('<h1 id="📕-flex-元素-align-self" tabindex="-1"><a class="header-anchor" href="#📕-flex-元素-align-self" aria-hidden="true">#</a> 📕 flex 元素：align-self</h1><p>在前面 flex 容器部分中，我们了解了一遍有关 <code>align-items</code> 的属性，这个属性的主要作用是控制所有的 flex 元素在“交叉轴”方向的对齐方式。注意哦，是控制该 flex 容器中所有的 flex 元素的对齐方式。这里强调了“<strong>所有</strong>”这两个字，也就说明我们是可以对每个 flex 元素设置不同的对齐方式，同样也是基于“交叉轴”方向的。</p><img src="'+t+`" style="zoom:50%;"><p>如上图所示，我们将第一个 <strong>item</strong> 的位置往下挪了点，准确地说应该是，我们将这个 <strong>item</strong> 元素设置为底部对齐了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0050.css
  基于 demo_26 中描述 align-items: flex-start; 效果的前提下
  对 .item_1 使用 align-self 的效果。
*/</span>
......
<span class="token comment">/* 对 .item_1 增加 align-self: flex-end; 的样式 */</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <a href="../../demo.html?id=50">demo</a> 是基于 <strong><a href="../../demo.html?id=26">demo_0026</a></strong> 做的修改，将 <code>.item_1</code> 的对齐方式修改为底部对齐。</p><h2 id="属性介绍" tabindex="-1"><a class="header-anchor" href="#属性介绍" aria-hidden="true">#</a> 属性介绍</h2><p><code>align-self</code> 的属性值与 <code>align-items</code> 几乎是一样的，仅仅只是多了一个 <code>auto</code> 属性值而已。</p><ul><li><code>auto</code></li><li><code>flex-end</code></li><li><code>flex-start</code></li><li><code>center</code></li><li><code>baseline</code></li><li><code>stretch</code></li><li><code>normal</code></li></ul><p>如已经了解 <code>align-items</code> 属性的话，那么对于 <code>align-self</code> 的理解就简单很多的，这里也就不打算再详细得重复描述每个属性值。若有不清楚的可以查看 <code>align-items</code> 的属性介绍。</p><h3 id="auto" tabindex="-1"><a class="header-anchor" href="#auto" aria-hidden="true">#</a> auto</h3><p><code>auto</code> 是 <code>align-self</code> 的默认值，主要的作用是让当前 flex 元素的对齐方式参照 flex 容器所设置的 <code>align-items</code>。</p><h3 id="flex-end" tabindex="-1"><a class="header-anchor" href="#flex-end" aria-hidden="true">#</a> flex-end</h3><p>将当前 flex 元素相对于“交叉轴”的<strong>底部</strong>进行对齐，效果如本章前面的那张截图。</p><h3 id="flex-start" tabindex="-1"><a class="header-anchor" href="#flex-start" aria-hidden="true">#</a> flex-start</h3><p>将当前 flex 元素相对于“交叉轴”的<strong>顶部</strong>对齐。</p><h3 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> center</h3><p>将当前 flex 元素相对于“交叉轴”的<strong>中间部分</strong>对齐，也就是相对于“交叉轴”垂直居中对齐该 flex 元素。</p><h3 id="baseline" tabindex="-1"><a class="header-anchor" href="#baseline" aria-hidden="true">#</a> baseline</h3><p><code>baseline</code> 还是文本的基线对齐方式，所以，当我们如果每个 <strong>item</strong> 的文字大小不一样的话，可能就会得到这样的一个效果。</p><img src="`+l+`" style="zoom:50%;"><p>在这个截图中我们可以看到第一行元素的文字大小都是不同的，也就导致了元素的排列高低错落。在错落的排列中，我们可以发现文字的对齐方式还是很统一的：以最大的文本基线为基准来对齐所有的元素。</p><p>而在截图的第二行中，由于文字大小都是一致的，所以，看到的对齐方式就很平整了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0051.css
  align-self: baseline; 时，不同文字大小的效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token comment">/* 将所有的 item 元素对齐方式设置为 baseline */</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 设置不同的 font-size 来观察元素的对齐变化 */</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_4</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（🤔）按照上面的这个 <a href="../../demo.html?id=51">demo</a>，如果我们在 <code>.item_2 {}</code> 中修改 <code>align-self</code> 的对齐方式，比如 <code>flex-start</code> 的话，会是怎么样呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0052.css
  基于 demo_51 将 item_2 的 align-self 对齐方式修改
*/</span>
<span class="token selector">......
.item_2</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 修改 item_2 元素的 align-self 为 flex-start */</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时我们可以看到有<a href="../../demo.html?id=52">两个元素是顶着 flex 容器边缘</a>的。首先，<strong>item_2</strong> 必定是顶着边缘的，因为 <code>align-self</code> 的值是 <code>flex-start</code>，那么 <strong>item_1</strong> 顶着边缘是为什么呢？最简单的理解方式呢，我们只要把所有的文字大小属性去掉，就会发现每个元素都是顶边的。</p><img src="`+o+'" style="zoom:50%;"><p>那么 <strong>item_1</strong> 目前是 <code>baseline</code> 对齐方式中，文字最大的一个，所以，必然是顶边了。而 <strong>item_3</strong>、 <strong>item_4</strong>、 <strong>item_5</strong> 这三个元素呢，都要相对于 <strong>item_1</strong> 的基线来对齐。在这个 <code>baseline</code> 对齐的队伍中，唯有 <strong>item_2</strong> 是不同的。</p><h3 id="stretch-normal" tabindex="-1"><a class="header-anchor" href="#stretch-normal" aria-hidden="true">#</a> stretch / normal</h3><p><code>strech</code> 属性值的作用是相对于“交叉轴”的位置，将元素自身拉伸至撑满。而 <code>normal</code> 在 flex 弹性布局中，效果几乎等同于 <code>stretch</code>。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p><code>align-self</code> 可以视为 <code>align-items</code> 的“衍生”版，是为了让我们能够更好地控制每个 flex 元素而存在的，因此在默认值为 <code>auto</code> 的基础上，还存在着与 <code>align-items</code> 相同的属性值。如果当心记不住的话，可以想一下 <strong>self</strong> 是 flex 元素自身，而 <strong>items</strong> 是 flex 容器下的所有 item。</p><img src="'+n+'" style="zoom:50%;"><p>（🤔）那么如果我们要做一个上图这样的效果，应该怎么做呢？</p>',35),d=[p];function r(u,m){return e(),a("div",null,d)}const g=s(c,[["render",r],["__file","align-self.html.vue"]]);export{g as default};
