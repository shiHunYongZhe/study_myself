## node自学资料
http://blog.fens.me/series-nodejs/
- [- 基本上每一篇都看过，强烈推荐](http://blog.fens.me/series-nodejs/)
- [node包教不教会](https://github.com/alsotang/node-lessons)
- [如果学习 NodeJS，那么流一定是需要掌握的概念](stream-handbook)
## nodejs安装
- 找到nodejs目录并新建两个目录               
  C:\Program Files\nodejs\node_global
  C:\Program Files\nodejs\node_cache

- 启动CMD依次执行以下两条命令
  npm config set prefix "C:\Program Files\nodejs\node_global"
  npm config set cache "C:\Program Files\nodejs\node_cache"

- 设置系统变量
  计算机-》属性-》高级系统设置-》环境变量
  设置用户变量Path为
  C:\Program Files\nodejs\node_global;
  新建系统变量NODE_PATH为
  C:\Program Files\nodejs\node_global

- 确定npm正常安装
  npm -v（出现版本号即可）
  及安装了淘宝镜像（可选）
  npm install -g cnpm --registry=http://registry.npm.taobao.org

- 全局安装（有时候插件最新版本有不兼容性，最好安装较低较稳定的版本）
  npm install -g 插件名
  出错的话先试试重启CMD，再试其他办法
  插件名 -v（有一些是大写V，具体自己调整）  看是否安装完成

- 当前项目 按住shift，然后右键从当前目录进入命令行
  npm init 初始化之后一直回车
  然后安装项目开发所需的依赖项
  npm install --save-dev 插件名
