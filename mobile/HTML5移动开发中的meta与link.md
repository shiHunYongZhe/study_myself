# HTML5移动开发中web页面
## meta
###### HTML5移动开发中的一些webkit专属头部标签，能够帮助浏览器更好的解析HTML代码，从而为HTML5移动开发提供更好的前端表现与体验
```
viewport网页缩放
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
UTF-8编码
<meta charset="utf-8" />
优先使用最新版本 IE 和 Chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
```
- 其他相关设置
```
<base> 标签为页面上的所有链接规定默认地址或默认目标（很少使用了）
<base href="https://user-gold-cdn.xitu.io/" />
<!-- 禁止浏览器从本地计算机的缓存中访问页面内容-->
<meta http-equiv="pragma" content="no-cache">
<!-- Cache-Control指定请求和响应遵循的缓存机制,声明页面指示请求或响应消息不能缓存-->
<meta http-equiv="cache-control" content="no-cache">
<!-- 声明页面刷新或跳转 -->
<meta http-equiv="refresh" content="10" />
<!-- 声明网页标题图标 -->
<link rel="shortcut icon" href="https://oss.cx580.com/H5Index_v1.3/favicon.ico">
<!-- 作者 -->
<meta name="author" contect="..." />
<!-- 关键词 -->
<meta name="keywords" content="..." />
<!-- 描述 -->
<meta name="description" content="..." />
<!-- 抓取 -->
<meta name="robots" content="..." />
<!-- 设置Cookie -->
<meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/">
<!-- 用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输 -->
<meta http-equiv="expires" content="Fri,12Jan200118:18:18GMT">
<!-- 声明搜索引擎抓取间隔 -->
<meta name="revisit-after" content="10 days" />
```
- iOS系统相关设置
```
<!-- 禁用自动识别电话号码 -->
<meta name="format-detection" content="telephone=no" />
<!-- 禁用自动识别电子邮件 -->
<meta name="format-detection" content="email=no" />
iphoneX 刘海屏适配,新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口：
<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
```
- UC浏览器相关设置
```
<!-- 百度禁止转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!-- 强制竖屏 -->
<meta name="screen-orientation" content="portrait" />
<!-- 强制全屏 -->
<meta name="full-screen" content="yes" />
<!-- 应用模式 -->
<meta name="browsermode" content="application" />
```
- QQ浏览器相关设置
```
<!-- 强制竖屏 -->
<meta name="x5-orientation" content="portrait" />
<!-- 强制全屏 -->
<meta name="x5-fullscreen" content="true" />
<!-- 应用模式 -->
<meta name="x5-page-mode" content="app" />
```
- 360浏览器相关设置
```
<!-- 启用极速模式 -->
<meta name="renderer" content="webkit" />
```

## link
让你的WebAPP看上去更像NativeAPP，带来不一样的用户体验

- RSS订阅
```
<link rel="alternate" type="application/rss+xml" href="rss.xml" title="RSS" />
```
- 主屏图标相关设置
```
<!-- iOS Safari允许用户将一个网页添加到主屏幕然后像App一样来操作它,定义App标题 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 声明添加到主屏幕时设置系统顶栏颜色 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 当我们将一个网页添加到主屏幕时，还可以对 系统显示手机信号、时间、电池的顶部状态栏 颜色进行设置，前提是开启了：capable" content="yes" -->
<meta name="apple-mobile-web-app-title" content="..." />
<!-- Favicons -->
<link rel="shortcut icon" type="image/ico" href="../images/favicon.ico" />
<!-- Android -->
<link rel="icon" sizes="196x196" href="../images/icon-196x196.png" />
<!-- iPhone、iTouch -->
<link rel="apple-touch-icon-precomposed" href="../images/icon-57x57.png" />
<!-- Retina iPhone、Retina iTouch -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/icon-114x114.png" />
<!-- Retina iPad -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/icon-144x144.png" />
```
- iOS APP启动动画相关设置
```
<!-- iPhone、iPod Touch竖屏 -->
<link rel="apple-touch-startup-image" href="../images/icon-320x480.png" />
<!-- Retina iPhone、Retina iPod Touch竖屏 -->
<link rel="apple-touch-startup-image" sizes="640x960" href="../images/icon-640x960.png" />
<!-- Retina iPhone 5、Retina iPod Touch 5竖屏 -->
<link rel="apple-touch-startup-image" sizes="640x1136" href="../images/icon-640x1136.png" />
<!-- iPad竖屏 -->
<link rel="apple-touch-startup-image" sizes="768x1004" href="../images/icon-768x1004.png" />
<!-- iPad横屏 -->
<link rel="apple-touch-startup-image" sizes="1024x748" href="../images/icon-1024x748.png" />
<!-- Retina iPad竖屏 -->
<link rel="apple-touch-startup-image" sizes="1536x2008" href="../images/icon-1536x2008.png" />
<!-- Retina iPad横屏 -->
<link rel="apple-touch-startup-image" sizes="2048x1496" href="../images/icon-2048x1496.png" />
 ```
移动设备的css和html
```
去掉ios系统中元素被触摸时产生的半透明灰色遮罩
a,button,input,textarea{-webkit-tap-highlight-color: rgba(0,0,0,0;)}
去掉android系统中元素被点击时产生的边框
a,button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0;)
    -webkit-user-modify:read-write-plaintext-only; 
} 
禁止IOS用户保存或拷贝图像
img { -webkit-touch-callout: none; }
移动端取消touch高亮效果
html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
 android 上去掉语音输入按钮
input::-webkit-input-speech-button {display: none}
移动端禁止用户选中页面中的内容
.user-select-none {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all （移动端不需要） */
  -ms-user-select: none;      /* IE 10+ */      
}
去掉winphone系统a、input标签被点击时产生的半透明灰色背景
<meta name="msapplication-tap-highlight" content="no">
禁用iOS中，默认情况下键盘是开启首字母大写的功能
<input type="text" autocapitalize="off" />
关闭iOS输入自动修正
<input type="text" autocorrect="off" /> 
```

## 防盗链
```
对于一些根据 referrer进行防盗链的简单手段，可以通过删除请求 Header中的 Referrer来解决
<meta referrer="never" /> // IE/Edge模式
<meta referrer="no-referrer" /> // 标准模式
上述写法相当于对文档中的所有链接都取消了 Referrer，如果只是想精确地指定取消某一个或几个，则可以使用 referrerPolicy：
<img src="xxx.png" referrerPolicy="no-referrer" />
```

```
<script type="text/javascript">
// 不是在微信中打开则报错
var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    var isAndroid = ua.indexOf('android') != -1;
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
    if (!isWeixin) {
        document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
        document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
    }
</script>
```
```
开启拨打电话功能：
<a href="tel:123456">123456</a>
开启发送短信功能：
<a href="sms:123456">123456</a>
发送邮件:
<a href="mailto:Name@Your.net?subject=主题">……</a>
```