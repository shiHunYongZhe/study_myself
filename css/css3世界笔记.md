# CSS 世界的诞生就是为图文信息展示服务的。
### 所谓"流体布局"，指的是利用元素"流"的特性实现的各类布局效果
### `<table>`有着自己的世界，"流"的特性对`<table>`并不适用，一些CSS属性的表现，如单元格的`vertical-align`，也和普通的元素不一样。
- "无宽度"这条准则，少了代码，少了计算，少了维护,布局会更灵活，容错性会更强
- `<button>`标签按钮才会自动换行， `<input>`标签按钮，默认 `white-space:pre`，是不会换行的，需要将 `pre` 值重置为默认的 `normal`。
- "内在盒子"又被分成了 4 个盒子，分别是 content box、 padding box、 border box和 margin box。
- `margin`的背景永远是透明的
- 尽量不使用 `relative`，如果想定位某些元素，看看能否使用"无依赖的绝对定位"；
- 如果场景受限，一定要使用 `relative`，则该 `relative` 务必最小化

### 如何评价`*{box-sizing:border-box}`
- 这种做法易产生没必要的消耗；
- 这种做法并不能解决所有问题。
- 唯一离不开 `box-sizing:border-box` 的就是原生普通文本框`<input>`和文本域`<textarea>`的 100%自适应父容器宽度

### 宽度
- 绝对定位元素的百分比计算和非绝对定位元素的百分比计算是有区别的，区别在于绝对定位的宽高百分比计算是相对于 `padding box` 的，也就是说会把 `padding` 大小值计算在内，但是，非绝对定位元素则是相对于`content box` 计算的。
- padding 百分比值无论是水平方向还是垂直方向均是相对于宽度计算的！
- 最小宽度制作凹形
- `min-width`/`min-height` 的初始值是 `auto`， `max-width`/`maxheight`的初始值是`none`。
- 超越!important 指的是 `max-width` 会覆盖 `width`，超越最大指的是`min-width`覆盖`max-width`

### 替换元素
- `<img>`、 `<object>`、 `<video>`、 `<iframe>`或者表单元素`<textarea>`和`<input>`都是典型的替换元素。
- 替换元素除了内容可替换这一特性以外，还有以下一些特性。内容的外观不受页面上的 CSS 的影响。有自己的尺寸。在很多 CSS 属性上有自己的一套表现规则。
- 替换元素的尺寸从内而外分为 3 类：固有尺寸、 HTML 尺寸和 CSS 尺寸。
- 当图片的 src 属性缺省的时候，图片不会有任何请求，是最高效的实现方式。
- 我们是无法改变替换元素内容的固有尺寸的,替换元素和非替换元素之间只隔了一个 src 属性或是 CSS content 属性！
- 基于伪元素的图片内容生成技术：图片从普通元素变成替换元素，原本都还支持的::before 和::after 此时全部无效， 此时再 hover 图片，是不会有任何信息出现的。于是就非常巧妙地增强了图片还没加载时的信息展示体验。
- content属性改变的仅仅是视觉呈现，当我们以右键或其他形式保存这张图片的时候，所保存的还是原来 src对应的图片。官网的标志往往都会使用`<h1>`标签，里面会有网站名称和标志图片使用背景图,这时可使用
```css
h1 {content: url(logo.png);}
```
- 实际项目中， content 图片生成用得并不多，主要原因在于图片的尺寸不好控制，我们设置宽高无法改变图片的固有尺寸。所以，伪元素中的图片更多的是使用`background-image`模拟，类似这样：
```css
div:before {content: '';background: url(1.jpg);}
.ask:before {content:'提问： "';}
.answer:before {content:'回答： "';}
.ask:after,.answer:after {content: '"';}
```
- 图片描述信息的例子：
```css
img::after {content: attr(alt);}
```
- 除了原生的 HTML 属性，自定义的 HTML 属性也是可以生产的，例如：
```css
.icon:before {content: attr(data-title);}
```
- 需要注意的是， attr 功能符中的属性值名称千万不要自以为是地在外面加个引号。不能有引号，否则浏览器会认为是无效的声明
- 辅助元素在布局中的应用。其中，最常见的应用之一就是清除浮动带来的影响：
```css
.clear:after {content: '';display: table; clear: both;}
```
- `CR` 是将光标移动到当前行的开头，而 `LF` 是将光标"垂直"移动到下一行
- 使用"管道符"的话，因为是字符，所以高度不可控。如果对视觉呈现要求比较高，就需要进行 CSS 图形模拟，其中方法之一就是可以借助内联元素和 padding 属性来实现， CSS 和HTML 代码如下：
```css
a + a:before {
		content: "";
		font-size: 0;
		padding: 10px 3px 1px;
		margin-left: 6px;
		border-left: 1px solid gray;
	}
```
```html
<a href="">登录</a>
<a href="">注册</a>
```
- 对于非替换元素的内联元素，不仅 `padding` 不会加入行盒高度的计算，`margin`和`border`也都是如此，都是不计算高度，但实际上在内联盒周围发生了渲染。

### counter特性
- 使用 content 生成的文本是无法选中、无法复制的
- 不能左右:empty 伪类。
- content 动态生成值无法获取

### padding的使用
实现一个正方形
```css
div { padding: 50%; }
```
若是`span`元素，需要加`font-size：0`
得到一个宽高比为 2:1 的矩形效果
```css
div { padding: 25% 50%; }
```
实现一个宽高比为 5:1 的比例固定的头图效果
```css
.box {  
	padding: 10% 50%; 
	position: relative; 
	} 
.box > img {
	position: absolute; 
	width: 100%; 
	height: 100%; 
	left: 0; 
	top: 0; 
} 
```

### background-clip的使用
不使用伪元素，仅一层标签实现大队长的"三道杠"分类图标效果。
```css
.icon-menu {
	display: inline-block; 
	width: 140px; height: 10px;
	padding: 35px 0; 
	border-top: 10px solid; 
	border-bottom: 10px solid; 
	background-color: currentColor; 
	background-clip: content-box; 
}
```
 不使用伪元素，仅一层标签实现双层圆点图形效果
```css
.icon-dot {
	display: inline-block;
	width: 100px; 
	height: 100px; 
	padding: 10px; 
	border: 10px solid; 
	border-radius: 50%; 
	background-color: currentColor; 
	background-clip: content-box; 
}
```

### margin的使用
- 利用 margin 外部尺寸实 现等高布局的经典案例。
```css
.column-box {
overflow: hidden; 
} 
.column-left, .column-right {
margin-bottom: -9999px; 
padding-bottom: 9999px; 
}
```
- margin 合并的计算规则总结为"正正取大值""正负值相加""负负最负值"
- `margin:auto` 的填充规则如下。
1. 如果一侧定值，一侧 `auto`，则 `auto` 为剩余空间大小。
1. 如果两侧均是 `auto`，则平分剩余空间。
- 如果想让某个块状元素右对齐，脑子里不要就一个`float:right`,很多时候，`margin-left:auto` 才是最佳的实践，
```css
.father {
	width: 300px; 
	height:150px; 
	position: relative; 
} 
.son {
	position: absolute; 
	top: 0; 
	right: 0; 
	bottom: 0; 
	left: 0; 
	width: 200px; 
	height: 100px; 
	margin: auto; 
} 
```
- 那么我们这个.son 元素就水平方向和垂直方向同时居中了。因为 auto 正好把上下左右剩余空间全部等分了，自然就居中！
- 有些场景下，百分比 transform 会让 iOS 微信闪退，还是尽量避免的好。
```css
.element {
width: 300px; 
height: 200px;
position: absolute; 
left: 50%; 
top: 50%;
transform: translate(-50%, -50%);
}
```
- 对于内联替换元素，垂直 margin 有效，并且没有 margin 合并的问题，所以图片永远不会发生 margin 合并。

### 其它一些属性的使用
- `border-width`、`outline`、`box-shadow`、`text-shadow`等，都是不支持百分比值的
- 注意， `border-style` 的默认值是 `none`，有一部分人可能会误以为是 `solid`。这也是单纯设置 `border-width` 或 `border-color` 没有边框显示的原因，
- border-style:double 的表现规则：双线宽度永远相等，中间间隔±1,一般double线最少3px。
- 等比例"三道杠"图标效果
```css
.icon-menu {
	width: 120px; 
	height: 20px; 
	border-top: 60px double; 
	border-bottom: 20px solid; 
}
```
-  `border-color`、`outline`、 `box-shadow` 和 `text-shadow` 等默认颜色就是`color`色值

### 优雅地增加点击区域大小首推透明 border 方法
```css
div {
	width: 0;
	border: 10px solid; 
	border-color: #f30 transparent transparent; 
}
```
三角形的绘制
```css
div {
	width: 10px; 
	height: 10px; 
	border: 10px solid; 
	border-color: #f30 transparent transparent; }
	```
设置左右下 3 个方向边框色为透明就是一个梯形了
```css
.icon-arrow {
	display: inline-block; 
	width: 20px; 
	height: 1ex;
	 background: url(arrow.png) no-repeat center; }
```
- 内联元素默认是基线对齐的，而基线就是x的底部，而 1ex 就是一个x的高度。设想一下，假如图标高度就是1ex，同时背景图片居中，岂不是图标和文字天然垂直居中，而且完全不受字体和字号的影响？因为ex就是一个相对于字体和字号的单位
- `verticalalign:middle`确实也不是真正意义上的垂直居中，也是"近似垂直居中"
- `line-height:1.5` 的继承则与`line-height:150%`和`line-height:1.5em`不同,子元素的 `line-height`继承的不是父元素`font-size`的1.5倍计算值，而是自身`font-size`乘以属性值 1.5
- 无论内联元素 line-height 如何设置，最终父级元素的高度都是由数值大的那个`line-height`决定的，我称之为"内联元素`line-height`的大值特性"。
- 凡是百分比值，均是需要一个相对计算的值，例如， `margin` 和 `padding`是相对于宽度计算的， `line-height` 是相对于`font-size`计算的，而这里的`verticalalign`属性的百分比值则是相对于 `line-height` 的计算值计算的。

### 要清除该类似图片等内联元素的间隙，方法很多，具体如下。
- 在 HTML5 文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个"空白节点"一样。这个"空白节点"永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为"幽灵空白节点"。注意，这里有一个前提，文档声明必须是 HTML5文档声明，如果还是很多年前的老声明，则不存在"幽灵空白节点"。 
- 图片块状化。可以一口气干掉"幽灵空白节点"、 `line-height` 和 `vertical:align`。 - 容器 line-height 足够小。比方说，容器设置 `line-height:0`。
- 容器 font-size 足够小。
- 图片设置其他 vertical-align 属性值。

```
	一个 container，显示半透明背景，然后里面的子元素就是弹框 主体，假设类名是.dialog，则 HTML 如下： 
```html
	<div class="container"> 
		<div class="dialog">
		</dialog> 
	</div> 
	```
	核心 CSS 代码如下：
```css 
.container {
	position: fixed; 
	top: 0;
	right: 0; 
	bottom: 0; 
	left: 0; 
	background-color: rgba(0,0,0,.5); 
	text-align: center; 
	font-size: 0; 
	white-space: nowrap; 
	overflow: auto; } 
.container:after {
	content: ''; 
	display: inline-block;
	height: 100%;
	vertical-align: middle; 
	} 
.dialog {
	display: inline-block;
	vertical-align: middle; 
	text-align: left; 
	font-size: 14px; 
	white-space: normal; 
	} 
```
	此时，无论浏览器尺寸是多大，也无论弹框尺寸是多少，我们的弹框永远都是居中的。

### 浮动的本质就是为了实现文字环绕效果。
- float 都有哪些有意思的特性呢？具体如下：包裹性；块状化并格式化上下文；破坏文档流；没有任何 margin 合并；
- 内联状态下的图片底部是有间隙的(幽灵空白节点)，也就是.float 这个浮动元素的实际高度 并不是 64px，而是要比 64px 高几像素，

### BFC 全称为 block formatting context，中文为"块级格式化上下文"。
### 什么时候会触发 BFC 呢？常见的情况如下：
- `html`根元素；`float` 的值不为`none`；
- `overflow` 的值为 `auto`、 ` 或 hidden`；
- `display` 的值为 `table-cell`、 `table-caption` 和 `inline-block` 中的任何一个；
- `position` 的值不为 `relative` 和 `static`。 
- 换言之，只要元素符合上面任意一个条件，就无须使用 `clear:both` 属性去清除浮动的 影响了。
- `overflow:auto/hidden`，适用于 IE7 及以上版本浏览器； `display:inline-block`，适用于 IE6 和 IE7；`display:table-cell`，适用于 IE8 及以上版本浏览器。 
- 在 PC 端，无论是什么浏览器，默认滚动条均来自`<html>`，而不是`<body>`标签
- 在 PC 端，窗体滚动高度可以使用 `document.documentElement.scrollTop` 获取，但是在移动端，可能就要使用 `document.body.scrollTop` 获取
一个可以让页面滚动条不发生晃动的小技巧，即使用如下 CSS 代码： 
```css
html {
	overflow-y: scroll; 
	/* for IE8 */ 
	} 
:root {
	overflow-y: auto; 
	overflow-x: hidden; 
	} 
:root body {
	position: absolute; 
	} 
body {
	width: 100vw; 
	overflow: hidden; 
}
```

### 单行文字溢出点点点效果
```css
.ell {
	text-overflow: ellipsis; 
	white-space: nowrap; 
	overflow: hidden; 
}
``` 
这 3 个声明缺一不可。
- "URL 地址锚链定位"是让元素定位在浏览器窗体的上边缘，而"focus 锚点定位"是让元素在浏览器窗体范围内显示即可，不一定是在上边缘。
- 普通元素的百分比宽度是相对于父元素的 content box 宽度计算的，而绝对定位元素的宽度是相对于第一个 position 不为 static 的祖先元素计算的
- 没错， "无依赖绝对定位"本质上就是"相对定位"，仅仅是不占据 CSS 流的尺寸空间而已。
- 定义一个如下的 CSS 语句块： 
```css
.clip {
	position: absolute; 
	clip: rect(0 0 0 0); 
	}
``` 
就可以整站使用，哪里需要"可访问性隐藏"就加一个类名.clip 即可，无论是图片、文字还 是块级元素，都可以满足隐藏需求（与文字透明、缩进等方法相比）。同时，clip 语法简单，功能单一，与其他CSS属性相比，和元素原本CSS样式冲突的概率更低。
于是就有了下面这个使用<label>元素李代桃僵的经典策略：
```html
<form> 
	<input type="submit" id="someID" class="clip"> 
	<label for="someID">提交</label>
</form>
``` 
原本的`submit` 按钮隐藏,肉眼所见的按钮 UI 实际上是`<label>`标签渲染。由于`<label>`是非替换元素，没有内置的UI，因此兼容性非常好。` display:none` 或者 `visibility:hidden` 隐藏有两个问题，一个是按钮无法被focus 了，另外一个是IE8浏览器下提交行为丢失，原因应该与按钮 focus 特性丢失有关

- 纯内联元素，垂直方向的`padding`属性和`border`属性对原来的布局定位等没有任何影响。
`@font-face {
font-family: ICON;
src: url('icon.eot') format('eot');
src: local('☺'),
url('icon.woff2') format("woff2")
url('icon.woff') format("woff"),
url('icon.ttf') format("typetrue");
}`
由于 IE6～IE8 不认识功能符，于是下面一个 src 被完美避开了。此时， IE9 浏览器就可以
正大光明地享用 woff 字体格式了！

### 伪类触发顺序Love ha    
- link vlink hover active  其中focus在hover和active中间
