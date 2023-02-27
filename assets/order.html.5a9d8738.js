import{_ as n}from"./02-11-04.a133a710.js";import{_ as s,o as a,c as e,a as p}from"./app.8a7fda1c.js";const t="/flex_learn_manual/image/02-12-01.png",i={},c=p('<h1 id="📕-flex-元素-order" tabindex="-1"><a class="header-anchor" href="#📕-flex-元素-order" aria-hidden="true">#</a> 📕 flex 元素：order</h1><h2 id="align-self-文末思考内容的参考代码" tabindex="-1"><a class="header-anchor" href="#align-self-文末思考内容的参考代码" aria-hidden="true">#</a> align-self 文末思考内容的参考代码</h2><img src="'+n+`" style="zoom:50%;"><p>这个主要也就是把 <code>align-self</code> 的属性值都写了一遍，具体的大家可以<a href="../../demo.html?id=53">自行进一步感受</a>一下。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0053.css
  align-self 最后小结中的一个思考题
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(n+7)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_2</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_3</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_4</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order-属性的介绍" tabindex="-1"><a class="header-anchor" href="#order-属性的介绍" aria-hidden="true">#</a> order 属性的介绍</h2><p>小时候讲故事的时候，都是会说，很久很久以前。是的，提到这个 <code>order</code> 属性，我就想到了很久很久以前，当时大家都在追求 <code>table</code> 转 <code>div</code>，就是所谓的 <strong>div+css</strong> 布局。为什么会想到这个呢，原因很简单，因为当时是追求着 dom 结构的写法，把关键的重要的部分在 HTML 中先写，然后再写次要的内容信息，最后通过 CSS 去调整布局。</p><p>会利用当时觉得很厉害现在很平淡无奇的技术，比如负 margin 、 position 定位之类的各种方式来实现最终想要的页面布局效果。而现在，如果我们使用的是 flex 弹性布局的话，flex 元素想在谁的前面就在谁的前面，而且还一点都不复杂，只需要通过 <code>order</code> 属性，并加上相对应的数值就可以了。</p><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p><code>order</code> 属性规定了 flex 元素在 flex 容器中布局时的顺序。在未设置任何 <code>order</code> 属性值或者设置了相同的 <code>order</code> 属性值时，会以元素在 dom 节点中出现的顺序进行布局；而如果我们修改了 <code>order</code> 的属性值，就将会以递增的方式排序，数字越大，flex 元素就排得越后面。</p><p><code>order</code> 属性仅仅只是将 flex 元素在页面展示时的视觉效果做了位置的调整，并不会改变其自身在 dom 节点的位置以及顺序。</p><p>属性值可以为负值，只要是整数就可以了。</p><h3 id="示例概述" tabindex="-1"><a class="header-anchor" href="#示例概述" aria-hidden="true">#</a> 示例概述</h3><p><code>order</code> 的理解相对简单很多，就是看哪个数值大，越大越往后排就好了。就比如下面这个 demo 中的 <strong>item_3</strong> 的样式是 <code>order: 3;</code> 比如何一个 <strong>item</strong> 的值都要大，所以在效果图是排到最后的，而 <strong>item_0</strong> 的值是 <code>-1</code>，最小，因此排在所有元素的前面。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0054.css
  order 的效果演示
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_1</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_2</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_3</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 114<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_4</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_9</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item_0</span> <span class="token punctuation">{</span>
  <span class="token property">order</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+t+'" style="zoom:50%;"><p>是的，这就是一个很<a href="../../demo.html?id=54">简单的属性</a>，但是对于页面布局来说还是比较有用的，相对于那些经常需要改变页面元素位置的站点而言。比如当用户拖动一个模块到页面最前面，我们只要把 <code>order</code> 改为最小的一个值就可以实现了，不需要去修改 dom 节点或者计算每个模块的位置。</p>',17),o=[c];function l(r,u){return a(),e("div",null,o)}const k=s(i,[["render",l],["__file","order.html.vue"]]);export{k as default};
