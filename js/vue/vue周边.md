- vue-skeleton-webpack-plugin  骨架屏，一般用于首页加载提供一个背景图，提升用户体验，也有自己制作svg替代的
- prerender-spa-plugin 前端预渲染，一般用于整站中的少数几个页面需要SEO的情况
- vue-server-renderer 服务端渲染，一般用于全部页面的seo优化，更快的内容到达页面时间，缺点是增加服务器负载和只有beforecreate和create这两个生命周期函数起作用
CommonsChunkPlugin 提取第三方库和自定义模块，避免首屏加载的bundle文件过大，一般用于优化加载速度
## vue-markdown text-loader
在 .vue 文件 直接引入.md文件直接解析（ 不使用markdown 编辑器）
1. 安装npm install text-loader --save-dev
2. 在webpack.base.config.js中的module.rules中添加规则
```
{
test: /.md$/,
loader: ‘text-loader’
}
```
然后通过import XXX from ‘xxx.md’，即可正确获取.md文件中的md原始内容。
3）安装md解析器如vue-markdown，`npm install vue-markdown --save-dev`
```
template:
	<vue-markdown>{{msg}}</vue-markdown>
js:

import VueMarkdown from 'vue-markdown’
import xxx from 'XXX.md’
export default {
	components: {
	VueMarkdown
	},
	data () {
		return {
		msg: xxx
		}
	}
}
```

- vuep 一个提供实时编辑并预览功能的组件 - V2EX

```
<!-- Import theme -->
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>CSS Tricks</title>
<link rel="stylesheet" href="//unpkg.com/vuep/dist/vuep.css">
  </head>
<body>
<vuep template="#hotspot-like"></vuep>

<script v-pre type="text/x-template" id="hotspot-like">
<style>
  main{
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .like {
    width: 100px; height: 100px;
    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
  }
  .like:active {
    transition-duration: 1s;
    background-position: -2800px 0;
  }
</style>
<template>
  <main>
    <div class="like"></div>
  </main>
</template>
<script>  
</script>
</script>

<!-- depend vue -->
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vuep"></script>

</body>
</html>
```