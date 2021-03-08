## npm包
```
live-server 前端页面热更新:
    live-server --port=80   这个命令行可在当前文件夹搭建服务器，一般在vue生成的dist目录下使用，查看index.html
docusaurus   快速搭建本地博客
express-generator express的自动化工具，相当于vue-cli与vue
Mocha - Node 里最常用的测试框架； 它支持多种 Node 的 Assert libs； 同时支持异步和同步的测试，同时支持多种方式导出结果； 也支持直接在 browser 上跑 JS 代码测试。
nodered   图形化编程工具，npm简单而强大的流程拖拽工具
font-spider 一个智能 WebFont 压缩工具，它能自动分析出页面使用的 WebFont 并进行按需压缩，优化体积。
async - 一个流程控制工具包，提供直接而强大的异步功能  做服务器端开发时，经常会遇到时间管理的功能需求，比如每2秒刷新一次，每三分钟做一次统计计算，周一至周五9点30启动一个定时任务等等。使用参考http://blog.fens.me/nodejs-async-timer/        、      http://blog.fens.me/nodejs-async/

很多时候我们会把这些定时任务，交给linux系统的Crontab来实现。不过，有时为了增加系统的灵活性，我们需要在服务器后台实现。
socket.io - 预计 Node 的实时框架 聊天室、页游等对实时性有高要求的较适用
Inquirer.js - 想自己做一个脚手架或者在某些时候要与用户进行交互
node-inspector - Node 调试工具，使用起来跟 Chrome 的 JS 调试器很相似
PhantomJS - 一般用来做抓取截图和无界面测试 也可以用来操作 DOM 和网络监测，很好玩的库 Quick Start
line-reader - 基于steam的按行读文件，处理又得 steam、 又得 chunk的日志比较方便
everyauth - OAuth 的集成解决方案
hashids - 看名称就懂，给 userid 加解密用的
node-pool - 让 Node 有连接池的概念
docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会将 .md 转成 .html 文件，所有转换工作都是在运行时进行。
gitalk 第三方评论插件，具体使用查看https://segmentfault.com/a/1190000018072952
Retry 优雅的失败重试策略，具体使用查看http://blog.fens.me/nodejs-retry/


fly.js一个基于promise的http请求库, 可以用在node.js, Weex, 微信小程序, 浏览器, React Native中

vue-cli中的node插件
cross-env这是一款运行跨平台设置和使用环境变量的脚本。一般搭配package.json使用
chalk - 花俏的小工具 让打印console.log时有更好的展示样式
ora  优雅的终端旋转器
shelljs - 写 Node 时难免需要用 shell 去操作些神马 基于 Node 的 shell 工具，API 及其简单
portfinder  端口查看器

i5ting_toc - Markdown转成带目录的Html
1. npm install i5ting_toc -g 
2. i5ting_toc -f 要转换文件名.md
3. 会在当前文件目录下生成一个preview文件夹
```

```
对比	Puppeteer	TestCafe	Selenium
语言	Javascript	Javascript/TypeScript	多种 binding 语言
兼容浏览器	仅Chrome系列	多种浏览器（包括 IE）	多种浏览器（包括 IE）
测试框架	不面向测试，无框架	本身就是测试框架	无框架
工作原理	通过WebSocket 协议与 chrome 的通信	通过设置代理，将用户的行为传递给被测页面	通过 wire protocol 和 浏览器 通信
```
