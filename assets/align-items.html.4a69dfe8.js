import{_ as s}from"./02-05-14.8938fca1.js";import{_ as e,o as a,c as l,a as i}from"./app.8a7fda1c.js";const n="/flex_learn_manual/image/02-06-01.png",c="/flex_learn_manual/image/02-06-02.png",t="/flex_learn_manual/image/02-06-03.png",o="/flex_learn_manual/image/02-06-04.png",p="/flex_learn_manual/image/02-06-05.png",d="/flex_learn_manual/image/02-06-06.png",r="/flex_learn_manual/image/02-06-07.png",u="/flex_learn_manual/image/02-06-08.png",m="/flex_learn_manual/image/02-06-09.png",v="/flex_learn_manual/image/02-06-10.png",k="/flex_learn_manual/image/02-06-11.png",x="/flex_learn_manual/image/02-06-12.png",f="/flex_learn_manual/image/02-06-13.png",b="/flex_learn_manual/image/02-06-14.png",g="/flex_learn_manual/image/02-06-15.png",h="/flex_learn_manual/image/02-06-16.png",_="/flex_learn_manual/image/02-06-17.png",y="/flex_learn_manual/image/02-06-18.png",w="/flex_learn_manual/image/02-06-19.png",z="/flex_learn_manual/image/02-06-20.png",j={},S=i(`<h1 id="📕-flex-容器-align-items" tabindex="-1"><a class="header-anchor" href="#📕-flex-容器-align-items" aria-hidden="true">#</a> 📕 flex 容器：align-items</h1><p>在前面有关 <code>justify-content</code> 的时候，我们提到了给 flex 容器设置一个高度，让以 <code>column</code> 方向排列的元素在特定高度内出现“换行”的现象。那么我们再往这个 <a href="../../demo.html?id=22">demo</a> 之前看看，如果我们是以 <code>row</code> 方向排列的话，并且设置了一个高度，flex 元素在容器中会是怎么样的一个表现形式呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0022.css
  当 flex-direction 为默认的 row 时，flex 容器高度较大的页面效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们先回顾一下当没有高度的时候，页面中 flex 元素排列布局情况。</p><img src="`+s+'" style="zoom:50%;"><p>现在我们给 flex 容器增加了高度，而根据 flex 布局的一个特性，“<strong>弹</strong>”，所以，我们可以看到，浏览器在默认情况下，如果 flex 容器空间足够，flex 元素会拉伸去填充。</p><img src="'+n+'" style="zoom:50%;"><p>这就是我们接下来要学习的属性：<code>align-items</code>，可控制 flex 元素在“交叉轴”方向上的对齐方式。在 flex 弹性布局中，<code>align-items</code> 的属性值其实还好，也就下面这么几个：</p><ul><li><code>normal</code> / <code>stretch</code></li><li><code>flex-start</code></li><li><code>flex-end</code></li><li><code>center</code></li><li><code>baseline</code></li></ul><h2 id="属性值介绍" tabindex="-1"><a class="header-anchor" href="#属性值介绍" aria-hidden="true">#</a> 属性值介绍</h2><p>简单来说，在 flex 弹性布局中，我们通过 <code>align-items</code> 主要是希望控制 flex 元素在“交叉轴”方向的对齐方式。而对齐方式无非就是顶部、中间、底部，然后 flex 弹性布局中还有就是拉伸以及基线对齐方式。</p><h3 id="normal-stretch" tabindex="-1"><a class="header-anchor" href="#normal-stretch" aria-hidden="true">#</a> normal / stretch</h3><p><code>normal</code> 作为 <code>align-items</code> 的<strong>默认值</strong>，但从效果上来说，与 <code>stretch</code> 的是一致的，因此就将这两个放在一起，以 <code>stretch</code> 作为属性值来做 demo 展示。是的，刚提到了，<code>align-items</code> 的默认值是 <code>normal</code>，而 <code>normal</code> 的效果又类似于 <code>stretch</code>，那么我们可以粗暴地理解最终的效果就是 <code>stretch</code> 。</p><p><code>stretch</code> 会将 flex 元素拉伸至 flex 容器所能容纳得下的高度/宽度，以交叉轴为方向。简单来说，当 flex 元素未被 <code>flex-wrap</code> 设置换行，那么每个 flex 元素的高度都将会与 flex 容器相同。</p><p>大概情况可能就是这样了：</p><img src="'+c+'" style="zoom:50%;"><p>而如果按照我们在文章前面看到的 <strong>demo_0022</strong>，在设置了 flex 容器的高度的基础之上，又设置了 <code>flex-wrap: wrap;</code> 的换行处理，最终得到的是在有限的空间中，在交叉轴中，平均合理分配每个 flex 元素的空间（宽高），所以，得到效果是：</p><img src="'+n+'" style="zoom:50%;"><p>需要注意的一点是：<code>stretch</code> 是拉伸的，所以，看到每个元素的高度都是拉伸开的，并且这是默认值的情况。按照目前的情况，我们的 <code>flex-direction</code> 采用的是默认值 <code>row</code>，那么如果我们使用 <code>column</code> 会是怎么样的呢？只用 <strong>demo_0022</strong> 这个增加 <code>flex-direction: column;</code> 的话，会得到这样的一个情况，并没有被拉伸。</p><img src="'+t+`" style="zoom:50%;"><p>通过 devTools 我们可以看到 flex 元素的宽度其实是 <code>padding</code> 和 <code>width</code> 的总和，<code>80px</code>。所以，我们还是需要把每个 flex 元素的 <code>width</code> 删掉才能得到<a href="../../demo.html?id=23">最终想要的效果</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0023.css
	当 flex-direction 为 column 时，默认的 align-items 的表现结果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-evenly<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 60px; */</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 200px; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" style="zoom:50%;"><p>所以，当我们使用的 <code>flex-direction</code> 是 <code>column</code> 时，其实也就是换了一个方向去拉伸。不过鉴于目前看到拉伸的是宽度，所以，如果有 <code>width</code> 的时候，整体效果会受到影响。</p><h3 id="flex-start" tabindex="-1"><a class="header-anchor" href="#flex-start" aria-hidden="true">#</a> flex-start</h3><p><code>flex-start</code> 从 <strong>flex</strong> 和 <strong>start</strong> 这两个单词来看就很容易理解了，首先 <code>align-items</code> 是控制 flex 元素在交叉轴方向的对齐排列方式，其次这个 start 表明了是从起始线开始的位置对齐。结合这两个条件，那么在我们默认的情况下 flex 元素是在 flex 容器的左上角。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0024.css
  align-items: flex-start; 在默认情况下的页面表现效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+`" style="zoom:50%;"><p>按照前面的 <a href="../../demo.html?id=24">demo</a> 情况，这里我们可以考虑给每个 flex 元素增加宽度，以形成区别。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0025.css
  在 flex 元素增加宽度之后的 align-items: flex-start; 对齐展示效果；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+d+`" style="zoom:50%;"><p>好像除了<a href="../../demo.html?id=25">第六个 flex 元素的宽度变了</a>，其他的感觉上并没有太大的变化。这个主要是因为 flex 是弹性布局，我们在没有具体控制每个 flex 元素的弹性特性时，现在所看到的宽度也并非是真实的宽度。而且，在 flex 弹性布局中，如果 <code>flex-direction</code> 是默认值 <code>row</code> 的话，是会一行排列下去的，因此，我们就需要考虑增加一个 <code>flex-wrap</code> 属性来让其换行展示。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0026.css
  在 flex 元素增加宽度之后的 align-items: flex-start; 对齐展示效果；
  让 flex 元素具有换行特性；
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+'" style="zoom:50%;"><p><a href="../../demo.html?id=26">现在这样</a>，如果一行放不下，就换行展示，最终的 flex 元素的宽度也是正确的了。这里需要注意，目前 flex 容器是有 <code>height</code> 值，浏览器会根据具体的高度值，将 flex 元素等分排列。</p><h4 id="flex-容器大于-flex-元素的高度总和时" tabindex="-1"><a class="header-anchor" href="#flex-容器大于-flex-元素的高度总和时" aria-hidden="true">#</a> flex 容器大于 flex 元素的高度总和时</h4><p>就如上图所示，在未使用 <code>stretch</code> 时，会产生相近值的间距。</p><h4 id="flex-容器小于-flex-元素的高度总和时" tabindex="-1"><a class="header-anchor" href="#flex-容器小于-flex-元素的高度总和时" aria-hidden="true">#</a> flex 容器小于 flex 元素的高度总和时</h4><p>在未设置任何与 <code>overflow</code> 相关的属性时，这种情况下，我们可以看到 flex 元素就是超出 flex 容器的。而如果我们在这种情况下对 flex 容器增加 <code>overflow</code> 属性，那么就可以实现截断或者滚动的效果。</p><img src="'+u+`" style="zoom:50%;"><h3 id="flex-end" tabindex="-1"><a class="header-anchor" href="#flex-end" aria-hidden="true">#</a> flex-end</h3><p>在了解了 <code>flex-start</code> 之后，那么对于 <code>flex-end</code> 就简单易懂了，<strong>start</strong> 是在起始线的位置开始对齐，那么 <strong>end</strong> 就是终止线的位置开始对齐了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0027.css
  基于 26号 demo 的情况改变 align-items 值为 flex-end 后的页面效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 60px; */</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token comment">/* width: 200px; */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里暂时先把 <code>width</code> 部分注释，我们看一下 <code>align-items: flex-end;</code> 的<a href="../../demo.html?id=27">页面效果</a>。</p><img src="`+m+'" style="zoom:50%;"><p>接着我们可以把 <code>width</code> 的注释去掉，可以看到效果其实就是从下往上排列，间距是在上方的 flex 元素对齐方式。从感官上可以感受到，是以底部为对齐方式，通过间距将元素均分了。</p><img src="'+v+'" style="zoom:50%;"><p>而如果其中有一个 flex 元素的高度有差异，比如我们将第五个 flex 元素的 <code>height</code> 设置为 <code>80px</code> 的话，将会看到这样的一个布局排列情况。</p><img src="'+k+`" style="zoom:50%;"><p>这时我们可以看到，第二行的几个元素对齐方式是不是有点不一样了呢？6 和 7 都是相对于 5 的底部对齐的。看到这个，回想一下 <code>flex-start</code>，如果我们将 <code>align-items</code> 的值换成 <code>flex-start</code> 后会是怎么样的呢？</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0028.css
  align-items: flex-start; 时并且第五个 item 高度改变的情况
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
<span class="token punctuation">}</span>
<span class="token comment">/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */</span>
<span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 改变第 5 个 flex 元素的高度 */</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照 <code>flex-end</code> 的表现来看，那么这个时候我们能够<a href="../../demo.html?id=28">看到的效果</a>，应该是 6 和 7 会相对于 5 的顶部来对齐，并且整体的 flex 元素是从 flex 容器顶部开始排列下来的。</p><img src="`+x+`" style="zoom:50%;"><h3 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> center</h3><p>基于对 <code>flex-start</code> 和 <code>flex-end</code> 的理解，对于理解 <code>center</code> 就简单多了。<strong>上中下</strong>、<strong>左中右</strong>，无论我们的如果设置 <code>flex-direction</code> 的值，对于 <code>align-items: center;</code> 而言，对齐的方式就是中间。我们就对上个 demo 做一个简单调整：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0029.css
  基于 demo_0028 修改 align-items: center; 后的效果
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>align-items</code> 的值为 <code>center</code>，我们可以<a href="../../demo.html?id=29">看到 flex 元素的排列方式</a>就是以居中的方式对齐了。</p><img src="`+f+`" style="zoom:50%;"><p>无论是 6 和 7 相对于 5 的对齐方式，还是每个 flex 元素相对于 flex 容器的对齐方式。那么这个时候我们再将每个元素的宽高全部去掉之后，按照之前的 demo 情况来看，应该会看到所有的 flex 元素居中显示。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0030.css
  flex 元素没有宽高时的 align-items: center; 的对齐方式
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+b+`" style="zoom:50%;"><p>对于已经掌握了 <code>align-items</code> 对齐方式的你，<a href="../../demo.html?id=30">这个也就没有任何难度可言</a>，理解起来应该就是那么的简单，那么的容易了。这个时候不知道你是否会想起上个章节中我们学过的 <code>justify-content</code> 属性呢？如果这个时候我们再来一个 <code>justify-content: center;</code> 之后会是怎么样呢？不妨试试？</p><p>前面我们提到，<strong>上中下</strong>、<strong>左中右</strong> ，对于 <code>align-items: center;</code> 对齐的结果都是中间，<a href="../../demo.html?id=31">如下调整了之后</a>，flex 元素排列方式改变，但还是在中间。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0031.css
  改变 flex-direction 后的 align-items: center; 的对齐方式
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token comment">/* flex-wrap: wrap; */</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token comment">/* height: 200px; */</span>
  <span class="token comment">/* 在这里给 flex 容器设置了高度 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+g+`" style="zoom:50%;"><p>**改变 <code>flex-direction</code> 的时候，也将代表改变了主轴与交叉轴交换了位置，但无法改变 <code>justify-content</code> 和 <code>align-items</code> 分别是相对主轴和交叉轴进行对齐的原则。**万变不离其宗，无论怎么变，我们只要知道了主轴和交叉轴的位置，就能较好地掌握 flex 弹性布局了。</p><h3 id="baseline" tabindex="-1"><a class="header-anchor" href="#baseline" aria-hidden="true">#</a> baseline</h3><p>在 CSS 的对齐范畴中，不仅仅只有<strong>上中下</strong>几个位置的对齐，还有相对于文本的特性做对齐方式的，比如我们使用 <code>line-height</code> 做单行垂直居中，比如使用 <code>veritcal-align</code> 做文本垂直对齐方式。这些基本上都是与文本的某些特性有关，比如“基线”。</p><p>这个延伸来说明的话，又将会是一篇长文，这里就不扩展了。在 <code>align-items</code> 中，我们只要知道，还有一个属性值是 <code>baseline</code>，用这个属性值我们可以将 flex 元素以文本的基线为基准做对齐。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
  file: flex_0032.css
  align-items: baseline; 的对齐方式
*/</span>
<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
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
<span class="token comment">/* 改变第 5 个 flex 元素的高度 */</span>
<span class="token selector">.item_5</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个 <a href="../../demo.html?id=32">demo</a> 中，保持之前的一些属性，修改 <code>.demo</code> 中的 <code>align-items</code> 属性值为 <code>baseline</code>，那么我们可以看到目前的页面效果与 <code>flex-start</code> 没什么差别，对吧。</p><img src="`+h+`" style="zoom:50%;"><p>或许这也就是 CSS 的魅力所在，看似相同的效果，但往往隐藏着在特定情况下才会被触发的情况。比如我们现在对 <code>.item_6</code> <a href="../../demo.html?id=33">做一些调整</a>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item_6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token comment">/* 将字体大小放大 */</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+_+'" style="zoom:50%;"><p><a href="../../demo.html?id=33">可以看到</a> <code>.item_6</code> 这个元素旁边的的 flex 元素对齐时，无论 <code>.item_6</code> 中的字体大小如何变化，对齐的位置是不会改变的。我们来粗浅地了解一下这个所谓的“基线”。</p><img src="'+y+'" style="zoom:50%;"><p>我们在原有的效果图上，增加一条直线，可以看到 5、6、7 这三个数字底部近乎是在一条线上的。对于基线而言，不同的字体在设计之初所设定的极限值不同，最终也将会影响这个对齐的效果。比如我们对全局使用了 <code>font-family: Georgia;</code> 并且调整了文字大小 <code>font-size: 20px;</code> 之后，会发现如下图的效果，数字 6 不再与 5、7 保持同一条线上了。</p><img src="'+w+'" style="zoom:50%;"><p>这只是感官上偏移了，但实际上还是以“基线”的方式在对齐元素。在 flex 弹性布局中，<code>baseline</code> 的对齐效果，不在乎 flex 元素的文字内容多少，而是在乎于文字大小所影响的基线值。如下图，假设我们把 5、6 的文字内容修改后，会发现 <code>baseline</code> 的对齐方式与第一行有关联的。</p><img src="'+z+'" style="zoom:50%;"><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p><code>align-items</code> 以交叉轴为对齐方向，根据不同的属性值表现出不同的对齐方式。</p><ul><li><code>stretch</code> 拉伸的效果与 flex 容器和 flex 元素的 size 有关；</li><li><code>flex-start</code> 、<code>flex-end</code> 以及 <code>center</code> 是最基本的三个方向的对齐方式；</li><li><code>baseline</code> 将会受到 flex 元素中字体以及字体大小的关系，从而影响对齐效果；</li></ul>',84),B=[S];function C(E,G){return a(),l("div",null,B)}const T=e(j,[["render",C],["__file","align-items.html.vue"]]);export{T as default};
