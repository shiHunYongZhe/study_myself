## 熟悉node命令
1. install 安装
1. uninstall 卸载
1. undate 更新
1. view 查看模块的信息
1. config 配置信息
1. npm -v 查看npm的版本
1. npm version 查看所有模块的版本
1. npm search 搜索

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
