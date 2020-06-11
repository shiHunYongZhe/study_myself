## js常用库
- jquery  最常用的dom操作库，cdn地址可使用<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
- moment.js  JavaScript 日期处理类库
- three.js - JavaScript 3D 库。超多的 examples 等着你去发现，你只需要关注内存和风扇就行了
- ECharts - 好用，最关键的是支持的图表展示非常之多，强烈推荐
- gsap     svg图形操作库
- Swiper - 强大的 Slider 库 其实这类效果库非常多，但文档能那么专业的就很少鸟
- fullPage - 非常好用的全屏滑动库，看 Demo 就明白
- excellentexport - 纯前端的 Excel 导出，非常之方便
- Cropper - 国人开发的图片裁剪库
- lodash - JS 工具库 Underscore.js的一个 fork 发展而来，函数式编程
## 一些语法
js中尽可能不要使用eval、==（使用全等===代替）、with语法，一大堆问题
```
<h2>技术博客：</h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/">无数的资源再等着你探索，追标准和新特性肯定得重点关注的网站</a></li>
<li><a href="https://www.awesomes.cn/">国人维护的前端资源库，深度对接到 Github，分类和展现清晰，值得收藏</a></li>
<li><a href="https://www.liaoxuefeng.com/">廖雪峰的官方博客</a></li>
<li><a href="https://www.zhangxinxu.com/wordpress/">成名多年的、高产的前端大湿，CSS猛人</a></li>
<li><a href="http://doc.liangxinghua.com/vue-family/1.html" title="Vue教程">一个私人的vue教程</a></li>
<li><a href="https://jspang.com/posts/2017/01/11/all-video-list.html" title="前端私人教程">jspang的前端教程</a></li>
</ul>
<h2>素材资源：</h2>
<ul>
<li><a href="http://www.17sucai.com/">17素材网</a></li>
<li><a href="http://www.js-css.cn/" title="JS代码网">JS代码网</a></li>
<li><a href="http://thebestofyouth.com/bsgrid/" title="内部系统数据库数据展示">jQuery.bsgrid</a></li>
<li><a href="http://hao.uisdc.com/" title="设计师网址导航">设计师网址导航</a></li>
<li><a href="http://font.chinaz.com/" title="字体下载">字体中国</a></li>
<li><a href="http://www.qiuziti.com/" title="按照图片找文字">求字网</a></li>
<li><a href="http://www.apkui.com/" title="安卓应用UI界面精选">安卓应用UI界面精选</a></li>
<li><a href="http://www.ui4app.com/" title="ui4app">IOS应用UI界面</a></li>
<li><a href="http://www.webppd.com/" title="产品原型设计">webppd</a></li>
<hr>
<li><a href="http://www.lanrentuku.com/" title="懒人图库">懒人图库</a></li>
<li><a href="http://www.zcool.com.cn/" title="zcool">站酷</a></li>
<li><a href="http://365psd.com/" title="365psd">365psd</a></li>
<li><a href="http://www.sucaihuo.com/" title="手机网站模板">素材火</a></li>
<hr>
<li><a href="http://aeditor.alloyteam.com/" title="H5交互页编辑器AEditor">AEditor</a></li>
<li><a href="http://www.baomitu.com/" title="在线移动专题制作">爆米兔</a></li>
<li><a href="https://www.mugeda.com/" title="HTML5动画平台">Mugeda</a></li>
<li><a href="http://www.maka.im/" title="MAKA html5创作工具">MAKA H5模板页</a></li>
</ul>
<h2>工具导航：</h2>
<ul>
<li><a href="https://tool.lu/" title="在线工具">html,css,js工具，正则表达式测试，颜色格式转换，进制转换，占位图片，app icon自动生成@2x,@3x /n莫斯密码加密解密，汇率计算，数字转大写，中文简繁体转换，IT词汇发音</a></li>
<li><a href="http://tools.jb51.net/table">脚本之家常用参考表对照</a></li>
<li><a href="https://c.runoob.com/" title="在线工具">菜鸟工具</a></li>
<li><a href="https://www.bootcdn.cn/" title="cdn网站">cdn资源</a></li>
<li><a href="https://www.iconfont.cn/search/index" title="iconfont">iconfont矢量库</a></li>
<li><a href="https://icomoon.io/app/#/select" title="icomoon网站">icomoon(类似iconfont)</a></li>
<li><a href="https://tinypng.com/" title="图片在线压缩优化">tinypng图片在线压缩优化</a></li>
<li><a href="https://zhitu.isux.us/" title="图片优化平台">智图图片优化</a></li>
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