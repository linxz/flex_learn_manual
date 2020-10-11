在 flex 元素中使用频率较高的应该是 `flex` 这个属性了，该属性是一个简写属性，包含了 `flex-grow`、`flex-shrink` 以及 `flex-basis` 这三个属性。由于这三个属性的属性值自身特点，所以，`flex` 属性的单位值可以为：

* 无单位、纯数字，且必须大于等于 **0**，主要作用于 `flex-grow` 和 `flex-shrink`；
* 具有有效单位的值，主要作用于 `flex-basis`；
* 特定的关键词；

而作为简写方式存在的 `flex` 属性，所拥有的属性值包含了：一个值、两个值以及三个值的写法。在进一步了解这三种属性值写法之前，我们要先记住上面提到的 `flex` 属性值的写法特色。

> **注意：** `flex` 属性中每个属性其自身原有的默认属性值保持不变，如在 `flex` 未特别处理声明，将会使用默认值。

### 一个值的 `flex` 属性

在日常前端开发过程中，普遍前端开发人员在写 flex 布局时，是直接使用 `flex: 1;` 或者 `flex: 0;` 来使用的。对于这样的处理方式，相对来说 `flex` 这个简写方式带来了不少遍历，并且能够快速满足 flex 布局中每个元素的伸缩特性。

但这样盲目地使用，相对而言是不够严谨的。在本文开头已经提到了 `flex` 的几种属性值的写法，根据这几种写法，大概罗列后为：

```css
/* 
  file: flex_0048.css
  flex 仅有一个属性值时的情况，主要是为了观察在 DevTools 中解析 flex 后每个值的变化；
*/
.demo {
  flex-wrap: wrap;
  /* 在这里给 flex 容器设置了高度 */
  border: 1px solid #000;
}
/* 仅为了观察 flex 属性值的变化，隐藏部分不需要的元素 */
.item:nth-child(n+9) {
  display: none;
}
.item_1 {
  flex: 3;
}
.item_2 {
  flex: 1;
}
.item_3 {
  flex: 0;
}
.item_4 {
  flex: 0%;
}
.item_5 {
  flex: 200px;
}
.item_6 {
  flex: auto;
}
.item_7 {
  flex: none;
}
.item_8 {
  flex: initial;
}
```

一步到位，把几种情况展示一下。以上 demo 对于浏览器的渲染结果暂不做考虑，而仅从 DevTools 中去查看每个 **item** 在不同的 `flex` 属性值下的解析结果。

#### item_1 && item_2

显然，这两个 **item** 的主要区别就是数字的大小不同，主要是考虑更容易区分 `flex-grow` 和 `flex-shrink` 的默认值。

首先我们来看 `flex: 3;` 的结果：

<img src="image/02-10-20.png" style="zoom:50%;" />

从结果可以看到，`flex-grow` 的值改变了，而 `flex-shrink` 保持着默认值为 `1` 的结果，至于 `flex-basis` 不再是 `auto` 这个默认值，而是转为 `0%`，同理，`flex: 1;` 的结果，应该也就是 `flex-grow` 为 `1`，具体的我们可以看 **.item_2** 的结果。

<img src="image/02-10-21.png" style="zoom:50%;" />

所以，最终，`flex` 值为大于 0 的无单位值的数字时，将代表该元素是可伸缩的元素，至于伸展的比例就需要根据最终的值而定。

#### item_3





