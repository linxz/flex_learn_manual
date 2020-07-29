

在前面有关 `justify-content` 的时候，我们提到了给 flex 容器设置一个高度，让以 `column` 方向排列的元素在特定高度内出现“换行”的现象。那么我们再往这个 demo 之前看看，如果我们是以 `row` 方向排列的话，并且设置了一个高度，flex 元素在容器中会是怎么样的一个表现形式呢？

```css
/* 
  file: flex_0022.css
  当 flex-direction 为默认的 row 时，flex 容器高度较大的页面效果；
*/
.demo {
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 400px;
  /* 在这里给 flex 容器设置了高度 */
```

我们先回顾一下当没有高度的时候，页面中 flex 元素排列布局情况。

<img src="image/02-05-14.png" style="zoom:50%;" />

现在我们给 flex 容器增加了高度，而根据 flex 布局的一个特性，“弹”，所以，我们可以看到，浏览器在默认情况下，如果 flex 容器空间足够，flex 元素会拉伸去填充。

<img src="image/02-06-01.png" style="zoom:50%;" />

这就是我们接下来要学习的属性：`align-items`，可控制 flex 元素在“交叉轴”方向上的对齐方式。在 flex 弹性布局中，`align-items` 的属性值其实还好，也就下面这么几个：

* `normal` / `stretch`
* `flex-start`
* `flex-end`
* `center`
* `baseline`

## 属性值介绍

简单来说，在 flex 弹性布局中，我们通过 `align-items` 主要是希望控制 flex 元素在交叉轴方向的对齐方式。而对齐方式无非就是顶部、中间、底部，然后 flex 弹性布局中还有就是拉伸以及基线对齐方式。

### normal / stretch

`normal` 作为 `align-items` 的**默认值**，但从效果上来说，与 `stretch` 的是一致的，因此就将这两个放在一起，以 `stretch` 作为属性值来做 demo 展示。是的，刚提到了，`align-items` 的默认值是 `normal`，而 `normal` 的效果又类似于  `stretch`，那么我们可以粗暴地理解最终的效果就是 `stretch` 。

`stretch` 会将 flex 元素拉伸至 flex 容器所能容纳得下的高度/宽度，以交叉轴为方向。简单来说，当 flex 元素未被 `flex-wrap` 设置换行，那么每个 flex 元素的高度都将会与 flex 容器相同。

大概情况可能就是这样了：

<img src="image/02-06-02.png" style="zoom:50%;" />

而如果按照我们在文章前面看到的 **demo_0022**，在设置了 flex 容器的高度的基础之上，又设置了 `flex-wrap: wrap;` 的换行处理，最终得到的是在有限的空间中，在交叉轴中，平均合理分配每个 flex 元素的空间（宽高），所以，得到效果是：

<img src="image/02-06-01.png" style="zoom:50%;" />

需要注意的一点是：`stretch` 是拉伸的，所以，看到每个元素的高度都是拉伸开的，并且这是默认值的情况。按照目前的情况，我们的 `flex-direction` 采用的是默认值 `row`，那么如果我们使用 `column` 会是怎么样的呢？只用 **demo_0022** 这个增加 `flex-direction: column;` 的话，会得到这样的一个情况，并没有没拉伸。

<img src="image/02-06-03.png" style="zoom:50%;" />

通过 devTools 我们可以看到 flex 元素的宽度其实是 `padding` 和 `width`  的总和，`80px`。所以，我们还是需要把每个 flex 元素的 `width` 删掉才能得到最终想要的效果。

```css
/* 
  file: flex_0023.css
	当 flex-direction 为 column 时，默认的 align-items 的表现结果；
*/
.demo {
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 400px;
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
  flex-direction: column;
}
.item {
  /* width: 60px; */
}
/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */
.item_6 {
  /* width: 200px; */
}
```

<img src="image/02-06-04.png" style="zoom:50%;" />

所以，当我们使用的 `flex-direction` 是 `column` 时，其实也就是换了一个方向去拉伸。不过鉴于目前看到拉伸的是宽度，所以，如果有 `width` 的时候，整体效果会受到影响。

### flex-start

`flex-start` 从 **flex** 和 **start** 这两个单词来看就很容易理解了，首先 `align-items` 是控制 flex 元素在交叉轴方向的对齐排列方式，其次这个 start 表明了是从起始线开始的位置对齐。结合这两个条件，那么在我们默认的情况下 flex 元素是在 flex 容器的左上角。

```css
/* 
  file: flex_0024.css
  align-items: flex-start; 在默认情况下的页面表现效果；
*/
.demo {
  align-items: flex-start;
  height: 200px;
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
```

<img src="image/02-06-05.png" style="zoom:50%;" />

按照前面的 demo 情况，这里我们可以考虑给每个 flex 元素增加宽度，以形成区别。

```css
/* 
  file: flex_0025.css
  在 flex 元素增加宽度之后的 align-items: flex-start; 对齐展示效果；
*/
.demo {
  align-items: flex-start;
  height: 200px;
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
.item {
  width: 60px;
}
/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */
.item_6 {
  width: 200px;
}
```

<img src="image/02-06-06.png" style="zoom:50%;" />

好像除了第六个 flex 元素的宽度变了，其他的感觉上并没有太大的变化。这个主要是因为 flex 是弹性布局，我们在没有具体控制每个 flex 元素的弹性特性时，现在所看到的宽度也并非是真实的宽度。而且，在 flex 弹性布局中，如果 `flex-direction` 是默认值 `row` 的话，是会一行排列下去的，因此，我们就需要考虑增加一个 `flex-wrap` 属性来让其换行展示。

```css
/* 
  file: flex_0026.css
  在 flex 元素增加宽度之后的 align-items: flex-start; 对齐展示效果；
  让 flex 元素具有换行特性；
*/
.demo {
  flex-wrap: wrap;
......
```

<img src="image/02-06-07.png" style="zoom:50%;" />

现在这样，如果一行放不下，就换行展示，最终的 flex 元素的宽度也是正确的了。这里需要注意，目前 flex 容器是有 `height` 值，浏览器会根据具体的高度值，将 flex 元素等分排列。

#### flex 容器大于 flex 元素的高度总和时

就如上图所示，在未使用 `stretch` 时，会产生相近值的间距。

#### flex 容器小于 flex 元素的高度总和时

在未设置任何与 `overflow` 相关的属性时，这种情况下，我们可以看到 flex 元素就是超出 flex 容器的。而如果我们在这种情况下对 flex 容器增加 `overflow` 属性，那么就可以实现截断或者滚动的效果。

<img src="image/02-06-08.png" style="zoom:50%;" />

### flex-end

在了解了 `flex-start` 之后，那么对于 `flex-end` 就简单易懂了，**start** 是在起始线的位置开始对齐，那么 **end** 就是终止线的位置开始对齐了。

```css
/* 
  file: flex_0027.css
  基于 26号 demo 的情况改变 align-items 值为 flex-end 后的页面效果
*/
.demo {
  flex-wrap: wrap;
  align-items: flex-end;
  height: 200px;
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
.item {
  /* width: 60px; */
}
/* 让第 6 个 flex 元素的宽度 变大，看看布局效果的变化。 */
.item_6 {
  /* width: 200px; */
}
```

这里暂时先把 `width` 部分注释，我们看一下 `align-items: flex-end;` 的页面效果。

<img src="image/02-06-09.png" style="zoom:50%;" />

接着我们可以把 `width` 的注释去掉，可以看到效果其实就是从下往上排列，间距是在上方的 flex 元素对齐方式。

<img src="image/02-06-10.png" style="zoom:50%;" />

### cener





