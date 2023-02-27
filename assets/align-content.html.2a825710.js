import{_ as n,o as e,c as s,a}from"./app.8a7fda1c.js";const l="/flex_learn_manual/image/02-07-01.png",c="/flex_learn_manual/image/02-07-02.png",i="/flex_learn_manual/image/02-07-03.png",t="/flex_learn_manual/image/02-07-04.png",o="/flex_learn_manual/image/02-07-05.png",p="/flex_learn_manual/image/02-07-06.png",d="/flex_learn_manual/image/02-07-07.png",r="/flex_learn_manual/image/02-07-08.png",u="/flex_learn_manual/image/02-07-09.png",m="/flex_learn_manual/image/02-07-10.png",v={},f=a('<h1 id="📕-flex-容器-align-content" tabindex="-1"><a class="header-anchor" href="#📕-flex-容器-align-content" aria-hidden="true">#</a> 📕 flex 容器：align-content</h1><p>在 flex 容器中设置元素对齐的方式，之前我们提到了使用 <code>justify-content</code> 可以设置元素以“主轴”为基准的对齐方式。通过在这个方式，在默认的情况下，我们可以实现 flex 元素在 flex 容器中的水平居中对齐。</p><p>就类似于文本的对齐方式一样，我们可以设置文本在一个元素居中对齐，也可以设置该文本在元素中的垂直对齐方式。而在 flex 容器中我们可以设置 flex 元素以“主轴”为基准的对齐方式，那么同样，我们也可以设置以“交叉轴”为基准的对齐方式。</p><p>那么这就是我们要介绍的 <code>align-content</code> 属性了，该属性在 flex 布局中有以下几个属性值：</p><ul><li><code>flex-start</code></li><li><code>flex-end</code></li><li><code>center</code></li><li><code>space-between</code></li><li><code>space-around</code></li><li><code>space-evenly</code></li><li><code>stretch</code></li></ul><p>对于以上 7 个属性值是不是有种似曾相识的感觉？是的 ，在 <code>justify-content</code> 中我们已经见过了，而 <code>stretch</code> 这个我们是在 <code>align-items</code> 中见过。简单来说，作用其实都是一样的，只不过“参照物”不同而已。</p><h2 id="属性值介绍" tabindex="-1"><a class="header-anchor" href="#属性值介绍" aria-hidden="true">#</a> 属性值介绍</h2><p>在介绍每个属性之前，再次重申一下，<code>align-content</code> 的作用是设置浏览器如何在 flex 容器中，按照“交叉轴”的方向去分配每个 flex 元素之间以及与 flex 容器之间的空间。</p><p><strong>着重说明，<code>align-content</code> 对于 <code>flex-wrap: nowrap;</code> 设置过后的 flex 布局是无效的。</strong></p><h3 id="flex-start" tabindex="-1"><a class="header-anchor" href="#flex-start" aria-hidden="true">#</a> flex-start</h3><p>按照“交叉轴”的“起始线”位置开始填充 flex 元素，第一个元素与起点位置对齐，一个接一个的排列，放不下的会紧跟换行排列。</p><img src="'+l+`" style="zoom:50%;"><p>这是一个最简单的 <a href="../../demo.html?id=34">demo</a> 效果，为了添加不同的情况，给第 6 个元素加大了宽度。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0034.css
  align-content: flex-start; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-end" tabindex="-1"><a class="header-anchor" href="#flex-end" aria-hidden="true">#</a> flex-end</h3><p>相对于 <code>flex-start</code> 而言，<code>flex-end</code> <a href="../../demo.html?id=35">就很好理解了</a>。flex 元素是相对于“交叉轴”的“终止线”一个个排列好对齐的，就算是换行也是紧挨着的。</p><img src="`+c+`" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0035.css
  align-content: flex-end; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每当这个时候，我时常会感慨，或许这就是 CSS 的魅力吧，一个简单的属性变化，让整个页面发生了完全不同的改变。</p><h3 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> center</h3><p>简单理解，就是以“交叉轴”为基准，从该轴的中心位置扩散，始终保持 flex 元素第一行与最后一行相距 flex 容器的边缘是相同的距离。同样，我们还是修改一下 demo 中的 <code>align-content</code> 的属性值：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0036.css
  align-content: center; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么<a href="../../demo.html?id=36">得到的结果</a>就是：</p><img src="`+i+'" style="zoom:50%;"><p>前面我们提到了一点是，始终保持 flex 元素的第一行与最后一行相距 flex 容器的边缘是相同的距离，从上图中我们已经能够看到效果了。而如果这个时候，我们把第 3 个元素的高度修改的话，得到的结果会是怎么样的呢？是否真的与预期的效果一样，保持距离相同呢？</p><img src="'+t+`" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0037.css
  基于 align-content: center; 的效果改变 item_3 的高度值
*/</span>
<span class="token comment">/* ...... */</span>
<span class="token comment">/* 改变第 3 个元素的高度，查看布局效果 */</span>
<span class="token selector">.item_3</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从<a href="../../demo.html?id=37">截图的情况来看</a>，显而易见，先抛开第一行的高度都被拉伸的一个因素暂且不谈，我们可以看到 flex 容器上下两端的间距是十分相近的，肉眼所见，完全就是相同的。</p><h3 id="space-between" tabindex="-1"><a class="header-anchor" href="#space-between" aria-hidden="true">#</a> space-between</h3><p>flex 容器内的 flex 元素<a href="../../demo.html?id=38">行之间距离保持相等</a>，第一行与最后一行紧贴 flex 容器“交叉轴”的起点位置与结束位置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0038.css
  align-content: space-between; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+'" style="zoom:50%;"><p>为了能够更好地体现 flex 元素行之间的距离是保持相等，我们可以尝试给不同的 item 添加宽度，使其换行，增加行数，看看多行的情况是怎么样的。</p><img src="'+p+'" style="zoom:50%;"><p>由三行变成四行后，我们可以看到，相邻行之间的间距是相等的。在该 demo 中，外层的 flex 容器高度是固定的，可以通过外边框的黑线可以看到。那么，如果这个时候有一个元素的宽度也增大了，变成了五行，情况会怎么样呢？</p><img src="'+d+`" style="zoom:50%;"><p>在整个 flex 容器中已经无法再正常容纳了，那么相邻行之间就更不可能会有间隔的空间存在。</p><h3 id="space-around" tabindex="-1"><a class="header-anchor" href="#space-around" aria-hidden="true">#</a> space-around</h3><p>相对于 <code>space-between</code> 而言，差别是在 flex 容器内的第一行元素与最后一行元素距离边缘的距离是<a href="../../demo.html?id=39">相邻行之间间距的一半</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0039.css
  align-content: space-around; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+`" style="zoom:50%;"><h3 id="space-evenly" tabindex="-1"><a class="header-anchor" href="#space-evenly" aria-hidden="true">#</a> space-evenly</h3><p>相对于 <code>space-around</code> 而言，<code>space-evenly</code> 的差别是第一行与最后一行相距边缘的距离是与相邻行之间相同的。或者我们可以理解为，flex 元素的<a href="../../demo.html?id=40">行与行之间距离均分</a>了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0040.css
  align-content: space-evenly; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+u+`" style="zoom:50%;"><blockquote><p>思考：在 <code>space-between</code> 中我们尝试让 flex 元素变成多行后，看看每行之间的距离变化，那么在 <code>space-around</code> 和 <code>space-evenly</code> 这两个属性值中，用同样的方式改变每行之间的距离，会有什么效果呢？</p></blockquote><h3 id="stretch" tabindex="-1"><a class="header-anchor" href="#stretch" aria-hidden="true">#</a> stretch</h3><p>拉伸每个 flex 元素，将 flex 容器中<a href="../../demo.html?id=41">剩余的空间平均分配</a>给每行的 flex 元素，使其最终撑满整个 flex 容器。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0041.css
  align-content: stretch; 的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+m+'" style="zoom:50%;"><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><code>align-content</code> 的对齐方式主要是以“交叉抽”为基准，在 flex 容器中对齐排列 flex 元素。每个属性值都会有不同的效果，并且还会受到 flex 容器的大小影响每行 flex 元素的展示方式。</li><li>同时需要注意的是，<code>align-content</code> 对于使用了 <code>flex-wrap: nowrap;</code> 的 flex 布局是无效的。</li><li><code>align-content</code> 是相对于“交叉轴”的，而 <code>justify-content</code> 是相对于“主轴”的。</li><li><code>align-content</code> 是<strong>排列</strong> flex 元素而 <code>align-items</code> 是控制 flex 元素的<strong>位置</strong>，想象一下 <code>align-content: space-around;</code> 和 <code>align-items: baseline;</code>，不要被 <code>flex-start</code> 这几个相同的属性值而误导；</li></ul>',52),b=[f];function x(g,h){return e(),s("div",null,b)}const _=n(v,[["render",x],["__file","align-content.html.vue"]]);export{_ as default};
