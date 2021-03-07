## js常用库
- jquery  最常用的dom操作库，cdn地址可使用<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
- animate.js h5动画库
- moment.js  JavaScript 日期处理类库(可用day.js 替代)
- three.js - JavaScript 3D 库。超多的 examples 等着你去发现，你只需要关注内存和风扇就行了
- ECharts - 好用，最关键的是支持的图表展示非常之多，强烈推荐，highchart则功能少些，但也可用
- gsap     svg图形操作库
- Swiper - 强大的 Slider 库 其实这类效果库非常多，但文档能那么专业的就很少鸟
- fullPage - 非常好用的全屏滑动库，看 Demo 就明白
- excellentexport - 纯前端的 Excel 导出，非常之方便
- lodash - JS 工具库 Underscore.js的一个 fork 发展而来，函数式编程
### 即学即用的库
- cookie.js  cookie操作库
- html2canvas、canvas2image、 canvas-to-blob  canvas操作相关类库，
- pringThis jquery的打印库
- qrcode.js 文本资源转为二维码库
- cropper.js   国人开发的图片裁剪库
- filesaver.js  保存文件库（核心把其他资源保存为blob,不支持new Blob的浏览器无法使用）
- layer.js  弹出框js库
- select2.js  -好看的多选框
## 一些语法
数组遍历时不要使用for in，因为这个时候可能会把原型链上的一些属性或方法也加入迭代
在检测一个变量是否已经定义可以使用typeof 变量 !== 'undefined'
检测一个对象的类型，强烈推荐使用 Object.prototype.toString 方法
instanceof 操作符用来比较两个操作数的构造函数。只有在比较自定义的对象时才有意义
js中尽可能不要使用eval、==（使用全等===代替）、with语法、arguments.callee，会引发一大堆异常问题
## js
- 防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
#### script标签中defer和async的区别是什么？
```
默认情况下，脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。

下面是async和defer两者区别：

当script中有defer属性时，脚本的加载过程和文档加载是异步发生的，等到文档解析完(DOMContentLoaded事件发生)脚本才开始执行。

当script有async属性时，脚本的加载过程和文档加载也是异步发生的。但脚本下载完成后会停止HTML解析，执行脚本，脚本解析完继续HTML解析。

当script同时有async和defer属性时，执行效果和async一致。
```

```
<h2>素材资源：</h2>
<ul>
<li><a href="http://www.js-css.cn/" title="JS代码网">JS代码网</a></li>
<li><a href="http://hao.uisdc.com/" title="设计师网址导航">设计师网址导航</a></li>
<li><a href="http://www.qiuziti.com/" title="按照图片找文字">求字网</a></li>
<li><a href="http://www.apkui.com/" title="安卓应用UI界面精选">安卓应用UI界面精选</a></li>
<li><a href="http://www.ui4app.com/" title="ui4app">IOS应用UI界面</a></li>
<li><a href="http://www.webppd.com/" title="产品原型设计">webppd</a></li>
<li><a href="http://www.lanrentuku.com/" title="懒人图库">懒人图库</a></li>
<li><a href="http://www.zcool.com.cn/" title="zcool">站酷</a></li>
<li><a href="http://365psd.com/" title="365psd">365psd</a></li>
<hr>
<li><a href="http://aeditor.alloyteam.com/" title="H5交互页编辑器AEditor">AEditor</a></li>
<li><a href="http://www.baomitu.com/" title="在线移动专题制作">爆米兔</a></li>
<li><a href="https://www.mugeda.com/" title="HTML5动画平台">Mugeda</a></li>
<li><a href="http://www.maka.im/" title="MAKA html5创作工具">MAKA H5模板页</a></li>
</ul>
<h2>工具导航：</h2>
<ul>
<li><a href="https://tool.lu/" title="在线工具">html,css,js工具，正则表达式测试，颜色格式转换，进制转换，占位图片，app icon自动生成@2x,@3x /n莫斯密码加密解密，汇率计算，数字转大写，中文简繁体转换，IT词汇发音</a></li>
<li><a href="https://loading.io/" title="loading图标">loading图标制作</a></li>
<li><a href="http://cli.im/" title="草料二维码生成器">二维码生成器</a></li>
<li><a href="https://bennettfeely.com/clippy/">clip-path任意形状切割图片</a></li>
<li><a href="https://modao.io/" title="在线设计手机APP">墨刀</a></li>
<li><a href="https://www.htm2pdf.co.uk/" title="HTML to PDF">HTML网页转成PDF</a></li>
<li><a href="https://smallpdf.com/cn" title="提供各种格式和 PDF 互相转换">提供各种格式和 PDF 互相转换</a></li>
<pre>
　　IP 接口
　　http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42
　　手机信息查询接口
　　http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=手机号
　　视频信息接口
　　http://v.youku.com/player/getPlayList/VideoIDS/视频 ID (比如 http://v.youku.com/v_show/id_XNTQxNzc4ODg0.html 的 ID 就是 XNTQxNzc4ODg0)
  
  
  项目上线之域名购买、备案找大型的官网比如阿里云、腾讯云https://wanwang.aliyun.com/
</pre>
```
