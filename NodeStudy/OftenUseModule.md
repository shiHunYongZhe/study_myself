## 如何从 GitHub 上下载单个文件夹？
```
npm install git-down-repo -g // 安装全局 
gitdown https://github.com/hua1995116/webchat  // 下载整个仓库（默认master）
gitdown https://github.com/hua1995116/webchat dev // 下载某个仓库的dev分支
gitdown https://github.com/hua1995116/webchat/tree/master/config // 下载仓库某个文件夹
gitdown https://github.com/hua1995116/webchat/blob/master/config/dev.env.js // 下载某个文件
```
## npm包
```
http-server 快速建立本地服务器
    hs -o -p 8080   这个命令行可在当前文件夹搭建服务器，一般在vue生成的dist目录下使用，查看index.html
npx 使用docusaurus快速搭建本地博客
Mongoose - 让 NodeJS 更容易操作 Mongodb 数据库； 附上一篇Mongoose 学习参考文档
express/koa 封装的node框架,类似jq封装了js
koa - 玩 Node 都知道 express，但使用 koa 的就少很多，门槛比 Ex 稍高 通过 generator 避免繁琐的回调函数嵌套，强烈推崇 官方的文章教程
Mocha - Node 里最常用的测试框架； 它支持多种 Node 的 Assert libs； 同时支持异步和同步的测试，同时支持多种方式导出结果； 也支持直接在 browser 上跑 JS 代码测试。
nodered   图形化编程工具，npm简单而强大的流程拖拽工具
superagent | request  是个 http 方面的库，可以发起 get 或 post 请求。
cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。
json-server 快速使用json格式的文件匹配浏览器路由，返回对应数据
font-spider 一个智能 WebFont 压缩工具，它能自动分析出页面使用的 WebFont 并进行按需压缩，优化体积。
anywhere - 随时随地将你的当前目录变成一个静态文件服务器的根目录
pm2 - 是一个带有负载均衡功能的 Node 应用的进程管理
async - 一个流程控制工具包，提供直接而强大的异步功能
socket.io - 预计 Node 的实时框架 聊天室、页游等对实时性有高要求的较适用
Inquirer.js - 想自己做一个脚手架或者在某些时候要与用户进行交互
CNPM - 淘宝 NPM 镜像，提供了 NPM 同步的服务 当然可不仅仅这样，利用 CNPM 可以打造__企业/个人__私有的 NPM 服务 推荐篇搭建私有NPM的文章：《CNPM搭建私有的NPM服务》
node-inspector - Node 调试工具，使用起来跟 Chrome 的 JS 调试器很相似
winston - Node 服务最流行的日志库之一
co - 用 generator 写法让异步代码同步
PhantomJS - 一般用来做抓取截图和无界面测试 也可以用来操作 DOM 和网络监测，很好玩的库 Quick Start
koa-validate - koa 的校验库 可以非常方便的对 queryString 或 postBody 的信息进行验证
line-reader - 基于steam的按行读文件，偶处理日志时用哒 要不实现一个按行读文件，又得 steam、 又得 chunk，还是比较麻烦的
everyauth - OAuth 的集成解决方案
shelljs - 写 Node 时难免需要用 shell 去操作些神马 shelljs 是基于 Node 的 shell 工具，API 及其简单
hashids - 看名称就懂，给 userid 加解密用的
node-pool - 让 Node 有连接池的概念
colors - 花俏的小工具 让打印console.log时有更好的展示样式
i5ting_toc - Markdown转成带目录的Html
```

```
对比	Puppeteer	TestCafe	Selenium
语言	Javascript	Javascript/TypeScript	多种 binding 语言
兼容浏览器	仅Chrome系列	多种浏览器（包括 IE）	多种浏览器（包括 IE）
测试框架	不面向测试，无框架	本身就是测试框架	无框架
工作原理	通过WebSocket 协议与 chrome 的通信	通过设置代理，将用户的行为传递给被测页面	通过 wire protocol 和 浏览器 通信
```