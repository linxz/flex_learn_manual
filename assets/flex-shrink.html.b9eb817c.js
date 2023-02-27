import{_ as n}from"./02-10-01.a84a8d68.js";import{_ as e,o as s,c as a,a as i}from"./app.8a7fda1c.js";const c="/flex_learn_manual/image/02-10-12.png",o="/flex_learn_manual/image/02-10-13.png",l="/flex_learn_manual/image/02-10-14.png",d="/flex_learn_manual/image/02-10-15.png",t="/flex_learn_manual/image/02-10-16.png",p="/flex_learn_manual/image/02-10-17.png",r={},u=i('<h1 id="📕-flex-元素-flex-shrink" tabindex="-1"><a class="header-anchor" href="#📕-flex-元素-flex-shrink" aria-hidden="true">#</a> 📕 flex 元素：flex-shrink</h1><p>在前面我们了解到的 <code>flex-grow</code> 是在所有的 flex 元素宽度总和小于 flex 容器的宽度之后，按照特定的比率去分配空间给具有 <code>flex-grow</code> 值的 flex 元素。而现在我们要提到的则是与之相反的一个属性，<code>flex-shrink</code>，当 flex 元素之和大于 flex 容器的宽度时，具有 <code>flex-shrink</code> 属性的 flex 元素会根据特定的比率缩小其自身的宽度。</p><p>与 <code>flex-grow</code> 相同，<code>flex-shrink</code> 的单位也只是数字而已，可以是小数点的数字，但不能是负数，默认值是 <code>1</code>。与 <code>flex-grow</code> 相同，都是以“主轴”的方向为基准。</p><h2 id="特性分解" tabindex="-1"><a class="header-anchor" href="#特性分解" aria-hidden="true">#</a> 特性分解</h2><h3 id="默认值的情况" tabindex="-1"><a class="header-anchor" href="#默认值的情况" aria-hidden="true">#</a> 默认值的情况</h3><p>当我们对父元素使用 <code>display: flex;</code> 后，其子元素就具备 flex 弹性布局的特性，换言之，就是 flex 元素的默认值也就都有了，比如 <code>flex-grow: 0;</code> 以及我们现在要了解的 <code>flex-shrink</code>。是的，前面我们提到过了，<code>flex-shrink</code> 的<strong>默认值</strong>是 <code>1</code>，所以，我们还是从下面这张图开始说起。</p><img src="'+n+'" style="zoom:50%;"><h3 id="空间不够分配保留最小可用空间" tabindex="-1"><a class="header-anchor" href="#空间不够分配保留最小可用空间" aria-hidden="true">#</a> 空间不够分配保留最小可用空间</h3><p>通过前面对 <code>flex-grow</code> 的了解，我们知道现在因为是默认值 <code>flex-grow: 0;</code> 的关系，所以每个 flex 元素并不会拉伸，以致于 flex 容器后面有空白的空间存在。那么这个时候我们如果缩小 flex 容器的宽度，是不是就可以触发 <code>flex-shrink: 1;</code> 的特性，让每个子元素都缩小呢？</p><img src="'+c+'" style="zoom:50%;"><p>从截图中可以看到，其实这个时候已经没办法再缩小了，因为每个 flex 元素已经是只能容下其自身的内容了。</p><img src="'+o+'" style="zoom:50%;"><p>就算我们再加上很多内容其实也一样，这个时候能显示的空间就是该元素自身可正常显示的元素空间，一个汉字的大小，一个单词的大小，一张图片的大小……</p><h3 id="人为控制可缩小的最小空间" tabindex="-1"><a class="header-anchor" href="#人为控制可缩小的最小空间" aria-hidden="true">#</a> 人为控制可缩小的最小空间</h3><p>是的，我们可以人为控制每个 flex 元素最终缩小后的空间大小，比如下面这样：</p><img src="'+l+`" style="zoom:50%;"><p>对于这个其实也并没有做过多的样式处理，而是使用 <code>min-width</code> 控制了 <strong>item_5</strong> 这个<a href="../../demo.html?id=45">元素的最小宽度值</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0045.css
  flex-shrink 默认值的情况下，增加其中一个元素宽度的效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设定比例值的-flex-shrink" tabindex="-1"><a class="header-anchor" href="#设定比例值的-flex-shrink" aria-hidden="true">#</a> 设定比例值的 flex-shrink</h3><p>在前面我们使用的是 <code>flex-shrink</code> 的默认值 <code>1</code>，那么如果我们<a href="../../demo.html?id=46">设定不同的比例值</a>，会是怎么样的一个结果呢。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0046.css
  flex-shrink 不同比例值的页面效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
  <span class="token comment">/* 鉴于 flex-shrink 的缩小特性，设定一个 width 值观察看效果 */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先我们对每个 <strong>item</strong> 的 <code>flex-shrink</code> 设置为 <code>0.5</code> ，为了与 <strong>item_6</strong> 形成差异，其次也是比较关键的是，我们现在所做的 demo 效果仅仅只是一个 <code>flex-shrink</code>，是很难看到效果的，因此添加一个 <code>width</code> 来做差异化对比。</p><img src="`+d+'" style="zoom:50%;"><p>当 flex 容器的宽度足够大，那么每个 flex 元素就不需要被压缩，并且我们也没有设置拉伸，所以，现在看到的效果是每个 flex 元素大家一致，且是 50px 的宽 + 2 个 10px 的 <code>padding</code> 内间距，也就是 70px 的大小。</p><p>可如果我们将浏览器的宽度缩小，逐渐逐渐缩小的时候，会发现 flex 元素会先从 <code>.item_5</code> 这个开始缩，接着是 <code>.item_6</code>，最后才是剩余所有元素被压缩到最小可容纳元素内容的尺寸。</p><img src="'+t+'" style="zoom:50%;"><img src="'+p+'" style="zoom:50%;"><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>从 flex 元素的表现情况来分析，<code>flex-shrink</code> 的作用仅仅只是用来控制当 flex 容器的空间被缩小时按照特定比例关系先后缩小至可容纳元素内容的最小宽度。在 demo 中，我们发现 <code>min-width</code> 与 <code>width</code> 是会对 <code>flex-shrink</code> 的结果产生影响的。</p><p>那么我们设想一下，如果 <code>flex-shrink: 0; width: 50px;</code> 这样的一个 <strong>item</strong> 属性值，会有什么结果呢？</p>',30),m=[u];function h(x,f){return s(),a("div",null,m)}const _=e(r,[["render",h],["__file","flex-shrink.html.vue"]]);export{_ as default};