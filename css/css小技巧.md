在我们的传统方法中，对于这种不定宽要居中的元素，我们一般采取两层的结构，以下：
```
<div class="more_btn"><span>查看更多</span></div>
.more_btn {
    text-align: center;
}
.more_btn span {
    display: inline-block;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    text-align: center;
}
使用 width: fit-content 属性来简化结构（需要注意兼容性）

<div class="more_btn">查看更多</div>
.more_btn {
    margin: auto;
    padding: 0 30px;
    width: -webkit-fit-content;
    width: fit-content; /* 关键 : 宽度等于内容宽度 */
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    text-align: center;
}
```
## 自动加载省略符号
```
<dot>...</dot>
dot {
    display: inline-block; 
    height: 1em; line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
}
dot::before {
    display: block;
    content: '...\A..\A.';
    white-space: pre-wrap;   
    animation: dot 3s infinite step-start both;
}
@keyframes dot {
    33% { transform: translateY(-2em); }
    66% { transform: translateY(-1em); }
}
```

## 水平线中间文字
```
<div class="line_box">
	<div class="title_line"></div>
	<p class="title_word">中间文字</p>
	<div class="title_line"></div>
</div>
.line_box { display: flex; } 
.title_line { height: .6rem; border-bottom: 1px solid #ccc; flex: 1; } 
.title_word { color:#6a6a6a; font-size: .8rem; text-align: center; padding: 0 .4rem; }
```
## 单行文字justify对齐
```
div{overflow:hidden;height:19px;text-align:justify;text-align-last:justify;}
div:after{display:inline-block;content:'';overflow:hidden;width:100%;height:0;}
```

## 子元素获取父元素（未定义高度）的蒙层
```
<div id="demo">
	<div class="sample-1">
		<p>我的高度其实是没有定义的，内容有多少我就有多高。</p>
		<span class="mask"></span>
	</div>
	<div class="sample-2">
		<p>我的高度其实是没有定义的，内容有多少我就有多高。我的高度其实是没有定义的，内容有多少我就有多高。</p>
		<span class="mask"></span>
	</div>
</div>
#demo div{position:relative;_overflow:hidden;width:300px;}
#demo span{position:absolute;top:0;left:0;width:100%;height:100%;_padding-bottom:500px;}
```

## BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是一种前端命名方法论，利用不同的区块，功能以及样式来给元素命名。这三个部分使用 __ 与 -- 连接（这里用两个而不是一个是为了留下用于块儿的命名）。命名约定的模式如下：
```
.block {}
.block__element {}
.block--modifier {}
block 代表了更高级别的抽象或组件
block__element 代表 block 的后代，用于形成一个完整的 block 的整体
block--modifier 代表 block 的不同状态或不同版本
```
## 鼠标样式使用图片替换,格式用.cur
```
cursor: url(images/Arrow.cur), auto;
```
## 是否阻塞文档
使用link标签引用的 css文件，不会阻塞DOM的解析,但是会阻塞DOM的渲染

复选框 `checkbox` 样式美化
```html
  <input type="checkbox" id='awesome'>
  <label for="awesome">Awesome!</label>
```
```css
  input[type='checkbox']+label::before{
    /* 不换行的空格 */
    content:'\a0';
    display: inline-block;
    vertical-align: 0.10em;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.2em;
    border-radius:0.2em;
    /* 伪元素改造成复选框的背景颜色 */
    background-color: silver;
    text-indent:0.15em;
    line-height: 0.65;
  }
  input[type='checkbox']:checked+label::before{
    /* 更加优雅的对号符号 */
    content:'\2713';
    background-color: yellowgreen;
  }
  input[type='checkbox']{
    // 使用裁切的方式将原有的checkbox隐藏，相对于直接 display:none； 的好处是，不会将复选框从键盘的 tab 键切换焦点的队列中完全删除，人机交互性更好 
    clip:rect(0,0,0,0);
  }
```
## 元素垂直居中
**基于绝对定位**
- 传统方式，元素的宽高必须确定，适应性不太好
```html
  <main>
      <h1>Am I centered yet?</h1>
      <p>Center me,please!</p>
    </main>
```
```css
  main{
    position: absolute;
    // 注意 calc() 参数操作符号两边要有空格的存在
    // 这里如果不使用 calc() 函数，可以使用 margin-left 和 margin-top 代替
    top:calc(50% - 150px);
    left:calc(50% - 250px);
    // 元素宽、高必须确定
    width:500px;
    height:300px;
  }
```
- 使用 `transform` 进行百分比确定位置
```css
  main{
    border:1px dashed;
    position: absolute;
    top:50%;
    left:50%;
    /* 不需要元素确定宽高，适应性较好 */
    transform:translate(-50%,-50%);
  }
```
- `margin:auto;`，适应性较好(且是水平垂直都居中)
```css
.element {
    width: 600px; 
    height: 400px;
    position: absolute; 
    /* 四个值全是 0 */
    left: 0; top: 0; right: 0; bottom: 0;
    /* 有了这个就自动居中了 */
    margin: auto;    
}
```
### 基于`Flexbox` 的解决方案
```css
body{
  display: flex;
  min-height: 100vh;
  margin: 0;
}
main{
  border:1px dashed;
  margin:auto;
}
```
当 元素没有文本内容，但有 href 属性的时候，显示它的 href 属性：
```
a[href^="http"]:empty::before {
  content: attr(href);
}
```
## 图片链接无效的处理
当 img元素 src指向的地址无效时，会呈现为一种不太友好的样子，例如破碎图片的图标或者干脆什么都不显示，利用下述 css可以在图片链接失效时，呈现指定的内容：
```
img::before {
  /* 显示文字 */
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

img::after {
  /* 显示链接 */
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
}
```
上述原理是，当 src地址无效，则显示 ::before 和 ::after的内容，否则这两个伪元素将不显示
## 提前加载体积较大图片
有些懒加载图片，需要等到我们触发了相应操作才进行加载，例如点击某个按钮，但是由于图片体积较大，或者网络信号不好，操作完毕之后，图片需要一定的时间才能完全加载完毕并显示，用户体验不好，这里有一个小技巧可应用于提前加载此图片
```
.box:before {
  display: none;
  content: url(https://dummyimage.com/200x200/fafff0)
}
```
通过这种手段，不会在页面上添加额外的 DOM元素，也不会对页面显示产生什么影响，但浏览器会提前缓存 https://dummyimage.com/200x200/fafff0，需要使用的时候可以实现即时地展现，提升用户体验
## 网页全div自动配色
```
var css = document.createElement('style')
css.innerHTML = `* { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); }
* * * * * * * * * * { background-color: rgba(0,0,255,.2); }
`
document.querySelector('head').appendChild(css)
```

## 链接嵌套链接
```
a标签里再嵌套一层链接，可以通过在a标签里嵌套map，通过其area的href实现
<!-- 借助area元素实现的链接嵌套功能实例页面 -->
<a href="/book/1003477570/369104934" class="book-layout" target="_blank">
    <img src="book.jpg" class="book-cover" alt="都市猎人 限时免费" usemap="#bookCover">
    <map id="bookCover" name="bookCover">
        <area shape="rect" coords="0,0,200,21" href="/book/1003477570" alt="都市猎人 限时免费" target="_blank">
    </map>
<a>
```

-  解决margin折叠问题
子元素明明设置了margin值，但是却没有撑开父元素，此时只要给父元素设置overflow:hidden；或者触发BFC即可。

- Chrome小于12px字体解决方法
font-size:10px;-webkit-transform:scale(0.8);display:block;


- z-index没有生效
有时候是没有定义position属性，如果不想让元素的位置有所变化，就给赋予z-index属性的元素加上相对定位的position:relative;

# 动态样式文件
改变皮肤link元素的href地址。例如：
```css
<link id="skinLink" href="skin-default.css" rel="stylesheet" type="text/css">
```
换皮肤的时候JS改变href属性值：
```js
skinLink.href = 'skin-red.css';
```