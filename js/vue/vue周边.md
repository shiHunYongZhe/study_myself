vue-skeleton-webpack-plugin  骨架屏，一般用于首页加载提供一个背景图，提升用户体验，也有自己制作svg替代的
prerender-spa-plugin 前端预渲染，一般用于整站中的少数几个页面需要SEO的情况
vue-server-renderer 服务端渲染，一般用于全部页面的seo优化，更快的内容到达页面时间，缺点是增加服务器负载和只有beforecreate和create这两个生命周期函数起作用
CommonsChunkPlugin 提取第三方库和自定义模块，避免首屏加载的bundle文件过大，一般用于优化加载速度
