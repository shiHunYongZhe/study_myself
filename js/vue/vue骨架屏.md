## vue首屏骨架屏实现步骤
- 参考资料[gittub地址](https://github.com/lavas-project/vue-skeleton-webpack-plugin)
- 不论是传统模式还是 SSR，只要是后端渲染，就不需要骨架屏。因为页面的内容直接存在于 HTML，所以并没有骨架屏出场的余地。
- 骨架屏的路由模式只能是‘history’
- 骨架屏原理 在页面未显示之前给一个类似背景图[添加链接描述](https://github.com/lavas-project/vue-skeleton-webpack-plugin)片的骨架，也叫首屏绘制
1. npm install vue-skeleton-webpack-plugin -D
2. 在src目录下创建Skeleton文件夹，添加Skeleton.js文件，内容如下
```
<template>
    <div class="skeleton-wrapper">
        <header class="skeleton-header"></header>
        <section class="skeleton-block">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
        </section>
    </div>
</template>

<script>

export default {
  name: 'skeleton'
}
</script>

<style scoped>
.skeleton-header {
    height: 152px;
    background: grey;
    margin-top: 60px;
    width: 152px;
    margin: 60px auto;
}
.skeleton-block {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}
</style>

```
3. 在src目录下添加entry-skeleton.js文件，内容如下：
```
import Vue from 'vue'
import Skeleton from './Skeleton'

export default new Vue({
  components: {
    Skeleton
  },
  template: '<skeleton />'
})
```
4. 在build 目录下创建 webpack.skeleton.conf.js，内容如下：
```
'use strict';
 
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')
 
function resolve(dir) {
  return path.join(__dirname, dir)
}
 
module.exports = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: {
    app: resolve('../src/entry-skeleton.js')
  },
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2'
  }),
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: []
})
```
5. 在webpack.dev.conf.js和webpack.prod.conf.js中添加以下内容：
```
	const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

	在plugins中添加
	
    new SkeletonWebpackPlugin({
      webpackConfig: require('./webpack.skeleton.conf'),
      quiet: true
    })
```
6. 之后运行项目，可在调试工具网络中设置不缓存和fast 3G，观看效果（这个时候skeleton.vue的style是不会起作用的）




### 上面效果实现之后，骨架屏可以优化（生产模式再改变，开发模式见不到效果）
1. 在main.js中修改new Vue，保证 Vue 实例在异步样式表加载完毕后进行挂载，如果此时样式还没有完成，我们把挂载方法放到全局，等到样式加载完成后再调用（根据css的ref=‘preload’属性：只加载不执行）
```
let app = new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.mountApp = () => {
  app.$mount('#app')
}
if (window.STYLE_READY) {
  window.mountApp()
}
```
2. 参照skeleton-demo，在index.html文件的head添加针对 JS 和 CSS 的 <link ref='preload'>（在下载后Vue实例挂载前应用样式），为skeleton使用异步的css
```
<% for (var jsFilePath of htmlWebpackPlugin.files.js) { %>
        <link rel="preload" href="<%= jsFilePath %>" as="script">
    <% } %>
    <% for (var cssFilePath of htmlWebpackPlugin.files.css) { %>
        <link rel="preload" href="<%= cssFilePath %>" as="style" onload="this.onload=null;this.rel='stylesheet';window.STYLE_READY=1;window.mountApp&&window.mountApp();">
        <noscript><link rel="stylesheet" href="<%= cssFilePath %>"></noscript>
    <% } %>
    <script>!function(t){"use strict";t.loadCSS||(t.loadCSS=function(){});var e=loadCSS.relpreload={};if(e.support=function(){var e;try{e=t.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),e.bindMediaToggle=function(t){function e(){t.media=a}var a=t.media||"all";t.addEventListener?t.addEventListener("load",e):t.attachEvent&&t.attachEvent("onload",e),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(e,3e3)},e.poly=function(){if(!e.support())for(var a=t.document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n];"preload"!==o.rel||"style"!==o.getAttribute("as")||o.getAttribute("data-loadcss")||(o.setAttribute("data-loadcss",!0),e.bindMediaToggle(o))}},!e.support()){e.poly();var a=t.setInterval(e.poly,500);t.addEventListener?t.addEventListener("load",function(){e.poly(),t.clearInterval(a)}):t.attachEvent&&t.attachEvent("onload",function(){e.poly(),t.clearInterval(a)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:t.loadCSS=loadCSS}("undefined"!=typeof global?global:this);</script>
```
3. 由于不需要插件插入 <link>，我们可以编写一个简单的 Webpack 插件，监听 HTMLWebpackPlugin 的事件，过滤掉 CSS。这样插件就不会自动插入 <link> 了，于是在build文件夹下添加ommit-css-webpack-plugin.js，内容如下
```
module.exports = class OmmitCSSPlugin {
    constructor() {}
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin(
                'html-webpack-plugin-alter-asset-tags',
                (args, cb) => {
                    args.head = args.head.filter((link) => link.attributes.rel !== 'stylesheet');
                    cb(null, args);
                }
            );
        });
    }
}
```
