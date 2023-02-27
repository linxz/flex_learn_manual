import{_ as e}from"./02-02-2.e3c325af.js";import{_ as n,o as s,c as o,a as c}from"./app.8a7fda1c.js";const i="/flex_learn_manual/image/02-02-1.png",a="/flex_learn_manual/image/02-02-3.png",l="/flex_learn_manual/image/02-02-4.png",d="/flex_learn_manual/image/02-02-5.png",r="/flex_learn_manual/image/02-02-6.png",t="/flex_learn_manual/image/02-02-7.png",p="/flex_learn_manual/image/02-02-8.png",u="/flex_learn_manual/image/02-02-9.png",m={},v=c('<h1 id="📕-flex-容器-flex-direction" tabindex="-1"><a class="header-anchor" href="#📕-flex-容器-flex-direction" aria-hidden="true">#</a> 📕 flex 容器：flex-direction</h1><p>在 flex 弹性布局的时候，我们可能会对 flex 元素的排列位置有要求，比如从左到右，从下到上这类非常规的布局方向需求，那么 <code>flex-direction</code> 就能够很容易帮助我们实现。前面提到的“主轴”和“交叉轴”，以及提到“起始线”和“终止线”的时候，<code>flex-direction</code> 在这几个的变化中起到决定性的作用。</p><p>简单来说，<code>flex-direction</code> 属性将会定义 flex 弹性布局中“主轴”的方向，从而影响着 flex 元素如何在 flex 容器内的布局。其主要的属性值有：</p><ul><li><code>row</code></li><li><code>row-reverse</code></li><li><code>column</code></li><li><code>column-reverse</code></li></ul><p>四个值改变着“主轴”的位置，也同时改变着“起始线”的位置，最终影响着 flex 元素的布局结果。</p><h2 id="row-与-row-reverse" tabindex="-1"><a class="header-anchor" href="#row-与-row-reverse" aria-hidden="true">#</a> row 与 row-reverse</h2><p><code>row</code> 顾名思义，就是“行”。一行两行的行，那也就代表着当使用 <code>flex-direction: row;</code> 的时候，flex 元素的将一行排列方式展示。因为 <code>row</code> 是 <code>flex-direction</code> 的默认值，所以，在前面我们所看的 <a href="../../demo.html?id=5">demo</a> 的初始效果就是了。</p><img src="'+i+`" alt="row" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0005.css
  flex-direction: row 时 flex 元素的排列效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，这个时候我们需要知道“主轴”和“起始线”的位置。在前面我们已经提到过，“主轴”的方向，“起始线”的位置是与 <code>flex-direction</code> 的值息息相关的。那么这个时候我们所能得到的结果其实就是这样：</p><img src="`+e+'" style="zoom:50%;"><p>所以当我们选择使用 <code>row-reverse</code> 方向的行时，<a href="../../demo.html?id=6">得到的结果</a>就是：</p><img src="'+a+`" style="zoom:50%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0006.css
  flex-direction: row-reverse 时 flex 元素的排列效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显可以看到 flex 元素的位置发生了变化，都反过来了，第一个元素显示在 flex 容器的最右侧。那么这个时候的“主轴”和“起始线”会是什么位置呢？还是跟 <code>flex-direction: row;</code> 的结果一样吗？答案很显然，<code>row</code> 和 <code>row-reverse</code> 是相反的一个操作，所以，此时的“主轴”和“起始线”就是这样了：</p><img src="`+l+`" style="zoom:50%;"><p><code>row</code> 与 <code>row-reverse</code> 对于“主轴”而言，其实就是行，也就是说，当使用的是 <strong>row</strong> 时，X 坐标的轴线就是“主轴”，相对的，“交叉轴”一直都是以 Y 坐标的形式存在着。而 <strong>reverse</strong> 的出现则是影响了“起始线”与“终止线”的位置，如果仅仅只是 <code>row</code> 的话，“起始线”的位置就是当前语言环境下的阅读顺序，反之，使用了 <code>row-reverse</code> 就会得到相反的结果。</p><p>这里提到当前语言环境下的阅读顺序，一般我们的阅读浏览顺序是从左往右，从上到下。假如我们<a href="../../demo.html?id=7">人为修改这个顺序方向</a>，那么对于“起始线”和“终止线”是否会有影响呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0007.css
  修改 direction 的值，改变阅读顺序
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
  <span class="token property">direction</span><span class="token punctuation">:</span> rtl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在 <code>flex-direction: row;</code> 的情况下通过 <code>direction</code> 改变了方向之后，得到的结果就跟我们使用 <code>flex-direction: row-reverse;</code> 是一样的。所以，flex 布局中的“起始线”还跟 <code>direction</code> 的值是有关系的，并不仅仅只是看 <code>flex-direction</code> 的值。</p><h2 id="column-与-column-reverse" tabindex="-1"><a class="header-anchor" href="#column-与-column-reverse" aria-hidden="true">#</a> column 与 column-reverse</h2><p>了解了 <code>row</code> 之后，我们再看看 <code>column</code>。<code>row</code> 指的是行，那么 <code>column</code> 指的肯定就是列了。所以，当我们想要得到这样的一个页面布局效果时，只要改变 <code>flex-direction</code> 的值就可以了。</p><img src="`+d+`" style="zoom:40%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0008.css
  flex-direction: column; 时的页面布局效果。
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从<a href="../../demo.html?id=8">页面</a>截图来看，现在 flex 元素是从上至下的排列，一个 flex 元素占据一行。从这里我们也就可以发现，“主轴”发生了变化，而且“起始线”与“终止线”也变了。</p><img src="`+r+'" style="zoom:50%;"><p>同理，当我们使用 <code>flex-direction: column-reverse;</code> 时，得到的 flex <a href="../../demo.html?id=9">布局结果</a>就是反了个方向的。</p><img src="'+t+`" style="zoom:40%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0009.css
  flex-direction: column-reverse; 时的页面布局效果。
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个元素的高度并不想宽度一样会自动撑满屏幕，所以，在默认情况下，当我们使用 <code>row-reverse</code> 属性值时，flex 元素会从浏览器边缘部分开始；而当我们使用 <code>column-reverse</code> 时，并不是从浏览器的最底下开始，除非当前的 flex 容器高度与浏览器可视区相同高度。简而言之，<code>column-reverse</code> 是从 flex 容器的底部开始向上排列，是的，就是从下往上的一个布局。</p><p>因此，当使用 <code>column-reverse</code> 时的“主轴”与“起始线”等情况就是这样了：</p><img src="`+p+'" style="zoom:50%;"><p>当 <code>flex-direction</code> 的值是 <code>column</code> 或者 <code>column-reverse</code> 时，<code>direction</code> 属性就不再会影响 flex 元素的排列了，而只是让改变了 flex 元素中<a href="../../demo.html?id=10">文字的显示方向</a>。</p><img src="'+u+`" style="zoom:40%;"><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
  file: flex_0010.css
  flex-direction: column; 时，添加 direction: rtl; 的页面效果。
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">direction</span><span class="token punctuation">:</span> rtl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性之间" tabindex="-1"><a class="header-anchor" href="#属性之间" aria-hidden="true">#</a> 属性之间……</h2><p>在 CSS 的世界中，每个属性都有各自的作用，而多个属性结合的时候，得到的结果可能是想冲突的，就好比 <code>flex-direction: row;</code> 与 <code>direction: rlt;</code> 共存时；而有的时候却并不会，就像 <code>flex-direction: column;</code> 与 <code>direction: rtl;</code> 共存时。</p><p>但这些只是表面现象而已，只要我们明白了 <code>flex-direction</code> 与 <code>direction</code> 这两个 <strong>direction</strong> 所影响的元素是哪些，那么也就能明白如何利用好这两个属性了。在众多的 CSS 属性中，影响页面阅读方向、元素排列方向的并不只是这么两个带有 <strong>direction</strong> 单词的元素，这里就不再继续展开，在后续的章节中会通过相关的 demo 与大家一起共同了解。</p><p>通过这章节我们主要了解的是 <code>flex-direction</code> 属性，对于该属性，我们需要了解当使用不同的属性值时，对于 flex 布局中的“主轴”、“起始线”等特性是会产生变化的。而“主轴”与“起始线”的变化，最终将会影响到 flex 元素的排列对齐方式，也就是后面我们会介绍的几个有关 flex 元素对齐的属性。</p><ul><li>x 坐标轴是“主轴”，<code>flex-direction</code> 的值是 <strong>row</strong> 相关的；反之就是 <strong>column</strong>；</li><li>第一个 flex 元素哪边靠 flex 容器边缘，哪边就有可能是“起始线”，具体在哪边，还要看“主轴”；</li></ul>`,40),f=[v];function x(g,b){return s(),o("div",null,f)}const h=n(m,[["render",x],["__file","flex-direction.html.vue"]]);export{h as default};
