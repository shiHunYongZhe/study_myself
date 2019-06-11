## 安装插件： Ctrl + P 然后输入 ext install vetur 然后回车点安装即可。

vscode 的插件安装完成后还不用重启整个程序，只要重新加载下工作区窗口就可以了

安装完 vetur 后还需要加上这样一段配置下：
```
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
}
```
这时可以打开一个vue文件试试，注意下右下角状态栏是否正确识别为 vue 类型：


## 安装了 HTML 插件后，还需要在 vscode 中配置下 ESLint：
```
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
    "eslint.options": {
        "plugins": ["html"]
    },
```
