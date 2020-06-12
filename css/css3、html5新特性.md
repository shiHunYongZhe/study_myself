# W3C明确表示，CSS没有版本只有等级（level）
伪元素是由两个 :: 和伪元素组成的，引入两个 :: 的目的为了区分伪元素和伪类的，对于一些老旧的的项目，比如需要兼容 IE8 及以下的浏览器建议还是使用 :，对于不需要支持低版本浏览器和移动端项目的建议使用 :: 来做区分。
- `::after`、`::before`、`::first-letter`、`::first-line`、`::selection` 等是伪元素
- `:active`、`:hover`、 `:focus`、 `:visited`、`:checked`、`:disabled`、`:empty` 等称为伪类

```css
	display:flex;  //弹性盒模型
	display:grid;  //栅格模型相关属性
	outline：1px solid #f00;  //外轮廓
	outline-offset:2px  //外轮廓边距（可为负值, 当设置比元素还大的负值时可生成中心的 “+” 符号）
	font-size-adjust:100%;  //字体改变时文字大小不变
	text-stroke: 1px #f00; //打造文字描边
	text-shadow:0 0 5px red; //打造文字阴影
	text-fill-color:transparent; //打造镂空文字：
	shape-outside: margin-box; 元素外部形状环绕(与float配合使用，最常用的是图片和文字搭配)
	clip-path: circle(50% at center);  原理是根据图形来创建路径。当使用这些值创建一条完整路径时，就会把图像按照路径内部的尺寸进行裁剪。
　　利用clip-path，我们可以创建圆形、椭圆和多边形等不同的形状，创造力是唯一的限制。
	background-clip:text  //文字应用背景
	width:calc(100% - 50px); //计算属性（calc）运算符号两侧要有空格 
	marker-offset  //列表项与项目符号的距离
	caption-side:top|bottom|left|right   //标题位于表格的哪一侧
	empty-cells:hide|show  //表格单元格内容为空时是否显示边框
	:focus-within //伪类选择器。
	//它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，它或它的后代获得焦点。
	//这也就意味着，它或它的后代获得焦点，都可以触发 :focus-within。
```
##  `currentColor`    `CSS` 中有史以来的第一个变量 ，用于自动获取当前文本的颜色

```html
<div class="box1">
  nice
  <hr>
</div>
```
```css
.box1{
  color:skyblue;
  font-size: 2em;
}
hr{
  height:0.2em;
  // 这里的 currentColor 就代表 skyblue
  background:currentColor;
}
```


## HTML5新属性
- `requestAnimationFrame`和`cancelAnimationFrame`可取代`setInterval`和`clearInterval`
- `classList`的使用  
- `querySelector`和`querySelectorAll`
- `addEventListener`和`removeEventListener`

## getBoundingClientRect获取元素位置
getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。 
getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。 
该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height； 
这里的top、left和css中的理解很相似，width、height是元素自身的宽高，但是right，bottom和css中的理解有点不一样。right是指元素右边界距窗口最左边的距离，bottom是指元素下边界距窗口最上面的距离。
```
var box=document.getElementById('box');         // 获取元素

alert(box.getBoundingClientRect().top);         // 元素上边距离页面上边的距离

alert(box.getBoundingClientRect().right);       // 元素右边距离页面左边的距离

alert(box.getBoundingClientRect().bottom);      // 元素下边距离页面上边的距离

alert(box.getBoundingClientRect().left);        // 元素左边距离页面左边的距离
```

## 桌面提醒功能
```js
Notification.requestPermission();
document.querySelector('#button').addEventListener('click', function () {
    new Notification("Hi，帅哥：", {
        body: '可以加你为好友吗？',
        icon: 'https://avatars6.githubusercontent.com/u/496048?v=4&s=460'
    });
});
```


```
<div contenteditable="plaintext-only"></div>
```
就可以让元素既可以编辑，也只能输入纯文本，表现得就跟textarea文本域一样。

`will-change: transform;`增强页面渲染性能会启用GPU加速，例如`translate3D`, `scaleZ`之类的好


## `Base64` 编码

>`Base64` 编码是一种使用`64`个可打印字符(大部分情况下指得是 A-Z、 a-z、0-9、"+"、"/")来表示二进制数据的一种编码方法
编码后的数据比原始数据略长。
在 `HTML5` 中，新增`btoa()`与`atob()` 方法来支持`Base64` 编码，在这两个方法的命名中，
`b` 可以被理解为一串二进制数据，`a` 可以被理解为一个`ASCII`码字符串，**分别用来编码和解码**。

```js
// 编码
var result = window.btoa(data);

// 解码
var result = window.atob(data);
```

>1. `btoa()` 编码方法应用。
> 让 `img` 标签的 `src` 属性指向一个以 `data:` 开头的 `Base64` 图片，这对于数据库中保存的二进制图片文件的显示，
  或者统一指定使用的图片文件的格式非常有用。

```
HTML:
  <p>
    <label>选择文件:</label>
    <input type="file" name="" id="file" onchange='file_onchange()'>
    <input type="button" id="btnReadPicture" value='显示图片' onclick='readPicture()' disabled>
  </p>
  <div name='result' id="result"></div>

JS:
  var result=document.getElementById('result');
  var file=document.getElementById('file');
  if(typeof FileReader==='undefined'){
    result.innerHTML='<p>您的浏览器不支持FileReader</p>';
    file.setArribute('disabled','disabled');
  }

  function file_onchange() {
    document.getElementById('btnReadPicture').disabled=false;
  }
  function readPicture() {
    var file=document.getElementById('file').files[0];
      if(!/image\/\w+/.test(file.type)){
        console.log('选取的不是图片文件！');
        return false;
      }
    // 使用 FileReader 读取图片文件
    var reader=new FileReader();
    reader.readAsBinaryString(file);
    reader.onload=function(f){
      // 对选择的图片文件使用 btoa 编码为 Base64 格式
      var src='data:'+file.type+';base64,'+window.btoa(this.result);
      result.innerHTML='<img src="'+src+'" alt=""/>';
    }
  }
```

>2. `atoa()` 解码方法应用。
>获取 `canvas` 元素 `URL`地址中的 `Base64` 格式的字符串，并将其解码为一串二进制数据，保存到数据库。

```
HTML:
  <body onload="draw('canvas')">
    <input type="button" value="上传图片" onclick='imgSave()'>
    <canvas id="canvas" width='400' height='300'></canvas>
</body>

JS:
  var canvas;
  function draw(id) {
    canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle='rgb(0,0,255)';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle='rgb(255,255,0)';
    context.fillRect(10,20,50,50);
  }

  function imgSave() {
    // toDataURL: 获取canvas的URL地址，并设置格式为jpeg
    var data=canvas.toDataURL('image/jpeg');
    data=data.replace('dat:image/jpeg;base64,','');
    // 使用 ajax 将二进制数据发送到服务器
    var xhr=new XMLHttpRequest();
    xhr.open('POST','uploadImage.php');
    xhr.sendAsBinary(window.atob(data));
  }
```
## alternate

```js
<link href="reset.css" rel="stylesheet" type="text/css">
                
<link href="default.css" rel="stylesheet" type="text/css" title="默认">
<link href="red.css" rel="alternate stylesheet" type="text/css" title="红色">
<link href="green.css" rel="alternate stylesheet" type="text/css" title="绿色">
```

上面4个<link>元素，共出现了3中不同性质的CSS样式文件加载：

- 没有title属性，rel属性值仅仅是stylesheet的<link>无论如何都会加载并渲染，如reset.css；
- 有title属性，rel属性值仅仅是stylesheet的<link>作为默认样式CSS文件加载并渲染，如default.css；
- 有title属性，rel属性值同时包含alternate stylesheet的<link>作为备选样式CSS文件加载，默认不渲染，如red.css和green.css；

这里有个非常有趣的特性，那就是rel="stylesheet"的<link>如果有title属性并有值，性质上就变成了一个可以控制其渲染或者不渲染的特殊元素了。

使用JavaScript代码修改<link>元素DOM对象的disabled值为false，可以让默认不渲染的CSS开始渲染。注意，必须是DOM元素对象的disabled属性，而不是HTML元素的disabled属性，<link>元素是没有disabled属性的。

```js
// 渲染red.css这个皮肤
document.querySelector('link[href="red.css"]').disabled = false;
```
