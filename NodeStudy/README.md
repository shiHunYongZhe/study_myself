## node自学资料
http://blog.fens.me/series-nodejs/
- [- 基本上每一篇都看过，强烈推荐](http://blog.fens.me/series-nodejs/)
- [node包教不教会](https://github.com/alsotang/node-lessons)
- [如果学习 NodeJS，那么流一定是需要掌握的概念](stream-handbook)
## nodejs安装
- node.js![](http://nodejs.cn/)官网下载
- 程序正常安装即可
  任一文件夹下按住“shift”键，同时右键鼠标，点击“在此处打开命令窗口”
  输入npm -v（有版本号出现即代表已经全局安装node和npm）
  有需要可安装了淘宝镜像（可选）
  npm install -g cnpm --registry=http://registry.npm.taobao.org

- 全局安装（有时候插件最新版本有不兼容性，最好安装较低较稳定的版本）
  npm install -g 插件名
  出错的话先试试重启CMD（命令窗口），再试其他办法
  插件名 -v（有一些是大写V，具体自己调整） 
  看是否安装完成（有版本号出现则安装完成）

- 当前项目 按住shift，然后右键从当前目录进入命令行
  npm init 初始化之后一直回车（克隆别人的项目之后进入该项目则不需要此步骤）
  然后安装项目开发所需的依赖项npm install 
