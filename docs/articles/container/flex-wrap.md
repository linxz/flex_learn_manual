# 📕 flex 容器：flex-wrap

当我们使用 `flex-direction: row;` 的时候，flex 元素是会一直横向排列着，就算是超出 flex 容器也还是会一直下去，就好像是单字节的连续英文字符，不会自动换行，需要我们强行去改变。是的，在 flex 布局中，`flex-wrap` 的默认值是不换行，也就是 `nowrap`，而我们在进行页面布局的时候，其实往往是需要让 flex 元素换行的，也就是我们需要使用到 `wrap` 这个属性值。

* `nowrap`
* `wrap`
* `wrap-reverse`

这三个就是 `flex-wrap`  的属性值，其中 `wrap-reverse` 的表现行为与 `wrap` 是一样的，唯一不同的就是方向是相反的，换言之，也就是“起始线”和“终止线”是相反的。

```css
/* 
  file: flex_0011.css
  flex-wrap: wrap; 的页面效果；
*/
.demo {
  flex-wrap: wrap;
}
```

<img src="/image/02-03-1.png" style="zoom:50%;" />

[通过这个图](../../demo.html?id=11)，我们可以看到从第 8 个 flex 元素开始，就已经从第二行开始了，而不再是紧跟着第 7 个 flex 元素。如果我们通过开发者工具（DevTools）选择 `.demo` 元素后，就会发现第 8 个是已经没有办法塞下去了，这个时候又遇到了 `flex-wrap: wrap;`，所以就换行了。

<img src="/image/02-03-2.png" style="zoom:50%;" />

虽然换行了，但是“起始线”的位置是不变的，会从“交叉轴”的方向延伸。当然，目前我们并没有改变 `flex-direction` 的值，所以，“主轴”会因为默认值 `row` 的关系，是在 x 坐标轴上。

那么根据前面提到的 `wrap-reverse` 的介绍，与 `wrap` 的差别只是方向相反。

```css
/* 
  file: flex_0012.css
  flex-wrap: wrap-reverse; 的页面效果；
*/
.demo {
  flex-wrap: wrap-reverse;
}
```

在看具体的 [demo](../../demo.html?id=12) 截图之前，我们可以猜想一下，这里所谓的方向相反，是根据“主轴”的方向改变呢，还是根据“交叉轴”的方向改变。

<img src="/image/02-03-3.png" style="zoom:50%;" />

结合 `flex-wrap: wrap;` 的结果，猜一下现在这个时候的页面效果应该是 A 呢，还是 B 呢，或者是 C？是不是稍微有点懵圈了，不知道选择哪个好？没关系，我们看一下正确的答案就知道了。

<img src="/image/02-03-4.png" style="zoom:50%;" />

方向是不是相反的？在 `flex-wrap: wrap;` 的时候，换行是向下的，而 `flex-wrap: wrap-reverse;` 的时候，是往上换行了。是的，往上了，是不是就好像 `flex-direction: column-reverse;` 一样，从下往上的排列方式，只不过这个时候我们看到的结果不是一行一个 flex 元素。

那么前面的 A 和 C 是什么情况呢？其实是不同的 `flex-wrap` 值结合 `flex-direction: row-reverse;` 所得的结果。简简单单的两个属性就可以得到这么多种不同情况的布局效果，对于 flex 弹性布局的灵活性情不自禁竖起大拇指。

在 `flex-direction` 的介绍中，我们提到的是“主轴”的方向和位置会随着值的变化而变化，而“交叉轴”的位置始终垂直于“主轴”。`flex-direction` 的值如果是与 **column** 相关的，那么“主轴”方向的“起始线”和“终止线”就会随着 `wrap` 和 `wrap-reverse` 的不同而改变。

* `wrap` 时，“主轴”的“起始线”位置在上面；
* `wrap-reverse` 时，“主轴”的“起始线”位置在下面；

