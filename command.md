## 熟悉CMD常用命令
calc 打开计算器
n:mspaint 打开画板
k:notepad 打开记事本
d： 回车 切换盘符
cd 改变指定目录
如需跨盘则要加一个/d操作：cd /d +跨盘位置
cd… 退回上一级目录 cd…/…/退回多级目录
cd: 退回到根目录
dir 显示列出当前目录下的文件以及文件夹
cls 清屏操作
del 删除文件 del.*txt 删除所有后缀名子为txt的文件
md 创建目录
rd 删除目录
如删除的文件夹中有内容，则需加/s操作符
rd+/s 文件夹名称 (询问是否删除)
rd+/q+/s 文件夹名称(不询问直接删除)
exit 退出命令窗口
```
  在CMD中输入：echo 内容 >>文件保存路径，例如：
  echo 创建一个.txt文件>>d:\a.txt  就是创建一个内容为：“创建一个.txt文件”的a.txt文件，
  ，保存到D盘。
```

## 熟悉node命令

- npm install -g 插件名      //node全局（没有-g则为局部）安装插件
- npm cache clean     //如果安装失败，可以使用 npm cache clean 清理缓存，然后再重新安装
- vue init webpack    //初始化vue webpack
- cnpm install      //安装依赖（有--save-dev则为开发环境和生产环境都安装，只有-d则只为生产环境安装）
- npm run dev       //启动项目
- npm run build     //发布项目 生成dist目录  只要把dist目录上的文件发布上去就行了

## 熟悉git命令
