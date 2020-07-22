

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

这就是我们接下来要学习的属性：`align-items`，可控制 flex 元素在“交叉轴”方向上的对齐方式。





