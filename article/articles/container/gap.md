# 📕 flex 容器：gap

把 `gap` 说是 flex 容器，是不太严谨地说法，只能说 `gap` 是写在 flex 容器中，用于控制 flex 元素之间的间距的。是的，**gap** 在 CSS 属性中的作用主要就是元素之间的间距控制。所以，很显然这个间距必定是列与行的间距。

* `row-gap`
* `column-gap`

换句话说，`gap` 是 `row-gap` 和 `column-gap` 的简写方式，即，`gap` 有两个属性值。

```css
div {
  /* 代表：
  	 row-gap: 10px;
  	 column-gap: 20px;
  */
  gap: 10px 20px;
}
```

## 属性值介绍

间距的属性值比较简单，只要是一个**长度值+单位**就可以了，当然了，也是可以通过 `calc()` 来计算。

默认属性值是 `normal`。

结合[实例看一下效果](/demo.html?id=78)。

```css
/*
  file: flex_0078.css
  使用 gap 属性让 flex item 元素产生间距
*/
.demo {
  border: 1px solid #000;
}

.demo {
  /* 在 flex 容器超过一行的 flex 元素换行显示 */
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
}

.item {
  flex: 1 20%;
}
```

在这里，我们给外层 `.demo` 增加了一个 `gap: 10px;` 的同时，还加了 `padding: 10px;`。至于为什么呢，我们先看一下目前现在这个 demo 的效果。

<img src="/image/02-08-01.png" style="zoom:50%;" />

如没有 `gap` 属性的话，我们要写这个间距，可能就是要用 `margin` 结合 `:nth-child()` 方式来控制。在 **[demo_0070](/demo.html?id=70)** 中我们是用了 `border` 的方式来处理的。总之，相对比较折腾，而 `gap` 就很好地帮我们解决了这个问题。

那么回到前面的问题，为什么要有 `padding` 这个属性值呢。其实主要是因为 `gap` 的作用是元素与元素之间的间距，而不是元素与容器之间的间距。所以，当我们没有 `padding` 值顶开容器与元素的间距，那么就变成这样了。

<img src="/image/02-08-02.png" style="zoom:50%;" />

显然这跟我们想要的还是有差距的。所以，要记住一点：**`gap` 的作用是元素与元素之间的间距**。

该属性值有**长度值+单位**，所以，我们也是可以[使用百分比来实现](/demo.html?id=79)，这样结合 flex 的弹性布局，不是更美哉！想想就开心的感觉，对吧。

```css
/*
  file: flex_0079.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
*/
.demo {
  /* ......省略部分代码...... */
  /* 这里将原来的 10px 改为 10% */
  gap: 10%;
}
```

<img src="/image/02-08-03.png" style="zoom:50%;" />

好像哪里不对，元素与元素上下之间的间距怎么不见了？莫非 `gap: 10%;` 的作用于 `gap: 10px;` 作用是不同的？

<img src="/image/02-08-04.png" style="zoom:50%;" />

但是从这里来看，并没有任何问题，`row-gap` 中已经有 `10%` 这个值了。那是为什么呢？对于百分比而言，都是有一个相对的值来做比较的，在这个 flex 弹性布局中，`gap: 10%;` 中的百分比所比较的值分别是：

* `row-gap` -> `height`
* `column-gap` -> `width`

 而我们现在使用的是 flex 布局，并未设置任何宽高。既然如此，那么我们增加一个 `height` [看看就知道](/demo.html?id=80)了。

```css
/*
  file: flex_0080.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
  增加 height 看一下 gap 效果；
*/
.demo {
  /* ......省略部分代码...... */
  gap: 10%;
  /* 这里增加一个 height，看看 row-gap 效果是否改变 */
  height: 200px;
}
```

<img src="/image/02-08-05.png" style="zoom:50%;" />

鉴于现在我们使用的 `height` 是固定值，所以，当我们改变 flex 容器宽度时，会发现 `column-gap` 的值是在不断变化，而 `row-gap` 则是不会变，永远就是 **200px * 10% = 20px** 的这个结果。

那么问题又来了，如果改变了 `flex-direction` 的话，会不会同时改变了 `row-gap` 和 `column-gap` 的方位呢？

```css
/*
  file: flex_0081.css
  使用 gap 属性让 flex item 元素产生间距，使用百分比作为单位
  增加 height 看一下 gap 效果；
  改变 flex-direction 后看看 gap 的效果；
*/
.demo {
  /* ......省略部分代码...... */
  gap: 10%;
  height: 200px;
  /* 新增一个 flex-direction 的值看效果 */
  flex-direction: column;
}
```

<img src="/image/02-08-06.png" style="zoom:50%;" />

[看这个结果](/demo.html?id=81)，改变的只是 flex 元素的变化，但 `gap` 该怎么体现的，还是继续怎么体现。

## 小结

* `gap` 是处理元素与元素之间的间距；
* 当使用百分比作为单位时，注意 flex 容器的宽高值；

`gap` 这个属性可以让我们在 flex 弹性布局中快速去处理每个 flex 元素的间距问题，不用再去考虑加 `margin` 后元素的样式处理，整体效果还是很赞的。但，有一个很现实的问题是我们必须要去面对的，是的，**兼容性**这个问题我们是无法逃避的。

那么我们看一下 `gap` 属性在 flex 布局中的兼容性情况。

<img src="/image/02-08-07.png" style="zoom:50%;" />

看到 **WD** 这两个字母，再看看那么多红色的小方块，想想也就只是一个期待了。看到 iOS 和 Android 的兼容性后，也就没什么好期待的了，毕竟现在主要还是在移动端去使用 flex 布局居多。
