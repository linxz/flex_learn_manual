import{_ as n,o as s,c as a,a as e}from"./app.8a7fda1c.js";const p="/flex_learn_manual/image/03-03-01.png",i="/flex_learn_manual/image/03-03-02.png",t="/flex_learn_manual/image/03-03-03.png",c="/flex_learn_manual/image/03-03-04.png",o="/flex_learn_manual/image/03-03-05.png",l="/flex_learn_manual/image/03-03-06.png",d="/flex_learn_manual/image/03-03-07.png",r={},u=e('<h1 id="📕-实例-九宫格" tabindex="-1"><a class="header-anchor" href="#📕-实例-九宫格" aria-hidden="true">#</a> 📕 实例：九宫格</h1><p>九宫格的效果应该是很多页面中都会出现的，尤其是移动端的页面中，经常可以看到几排的 icon 排列着。可能是四列的，也有可能是五列的，这些都无所谓，我们一般统称为宫格，或者<a href="../../demo.html?id=65">九宫格</a>。反正呢，大概就是下面这样的一个布局效果。</p><img src="'+p+`" style="zoom:50%;"><p>很显然，现在看到这个效果是最初始的一个<a href="../../demo.html?id=65">宫格布局</a>情况，样式大概就是这样了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0065.css
  九宫格效果图  1
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 既然是九宫格，那就去掉最后一个 flex 元素吧 */</span>
<span class="token selector">.item_0</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 九宫格样式开始 */</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在 flex 容器超过一行的 flex 元素换行显示 */</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token comment">/* 由于 item 自身有 padding，为了便于计算所以采用 border-box 的盒模型计算方式 */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后面的宫格例子我们也将会在这个基础上一点点添加，目前已有的样式作用目的已经通过注释的方式进行了描述。简单来说就是，希望<strong>在 flex 容器中一行显示三列宽度相同的 flex 元素，如超过 flex 容器的部分则换行显示</strong>。</p><h3 id="宫格间添加间距" tabindex="-1"><a class="header-anchor" href="#宫格间添加间距" aria-hidden="true">#</a> 宫格间添加间距</h3><p>现在每个宫格都是相邻在一起的，一般而言为了能够美观，每个宫格之间都是会添加一些间距来显示。在前面我们了解过，在 flex 弹性布局中，可以使用 <code>justify-content</code> 属性让 flex 元素在容器中产生有间隙的布局。</p><p>但是目前在这里并不合适，因为我们使用了 <code>flex: 33.33%</code>，无论在什么情况下，宫格中的每个 flex 元素宽度始终是 flex 容器的 33.33% 左右，且是相邻的。毕竟现在这个很自适应，很有弹性。</p><p>既然 flex 相关的属性无法满足我们的需求，那么我们可以使用别的方式来处理。但，我们不能使用 <code>margin</code> 的方式来处理。一旦出现 <code>margin</code> 相关的属性后，那么这个 flex 元素的宫格宽度就不再是 33.33%，也就无法得到<a href="../../demo.html?id=66">一行三列的宫格</a>了。</p><img src="`+i+`" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token comment">/* 由于 item 自身有 padding，为了便于计算所以采用 border-box 的盒模型计算方式 */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>间距是有了，但是结果却不对了。</p><p>其实呢，这个时候我们完全可以利用 <code>box-sizing</code> 这个属性。因为 <code>border-box</code> 的属性值，所以当我们有 <code>border</code> 的时候，并<a href="../../demo.html?id=67">不会影响 flex 元素的宽度计算结果</a>。</p><img src="`+t+`" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token comment">/* 由于 item 自身有 padding，为了便于计算所以采用 border-box 的盒模型计算方式 */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="等高等宽等比的宫格" tabindex="-1"><a class="header-anchor" href="#等高等宽等比的宫格" aria-hidden="true">#</a> 等高等宽等比的宫格</h3><p>从页面布局情况来说，这样相对来说好看一点了。不过要是每个 flex 元素的<a href="../../demo.html?id=68">宽高是相同</a>的话，那岂不是更好。就类似现在很多 app 中的宫格排列时，都是放相同大小的 icon 图标。所以，我们也改改。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span>
  <span class="token comment">/* 由于 item 自身有 padding，为了便于计算所以采用 border-box 的盒模型计算方式 */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #fff<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token comment">/* 这个只是为了去掉目前元素的那些数字 */</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item::after</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 不考虑增加额外元素而使用了 ::after，故而通过 block 块级处理 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token comment">/* 宽度等于父元素的宽度 */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* 以父元素的宽度为标准，通过 padding 方式撑开自身的高度 */</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过伪元素的方式撑开每个 flex 元素高度，其实<a href="../../demo.html?id=68">宽高相同</a>。这样就能够得到需要的宫格了。</p><img src="`+c+`" style="zoom:50%;"><p>但是这样看，是不是感觉宫格的行数太多，并且每个格子都太大了呢，一行也没放下几个。不要担心，我们只要简单修改一下 <code>.item</code> 中的 <code>flex</code> 值就可以了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 33.33% 转为 20%，现在我们可以得到的<a href="../../demo.html?id=69">结果就是这样</a>了。</p><img src="`+o+`" style="zoom:50%;"><p>好像哪里不对的样子，第二行的格子为什么会大一些呢。对了，因为现在是一行有 5 个格子，而我们只有 9 个元素，所以，第二行因为宽度弹性撑开了，而高度由于 <code>padding-top</code> 的关系也撑开了，最终导致第二行显得大一些。</p><p>要解决这个问题，我们是不是把第十个 <strong>item</strong> 展示出来就好了呢？不不不，完全没这个必要。我们只需要简简单单的加个 <code>0</code> 就可以了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 让每个 item 元素的宽度初始为 33.33%，其实也就是想让一行三列“均分”一下 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 20%<span class="token punctuation">;</span>
  ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+'" style="zoom:50%;"><p>嗯。<a href="../../demo.html?id=70">现在看起就舒服多了</a>。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>宫格的布局实现其实也是简单的，关键主要在于对 <code>flex</code> 这个属性的把控。这个例子中用了 <code>padding</code> 的方式来实现等比大小缩放的元素的，该元素可作为一个父元素插入 <code>img</code>，也可以直接使用 <code>background-image</code> 的方式插入图片。</p><img src="'+d+'" style="zoom:50%;">',33),m=[u];function v(k,b){return s(),a("div",null,m)}const f=n(r,[["render",v],["__file","03.html.vue"]]);export{f as default};
