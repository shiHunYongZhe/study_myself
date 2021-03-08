# 插件一般用法
- ctrl + Shift + p或者按f1调出命令行后
- 在>号后面输入插件名字即可调用插件
## Code runner
- 调试代码必备，点击行数出现红点后，点击右上角三角运行代码
## Prettier
- 格式化代码，选中后按住Shift + Alt + F
## Quokka 是一个调试工具，可以为您正在编写的代码提供实时反馈。它能够预览变量的函数和计算值结果。
> f1后输入quokka,即可新建实时编译的js文件（文件保存后就没有代码就没有实时反馈效果，此时可在调试行左侧点击红点，然后运行调试（需安装Code runner）

## TODO Tree--
> 这个插件能够在你的代码中标记出所有的 TODO 注释，以便更容易追踪任何未完成的业务。
- 添加todo标签//TODO:(注意有冒号)及注解。比如这样
>> //TODO:这里有个bug，但是空间太小了，我的算法写不下。

# Partial Diff
代码比较差异插件，选中代码1，右键Select Text for Compare
选中代码2，右键Compare Text with Previous Selection

或在剪切板已有内容的情况下直接选中代码1，右键Compare Text with Clipboard

## Settings Sync
> 在不同电脑间同步你的插件，具体流程百度
- f1后输入Sync，点击upload，后登录到GitHub，回到vscode继续upload，成功后调试版OUTPUT有信息显示
- 下载时同样输入Sync，有个download

## PolaCode 生成漂亮的代码截图
> f1后输入po,选择该插件，之后选中某段代码即可在右侧栏实时生成截图，可保存该截图

# koroFileHeader
> 打开某个文件，按住ctrl + alt + i 即可加入文件头
> 按住ctrl + alt + t 在光标处即可加入函数注释

### Better Comments
为注释添加更醒目、带分类的色彩。安装后的示例
/**
 * @description: 
 * @param {*}
 * @return {*}
 * todo sdfjweir
 * ! sdfjweir
 * ? sdfjweir
 * // sdfjweir
 */


## vscode-faker
> 可以随机生成姓名、地址、图像、电话号码，或者经典的乱数假文段落，并且每个类别还包含了各种子类别，你可以根据自身的需求来使用这些数据。
f1后输入faker,即可选择指定类型的随机字段
# vscode-json
> ctrl + alt + b 即可美化json文件
> ctrl + alt + u 即可压缩json文件
> ctrl + alt + v 是否有效的json文件
> ctrl + alt + ' 即可Escape json文件  对双引号加入反斜杠
> ctrl + alt + : 即可unescape json文件 对取消双引号前的反斜杠

# Turbo Console Log
当我们选中某个变量 `name`，然后按住快捷键「ctrl + Shift + L」，即可自动出现这个变量的日志 `console.log(name)`。
> 选中生成 console.log() ctrl+shift+l (L l 不是 I i)
> 注释log：  alt + shift + c
> 启用log：  alt + shift + u
> 删除log:   alt + shift + d

### Live Server
在本地启动一个服务器，代码写完后可以实现「热更新」，实时地在网页中看到运行效果。就不需要每次都得手动刷新页面了。
> 使用方式：在代码页右键选择「Open with Live Server」。
### Markdown Preview Enhanced
md文件右键预览 Markdown 样式。
### Browser Preview
vscode侧边栏可打开网页，方便前端人员对照。
### Emoji
f1后输入Emoji,即可选择插入指定的emoji表情
## VS Code ES7 React/Redux/React-Native/JS snippets
开发React必备，同时有es6常见代码简写
## JavaScript Snippets(选修)
es6常见代码快速编写，有需要可安装


# 被动插件（无需主动调用）
## Image Preview
- 图片预览。鼠标移动到图片 url 上的时候，会自动显示图片的预览和图片尺寸。
## SVG Viewer
- svg图片预览。
## Color Info
- 这个便捷的插件，将为你提供你在 CSS 中使用颜色的相关信息。你只需在颜色上悬停光标，就可以预览色块中色彩模型的（HEX、 RGB、HSL 和 CMYK）相关信息了。
## vscode-icons
- 这一款是VSCode官方的图标主题包，vscode-icons 会根据文件的后缀名来显示不同的图标，让你更直观地知道每种文件是什么类型的。
## GitLens
- 将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。
- 查看某个 commit 的代码改动记录
- 查看不同的分支
- 可以将两个 commit 进行代码对比
- 甚至可以将两个 branch 分支进行整体的代码对比。这一点，简直是 GitLens 最强大的功能。当我们在不同分支 review 代码的时候，就可以用到这一招。
## Bracket Pair Colorizer 2
- 以不同颜色显示成对的括号，并用连线标注括号范围。简称**彩虹括号**。
## indent-rainbow
- 突出显示代码缩进。
## Vetur
Vue 多功能集成插件，包括：语法高亮，智能提示，emmet，错误提示，格式化，自动补全，debugger。VS Code 官方钦定 Vue 插件，Vue 开发者必备。
### minapp
小程序开发必备插件。
## filesize
底部左下角显示当前文件大小
## PHP Intelephense
PHP开发必备

# 不推荐的插件
## Auto Close Tag
- 自动闭合标签
- 已被内置
## Auto Rename Tag
- 自动对标签重命名
- 可用F2代替
## path Intellisense、npm Intellisense
- 路径智能补全
- 已被内置

# 鸡肋
## Power Mode
写代码时有火焰/烟花效果，可不装
## DotEnv
node开发时的.env文件代码高亮
## css Bomb 
- 梳理 CSS 属性顺序, 具体使用可百度
## REST Client 快速浏览接口数据（一般都是用postman测试）
> 新建一个.http文件 输入GET api地址即可出现Send Request，点击后看到效果


### Git History

有些同学习惯使用编辑器中的 Git 管理工具，而不太喜欢要打开另外一个 Git UI 工具的同学，这一款插件满足你查询所有 Git 记录的需求。

### Chinese (Simplified) Language Pack for Visual Studio Code

让软件显示为简体中文语言。

### sftp：文件传输

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器，可以安装`sftp`这个插件，很好用。在公司会经常用到。

详细配置已经在上面讲过。
### Project Manager

工作中，我们经常会来回切换多个项目，每次都要找到对应项目的目录再打开，比较麻烦。Project Manager 插件可以解决这样的烦恼，它提供了专门的视图来展示你的项目，我们可以把常用的项目保存在这里，需要时一键切换，十分方便。

### WakaTime 【荐】

统计在 VS Code 里写代码的时间。统计效果如下：

![](http://img.smyhvae.com/20200618_2300.png)
### ESLint：代码格式校验

日常开发中，建议用可以用 Prettier 做代码格式化，然后用 eslint 做校验。

### Local History 【荐】

维护文件的本地历史记录，强烈建议安装。代码意外丢失时，有时可以救命。

![](http://img.smyhvae.com/20200618_2246.png)
### RemoteHub

不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

`RemoteHub`插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

![](http://img.smyhvae.com/20190418_1937.png)

这个插件目前使用的人还不多，赶紧安装起来尝尝鲜吧。

### Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮：

![](http://img.smyhvae.com/20190418_2012.png)

上图中，点击红框部分，登录后就可以分享你的工作空间了。

![](http://img.smyhvae.com/20190418_2005.png)

### Import Cost

在项目开发过程中，我们会引入很多 npm 包，有时候可能只用到了某个包里的一个方法，却引入了整个包，导致代码体积增大很多。`Import Cost`插件可以在代码中友好的提示我们，当前引入的包会增加多少体积，这很有助于帮我们优化代码的体积。
## Auto Import
## Babel JavaScript
## Live Sass Compiler
## Lodash
## LeetCode
## 最后一段

如果你还有什么推荐的 VS Code 插件，欢迎留言。