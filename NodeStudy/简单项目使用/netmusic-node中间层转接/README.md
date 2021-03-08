# netmusic-node
网易云音乐接口

```
npm i 

node app.js或者pm2 forever之类启动

```

直接访问服务器地址
如http://localhost:3000/v1/fm //fm电台

# devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。