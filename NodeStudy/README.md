## node自学资料
http://blog.fens.me/series-nodejs/
- [- 基本上每一篇都看过，强烈推荐](http://blog.fens.me/series-nodejs/)
- [node包教不教会](https://github.com/alsotang/node-lessons)
## nodejs安装
- 1.推荐nvm安装（有nodejs版本控制）
- 2.node.js![](http://nodejs.cn/)官网下载
  任一文件夹下按住“shift”键，同时右键鼠标，点击“在此处打开命令窗口”
  输入npm -v（有版本号出现即代表已经全局安装node和npm）
  有需要可安装了淘宝镜像（可选）
  npm install -g cnpm --registry=http://registry.npm.taobao.org

- 全局安装（有时候插件最新版本有不兼容性，最好安装较低较稳定的版本）
  npm install -g 插件名
  pm2 vue-cli（必装）
  出错的话先试试重启CMD（命令窗口），再试其他办法
  插件名 -v（有一些是大写V，具体自己调整） 
  看是否安装完成（有版本号出现则安装完成）

- 当前项目 按住shift，然后右键从当前目录进入命令行
  npm init 初始化之后一直回车（克隆别人的项目之后进入该项目则不需要此步骤）
  然后安装项目开发所需的依赖项npm install 

## 熟悉node命令
1. install 安装
1. uninstall 卸载
1. undate 更新
1. view 查看模块的信息
1. config 配置信息
1. -v 查看npm的版本
1. version 查看所有模块的版本
1. search 搜索

- npm install packageName 安装模块
- npm install packageName@0.0.1 安装某个版本的模块
- options:
  -S|--save: 如果存在`package.json`向`dependencies`项添加的项   
  -D|--save-dev： 如果存在`package.json`向`devDependencies`项添加的项
  -g|--global: 安装全局
- npm install -g cnpm –registry=https://registry.npm.taobao.org  安装淘宝镜像，使用时将npm替换为cnpm即可

- npm view packageName 查看模块某个字段的信息

- npm root 打印当前项目`node_modules`的路径
- npm root -g 打印全局`node_modules`的路径

- npm config set <key> <value> [-g|--global] //为一个key值设置value值
- npm config get <key> //获取一个key值的value值
- npm config delete <key> //删除一个key值
- npm config list //显示所有的config项
- npm config edit //使用editor打开一个config文件
- npm run script 运行某个script脚本
- npm ls -g --depth=0  查看全局安装的模块


## npm可全局安装yarn,yarn的使用和npm类似，其优点是依赖安装速度快，默认生成的 yarn.lock 会保证所有成员的模块依赖目录能够很好的保持一致。

# devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。

## 如何从 GitHub 上下载单个文件夹？
```
npm install git-down-repo -g // 安装全局 
gitdown https://github.com/hua1995116/webchat  // 下载整个仓库（默认master）
gitdown https://github.com/hua1995116/webchat dev // 下载某个仓库的dev分支
gitdown https://github.com/hua1995116/webchat/tree/master/config // 下载仓库某个文件夹
gitdown https://github.com/hua1995116/webchat/blob/master/config/dev.env.js // 下载某个文件
```