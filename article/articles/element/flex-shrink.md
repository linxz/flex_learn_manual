# 📕 flex 元素：flex-shrink

在前面我们了解到的 `flex-grow` 是在所有的 flex 元素宽度总和小于 flex 容器的宽度之后，按照特定的比率去分配空间给具有 `flex-grow` 值的 flex 元素。而现在我们要提到的则是与之相反的一个属性，`flex-shrink`，当 flex 元素之和大于 flex 容器的宽度时，具有 `flex-shrink` 属性的 flex 元素会根据特定的比率缩小其自身的宽度。

与 `flex-grow` 相同，`flex-shrink` 的单位也只是数字而已，可以是小数点的数字，但不能是负数，默认值是 `1`。与 `flex-grow` 相同，都是以“主轴”的方向为基准。

## 特性分解

### 默认值的情况

当我们对父元素使用 `display: flex;` 后，其子元素就具备 flex 弹性布局的特性，换言之，就是 flex 元素的默认值也就都有了，比如 `flex-grow: 0;` 以及我们现在要了解的 `flex-shrink`。是的，前面我们提到过了，`flex-shrink` 的**默认值**是 `1`，所以，我们还是从下面这张图开始说起。

<img src="/image/02-10-01.png" style="zoom:50%;" />

### 空间不够分配保留最小可用空间

通过前面对  `flex-grow` 的了解，我们知道现在因为是默认值 `flex-grow: 0;` 的关系，所以每个 flex 元素并不会拉伸，以致于 flex 容器后面有空白的空间存在。那么这个时候我们如果缩小 flex 容器的宽度，是不是就可以触发 `flex-shrink: 1;` 的特性，让每个子元素都缩小呢？

<img src="/image/02-10-12.png" style="zoom:50%;" />

从截图中可以看到，其实这个时候已经没办法再缩小了，因为每个 flex 元素已经是只能容下其自身的内容了。

<img src="/image/02-10-13.png" style="zoom:50%;" />

就算我们再加上很多内容其实也一样，这个时候能显示的空间就是该元素自身可正常显示的元素空间，一个汉字的大小，一个单词的大小，一张图片的大小……

### 人为控制可缩小的最小空间

是的，我们可以人为控制每个 flex 元素最终缩小后的空间大小，比如下面这样：

<img src="/image/02-10-14.png" style="zoom:50%;" />

对于这个其实也并没有做过多的样式处理，而是使用 `min-width` 控制了 **item_5** 这个[元素的最小宽度值](/demo.html?id=45)。

```css
/* 
  file: flex_0045.css
  flex-shrink 默认值的情况下，增加其中一个元素宽度的效果；
*/
.demo {
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
.item_5 {
  min-width: 100px;
}
```

### 设定比例值的 flex-shrink

在前面我们使用的是 `flex-shrink` 的默认值 `1`，那么如果我们[设定不同的比例值](/demo.html?id=46)，会是怎么样的一个结果呢。

```css
/* 
  file: flex_0046.css
  flex-shrink 不同比例值的页面效果；
*/
.demo {
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
.item {
  flex-shrink: 0.5;
  /* 鉴于 flex-shrink 的缩小特性，设定一个 width 值观察看效果 */
  width: 50px;
}
.item_5 {
  flex-shrink: 2;
}
.item_6 {
  flex-shrink: 1;
}
```

首先我们对每个 **item** 的 `flex-shrink` 设置为 `0.5` ，为了与 **item_6** 形成差异，其次也是比较关键的是，我们现在所做的 demo 效果仅仅只是一个 `flex-shrink`，是很难看到效果的，因此添加一个 `width` 来做差异化对比。

<img src="/image/02-10-15.png" style="zoom:50%;" />

当 flex 容器的宽度足够大，那么每个 flex 元素就不需要被压缩，并且我们也没有设置拉伸，所以，现在看到的效果是每个 flex 元素大家一致，且是 50px 的宽 + 2 个 10px 的 `padding` 内间距，也就是 70px 的大小。

可如果我们将浏览器的宽度缩小，逐渐逐渐缩小的时候，会发现 flex 元素会先从 `.item_5` 这个开始缩，接着是 `.item_6`，最后才是剩余所有元素被压缩到最小可容纳元素内容的尺寸。

<img src="/image/02-10-16.png" style="zoom:50%;" />

<img src="/image/02-10-17.png" style="zoom:50%;" />

## 小结

从 flex 元素的表现情况来分析，`flex-shrink` 的作用仅仅只是用来控制当 flex 容器的空间被缩小时按照特定比例关系先后缩小至可容纳元素内容的最小宽度。在 demo 中，我们发现 `min-width` 与 `width` 是会对 `flex-shrink` 的结果产生影响的。

那么我们设想一下，如果 `flex-shrink: 0; width: 50px;` 这样的一个 **item** 属性值，会有什么结果呢？
