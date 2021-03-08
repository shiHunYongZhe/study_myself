## nodemon可在检测到目录中的文件更改时通过 自动重新启动节点应用程序来帮助开发基于node.js的 应用程序（热刷新） ，不过他是用于 开发阶段的工具
npm install -g nodemon				// 安装
// nodemon的使用
node main.js						// 启动文件，不能热刷新
nodemon main.js						// 启动文件，可以热刷新

## PM2 是一个类似于Nodemon的工具，不同之处在于它用于生产环境，和Nodemon相似的地方在于他会监控你的app的任何修改或者重新部署，但是有更好的一面， PM2 在程序遭遇到崩溃的时候，他会正确重启你的app，并且pm2会在后台运行
1 pm2需要全局安装
- npm install -g pm2

2 进入项目根目录
2.1 启动进程/应用 
- pm2 start bin/www 或 pm2 start app.js

2.2 重命名进程/应用 
- pm2 start app.js --name wb123
- pm2 restart www --name wb123

2.3 添加进程/应用 watch 
- pm2 start bin/www --watch

2.4 结束进程/应用 
- pm2 stop www

2.5 结束所有进程/应用 
- pm2 stop all

2.6 删除进程/应用 
- pm2 delete www

2.7 删除所有进程/应用 
- pm2 delete all

2.8 列出所有进程/应用 
- pm2 list

2.9 查看某个进程/应用具体情况 
- pm2 describe www

2.10 查看进程/应用的资源消耗情况 
- pm2 monit

2.11 查看pm2的日志 
- pm2 logs

2.12 若要查看某个进程/应用的日志,使用 
- pm2 logs www

2.13 重新启动进程/应用 
- pm2 restart www

2.14 重新启动所有进程/应用 
- pm2 restart all