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
express/koa 封装的node框架,类似jq封装了js
superagent | request是个 http 方面的库，可以发起 get 或 post 请求。
cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。
http-server 快速建立本地服务器
    hs -o -p 8080   这个命令行可在当前文件夹搭建服务器，一般在vue生成的dist目录下使用，查看index.html
font-spider 一个智能 WebFont 压缩工具，它能自动分析出页面使用的 WebFont 并进行按需压缩，优化体积。
anywhere - 随时随地将你的当前目录变成一个静态文件服务器的根目录
supervisor - 监控 Node 代码，自动重启。 A supervisor program for running nodejs programs
nodemon - 监控 Node 代码，自动重启。 Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
pm2 - 是一个带有负载均衡功能的 Node 应用的进程管理器； 是 Forever 的进阶库，想了解的可以看这篇文章《拥抱PM2》
cz-cli - 刚用上的一个 git ci 工具，让我们的项目提交代码更规范、更有套路。打算写篇文章分享下，文章正在准备中，写完后会补地址。
async - 一个流程控制工具包，提供直接而强大的异步功能
optimist - 当需要处理 CLI 中的 argv 时(即命令行传参)，用它就行了
socket.io - 预计 Node 的实时框架 聊天室、页游等对实时性有高要求的较适用
Inquirer.js - 实现的效果比 Commander 简单、有趣，贴个 GIF供大家参考：loc
Commander - 用 Commander.js 可以方便的创建基于 Node 的命令行工具，比如 vue-cli 这类，瞬间觉得自己又高大上了呢~
Mongoose - 让 NodeJS 更容易操作 Mongodb 数据库； 附上一篇Mongoose 学习参考文档
CNPM - 淘宝 NPM 镜像，提供了 NPM 同步的服务 当然可不仅仅这样，利用 CNPM 可以打造__企业/个人__私有的 NPM 服务 推荐篇搭建私有NPM的文章：《CNPM搭建私有的NPM服务》
koa - 玩 Node 都知道 express，但使用 koa 的就少很多，门槛比 Ex 稍高 通过 generator 避免繁琐的回调函数嵌套，强烈推崇 官方的文章教程
Shipit - 一个强大的自动化部署工具。 shipit 很多地方非常类似 gulp，他们的核心都是任务系统。
node-inspector - Node 调试工具，使用起来跟 Chrome 的 JS 调试器很相似
winston - Node 服务最流行的日志库之一
co - 用 generator 写法让异步代码同步
thenify-all - 把异步的方法变成 Promise 的 Promisifies all the selected functions in an object
PhantomJS - 一般用来做抓取截图和无界面测试 也可以用来操作 DOM 和网络监测，很好玩的库 Quick Start
ava - 偶是应TJ大神推荐而得之的 ava 未来的测试运行器
Mocha - Node 里最常用的测试框架； 它支持多种 Node 的 Assert libs； 同时支持异步和同步的测试，同时支持多种方式导出结果； 也支持直接在 browser 上跑 JS 代码测试。
koa-validate - koa 的校验库 可以非常方便的对 queryString 或 postBody 的信息进行验证
line-reader - 基于steam的按行读文件，偶处理日志时用哒 要不实现一个按行读文件，又得 steam、 又得 chunk，还是比较麻烦的
binary 作者是大神 substack，对应的处理 PHP/Python 中的 unpack 方法。英文解释：Unpack multibyte binary values from buffers and streams.
everyauth - OAuth 的集成解决方案
shelljs - 写 Node 时难免需要用 shell 去操作些神马 shelljs 是基于 Node 的 shell 工具，API 及其简单
hashids - 看名称就懂，给 userid 加解密用的
node-pool - 让 Node 有连接池的概念
colors - 花俏的小工具 让打印console.log时有更好的展示样式
n - 控制Node的版本，想升级一行代码搞定
```
