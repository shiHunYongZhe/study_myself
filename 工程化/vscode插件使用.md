# 插件一般用法
- ctrl + Shift + p或者按f1调出命令行后
- 在>号后面输入插件名字即可调用插件

## Quokka 是一个调试工具，可以为您正在编写的代码提供实时反馈。它能够预览变量的函数和计算值结果。
> f1后输入quokka,即可新建实时编译的js文件（文件保存后就没有代码就没有实时反馈效果，此时可在调试行左侧点击红点，然后运行调试（需安装Code runner））

## vscode-faker
> 可以随机生成姓名、地址、图像、电话号码，或者经典的乱数假文段落，并且每个类别还包含了各种子类别，你可以根据自身的需求来使用这些数据。
f1后输入faker,即可选择指定类型的随机字段

## TODO Highlight--
> 这个插件能够在你的代码中标记出所有的 TODO 注释，以便更容易追踪任何未完成的业务。
- 添加todo标签//TODO:(注意有冒号)及注解。比如这样
>> //TODO:这里有个bug，但是空间太小了，我的算法写不下。
- 按F1，输入todo命令，列出所有todo高亮标签。

## Css Peek
> 在你的html中鼠标指向某个class或者id名称按住Ctrl键+鼠标左键可以直接定位到该名称的CSS的位置

## vscode-json
> 在json文件中右鍵使用format Document或format Document with即可美化json

# Partial Diff
代码比较差异插件，选中代码1，右键Select Text for Compare
选中代码2，右键Compare Text with Previous Selection

或在剪切板已有内容的情况下直接选中代码1，右键Compare Text with Clipboard

## Settings Sync，
> 在不同电脑间同步你的插件，具体流程百度
- f1后输入Sync，点击upload，后登录到GitHub，回到vscode继续upload，成功后调试版OUTPUT有信息显示
- 下载时同样输入Sync，有个download

## PolaCode 生成漂亮的代码截图
> f1后输入po,选择该插件，之后选中某段代码即可在右侧栏实时生成截图，可保存该截图

## css Bomb 梳理 CSS 属性顺序, 具体使用可百度

## REST Client 快速浏览接口数据
> 新建一个.http文件 输入GET api地址即可出现Send Request，点击后看到效果

# vscode-fileheader
> 打开某个文件，按住curl + alt + i 即可加入文件头

# vscode-json
> curl + alt + b 即可美化json文件
> curl + alt + u 即可压缩json文件
> curl + alt + v 是否有效的json文件
> curl + alt + ' 即可Escape json文件  对双引号加入反斜杠
> curl + alt + : 即可unescape json文件 对取消双引号前的反斜杠
