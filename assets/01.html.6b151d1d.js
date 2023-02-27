import{_ as n,a as s}from"./02-10-24.79854212.js";import{_ as e,o as a,c as i,a as l}from"./app.8a7fda1c.js";const c="/flex_learn_manual/image/03-01-02.png",t="/flex_learn_manual/image/03-01-03.gif",p="/flex_learn_manual/image/03-01-04.png",o="/flex_learn_manual/image/03-01-05.png",d={},r=l(`<h1 id="📕-实例-一行一列" tabindex="-1"><a class="header-anchor" href="#📕-实例-一行一列" aria-hidden="true">#</a> 📕 实例：一行一列</h1><p>网页是由 N 个个体元素组成的，每个元素在不同的 CSS 属性下会得到不同的结果。那么在 flex 弹性布局中，一个 flex 容器内仅有一个 flex 元素时，我们可以对这个元素做什么呢？或许可能会想到<strong>一个未知大小的元素水平垂直居中</strong>。</p><p>是的，这个的确是一个情况。不过，就我个人体会而言，应该更多地了解 flex 元素结合不同的 CSS 属性所展示的结果，这样对于在页面布局时会更有利。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 既然只有一个元素，那么其他元素就先消失吧 */</span>
<span class="token selector">.item:nth-child(n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以得到一个干干净净的<a href="../../demo.html?id=55">只有一个 flex 元素的内容</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0055.css
	一行一列的 flex 元素布局情况的准备
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 既然只有一个元素，那么其他元素就先消失吧 */</span>
<span class="token selector">.item:nth-child(n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 下面开始是对一个元素的定义 */</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+'" style="zoom:50%;"><h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3><p>这个水平垂直居中是不受元素的宽高控制，只会根据元素的宽高情况来定位，大概效果如下：</p><img src="'+t+`"><p>整个实现起来也简单，按照前面的 <strong><a href="../../demo.html?id=55">flex_0055.css</a></strong> 的情况，我们可以看到 <strong>item_1</strong> 这个元素是拉伸的情况。处理这个拉伸的情况，如果仅仅只是从 <strong>item_1</strong> 元素自身来考虑的话，那么我们可以这样：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在仅有一个元素的情况下，如果我们通过这个方式来修改 <strong>item_1</strong> 的 <code>align-self</code> 属性，那么这个时候将会以“交叉轴”的方向来居中对齐，也就是垂直居中了。</p><p>接下来要做的是水平居中。控制 flex 容器中元素相对于“主轴”的对齐方式，我们要使用的是 <code>justify-content</code> 这个属性。所以，我们只要这样就可以得到一个<a href="../../demo.html?id=56">水平垂直居中的 flex 布局</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0056.css
  一行一列的 flex 元素布局情况 1
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 既然只有一个元素，那么其他元素就先消失吧 */</span>
<span class="token selector">.item:nth-child(n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 下面开始是对一个元素的定义 */</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里对于“交叉轴”的对齐控制，我们使用的是 <code>align-self</code>，这个属性是对于 flex 元素自身的。相对的，还有一个 <code>align-items</code> 是可以在 flex 容器中设置居中的属性值。只不过 <code>align-items</code> 是会将 flex 容器内所有元素按照“交叉轴”的方向对齐。</p><p>但，我们现在其实只有一个元素，所以，不用担心，<a href="../../demo.html?id=57">水平垂直居中的布局方式</a>，我们还可以这样来实现。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0057.css
  一行一列的 flex 元素布局情况 2
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撑满容器的-flex-元素" tabindex="-1"><a class="header-anchor" href="#撑满容器的-flex-元素" aria-hidden="true">#</a> 撑满容器的 flex 元素</h3><p>在前面我们已经看到了，当一个 flex 容器中存在元素的时候，“交叉轴”方向必定是 <code>stretch</code> 属性值，会将 flex 元素拉伸。那么我们要实现一个<a href="../../demo.html?id=58">撑满容器的 flex 元素</a>，只要将该元素在“主轴”方向也拉伸就可以了。</p><p>“交叉轴”的拉伸可以不仅有 flex 容器上的 <code>align-item</code>，还有 flex 元素中的 <code>align-self</code> 来控制。对于“主轴”上的拉伸，我们只需要控制 <code>flex-grow</code> 的属性值就可以了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+'" style="zoom:50%;"><p>可这里为什么我用 <code>flex: 1;</code> 呢，因为 <code>flex: 1;</code> 相当于 <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%;</code>，结果就是我们所需要的，拉伸撑满，所以，简写一下，方便直接。</p><h3 id="随着父元素改变而改变的-50" tabindex="-1"><a class="header-anchor" href="#随着父元素改变而改变的-50" aria-hidden="true">#</a> 随着父元素改变而改变的 50%</h3><p>简单来说就是让一个 flex 元素相对于 flex 容器，始终保持在 50% 的宽度而自适应。</p><img src="'+o+'" style="zoom:50%;"><p>根据上面的撑满的效果 <code>flex: 1;</code>，可以想象得到，现在我们还是需要在 <code>flex</code> 这个属性上做处理。回想一下，<code>flex: 1;</code> 所代表的最终效果是什么，是不是改变了 <code>flex-grow</code> 的值，而 <code>flex-basis</code> 的值是 <code>0%</code>。</p><img src="'+n+`" style="zoom:50%;"><p>那么我们想一下，<strong>随着父元素改变而改变的 50%</strong>，这里提到了两个点：</p><ul><li>随着改变而改变，也就是自适应了；</li><li>50%，说明这个 flex 元素占据的空间比例是父元素的 50%；</li></ul><p>结合这两点，我们需要保证 flex 元素初始值是 50%，并且宽度是可变化的。所以，首先一点是 <code>flex-basis: 50%;</code> 是必定存在了，其次，如果我们设置了 <code>flex-grow: 1;</code> 的话，那么元素就撑满了，因此也就是 <code>flex-grow</code> 应该为 <code>0</code>，不该伸展，但我们还是可以缩的，所以，最终应该就是：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token property">flex-basis</span><span class="token punctuation">:</span> 50%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合上述的属性，我们可以得到一个简写的 flex 结果就是：<code>flex: 0 50%;</code>，这也就是我们<a href="../../demo.html?id=59">最终的样式情况</a>了。而为什么不能直接 <code>flex: 50%;</code> 呢，回想一下介绍 <code>flex</code> 属性时提到的一个情况就明白了。</p><img src="`+s+`" style="zoom:50%;"><p>如果直接是 <code>flex: 50%;</code> 的话，我们最终也就将 <code>flex-grow</code> 的值改变为 <code>1</code> 了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0059.css
  一行一列的 flex 元素布局情况 4
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 既然只有一个元素，那么其他元素就先消失吧 */</span>
<span class="token selector">.item:nth-child(n+2)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 下面开始是对一个元素的定义 */</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 50%<span class="token punctuation">;</span>
  <span class="token comment">/* 鉴于 item 有 padding，因此改变 box-sizing 的计算方式为 border-box */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>掌握一行一列的处理方式，我们就可以明白一个元素对于自身盒子大小的控制，以及可以了解到如何通过其父元素，甚至是自身元素的一些属性特性，从而决定元素最终所展示的位置。控制了元素的大小和位置，也就可以把握好页面的布局。</p>`,39),u=[r];function m(v,k){return a(),i("div",null,u)}const x=e(d,[["render",m],["__file","01.html.vue"]]);export{x as default};
