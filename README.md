# 自学之路
## 基础掌握
- 寻找自学资料可在哔哩哔哩/其他自学网站如极客学院上找，光是学习里面的视频就能够从入门到中级了，之后就靠相关技术博客、官网进阶（视频最好选择3年以内的，老旧的视频没有参考价值）
- 学习html css js  之后html5 css3 es6
- 熟悉ps的切图

## 软件使用
- vscode 工程级编辑器
- phpstudy本地服务器
- Geogle 浏览器，调试专用（有一些好用的插件）
## 进阶
- 使用markdown做笔记 后缀为.md
- 了解css预处理器scss、less、stulus,js常用库jquery、bootstrap
- 不要盲目去学习算法
- 后端首先学习node，次要php，java
## 工作
- 学习git工作流
- 学习node的npm工具
- 了解grunt gulp webpack 
CMD AMD Common.js的区别，主要使用webpack和Common.js
- Vue React Angular, 一开始学习vue，学会了Vue，React也容易入门，Angular先不做考虑
## 性能测试工具
- 阿里云PTS
- 百度APM
- webpagetest
- tools.pingdom.com
- gemetrix

---

## 目录
1. **[调用堆栈](#1-调用堆栈)**
5. **[== 与 ===, typeof 与 instanceof](#5--vs--typeof-vs-instanceof)**
6. **[this, call, apply 和 bind](#6-this-call-apply-和-bind)**
12. **[Promise](#12-promise)**
15. **[算法](#15-算法)**
16. **[数据结构](#16-数据结构)**
17. **[消息队列和事件循环](#17-消息队列和事件循环)**
19. **[继承, 多态和代码复用](#19-继承-多态和代码复用)**
20. **[按位操作符, 类数组对象和类型化数组](#20-按位操作符-类数组对象和类型化数组)**
21. **[DOM 树和渲染过程](#21-dom-树和渲染过程)**
25. **[工厂函数和类](#25-工厂函数和类)**
26. **[设计模式](#26-设计模式)**
27. **[Memoization](#27-memoization)**
28. **[纯函数, 函数副作用和状态变化](#28-纯函数-函数副作用和状态变化)**
29. **[耗性能操作和时间复杂度](#29-耗性能操作和时间复杂度)**
30. **[JavaScript 引擎](#30-javascript-引擎)**
32. **[偏函数, 柯里化, Compose 和 Pipe](#32-偏函数-柯里化-compose-和-pipe)**
33. **[代码整洁之道](#33-代码整洁之道)**

---

## 1. 调用堆栈
- :book: [这一次，彻底弄懂 JavaScript 执行机制 —— 掘金](https://juejin.im/post/59e85eebf265da430d571f89)
## 5. == vs ===, typeof vs instanceof

对于=== 和 Object.is  的不同，只要记住
在 === 中 NaN !== NaN ,而 +0 === -0
然而 Object.is中 Object.is(NaN, NaN) 为true ，而Object.is(+0, -0) 则为false

- :book: [== vs === in Javascript —— CSDN](https://blog.csdn.net/w97531/article/details/82255225)
- :book: [深入理解 javascript 之 typeof 和 instanceof —— CSDN](https://blog.csdn.net/mevicky/article/details/50353881)
- :book: [一张图看懂 Function 和 Object 的关系及简述 instanceof 运算符 —— 掘金](https://juejin.im/post/58358606570c35005e4142bd)

## 6. this, call, apply 和 bind

### 文章

- :book: [学会 JS 的 this 这一篇就够了，根本不用记 —— 简书](https://www.jianshu.com/p/6b4333e78bf5)
- :book: [[译] this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind —— 掘金](https://juejin.im/post/5b9f176b6fb9a05d3827d03f)
- :book: [this、apply、call、bind —— 掘金](https://juejin.im/post/59bfe84351882531b730bac2)
- :book: [call、apply 和 bind 的原生实现 —— github](https://github.com/Abiel1024/blog/issues/16)

## 12. Promise

### 文章

- :book: [使用 promises —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- :book: [Promise —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- :book: [Promie — 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000)
- :book: [JavaScript Promise：去而复返 —— 司徒正美](https://www.cnblogs.com/rubylouvre/p/3495286.html)
- :book: [(上面的原文)JavaScript Promise：简介 —— Web Fundamentals](https://developers.google.com/web/fundamentals/primers/promises#_1)
- :book: [1 分钟读完《10 分钟学会 JavaScript 的 Async/Await》 —— justjavac](https://segmentfault.com/a/1190000011813934)
- :book: [JavaScript Promise 迷你书（中文版）](https://juejin.im/entry/56499ae160b2d1404c4f8834)
- :book: [JavaScript 进阶之路——认识和使用 Promise，重构你的 Js 代码 —— 博客园](https://www.cnblogs.com/yunfeifei/p/4453690.html)

## 15. 算法

### 文章

- :book: [十大经典排序算法总结（JavaScript 描述） —— 掘金](https://juejin.im/post/57dcd394a22b9d00610c5ec8)
- :book: [在 JavaScript 中学习数据结构与算法 —— 掘金](https://juejin.im/post/594dfe795188250d725a220a#comment)
- :book: [JS 中可能用得到的全部的排序算法 —— 掘金](https://juejin.im/post/58c9d5fb1b69e6006b686bce)
- :book: [JS 家的排序算法 —— 简书](https://www.jianshu.com/p/1b4068ccd505)
- :book: [前端常见算法的 JS 实现 —— SegmentFault](https://segmentfault.com/a/1190000008593715)
- :book: [前端面试中的常见的算法问题 ——蒲小花的博客](https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/)

## 16. 数据结构

### 文章

- :book: [来我们浅谈一下 js 的数据结构 —— 简书](https://www.jianshu.com/p/5e0e8d183102)
- :book: [JavaScript 中的算法与数据结构 —— 简书](https://www.jianshu.com/nb/16835496)
- :book: [学 JS 必看-JavaScript 数据结构深度剖析 —— 大道至简的博客](http://blog.sina.com.cn/s/blog_7b9c5e4101017mjt.html)
- :book: [js 中基础数据结构数组去重问题 —— 掘金](https://juejin.im/entry/586effe0da2f600053d85a9a)

### 视频

- :tv: :tv: [JavaScript 数据结构-运算符 —— 乐视](http://www.le.com/ptv/vplay/27606964.html)

**[:arrow_up: 返回目录](#目录)**

---

## 17. 消息队列和事件循环

### 文章

- :book: [并发模型与事件循环 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
- :book: [JavaScript 运行机制详解：再谈 Event Loop —— 阮一峰](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- :book: [深入理解 JavaScript 事件循环 —— 博客园](https://www.cnblogs.com/dong-xu/p/7000163.html)
- :book: [深入浅出 Javascript 事件循环机制 —— 知乎](https://zhuanlan.zhihu.com/p/26229293)
- :book: [JS 事件循环机制（event loop）之宏任务、微任务 —— SegmentFault](https://segmentfault.com/a/1190000014940904#articleHeader7)
- :book: [JavaScript：彻底理解同步、异步和事件循环 —— SegmentFault](https://segmentfault.com/a/1190000004322358)

**[:arrow_up: 返回目录](#目录)**

---

## 19. 继承, 多态和代码复用

### 文章

- :book: [JS 面向对象编程之：封装、继承、多态 —— 博客园](https://www.cnblogs.com/Leo_wl/p/5734794.html)
- :book: [Javascript 的继承与多态 —— 简书](https://www.jianshu.com/p/5cb692658704)
- :book: [js:面向对象编程，带你认识封装、继承和多态 —— 掘金](https://juejin.im/post/59396c96fe88c2006afc2707)
- :book: [JavaScript 中的“多继承” —— 掘金](https://zhuanlan.zhihu.com/p/34693209)
- :book: [代码复用模式 —— github](https://github.com/TooBug/javascript.patterns/blob/master/chapter6.markdown)
- :book: [深入理解 JavaScript：代码复用模式(推荐篇) —— 汤姆大叔](http://www.cnblogs.com/TomXu/archive/2012/04/24/2438050.html)
- :book: [深入理解 JavaScript：代码复用模式(避免篇) —— 汤姆大叔](https://www.cnblogs.com/TomXu/archive/2012/04/23/2438005.html)

**[:arrow_up: 返回目录](#目录)**

---

## 20. 按位操作符, 类数组对象和类型化数组

### 文章

- :book: [按位操作符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- :book: [类数组对象 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays)
- :book: [类型化数组 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- :book: [JavaScript ArrayBuffer 浅析 —— 博客园](https://www.cnblogs.com/gradolabs/p/4762134.html)

**[:arrow_up: 返回目录](#目录)**

---

## 21. DOM 树和渲染过程

### 文章

- :book: [如何创建一个 DOM 树 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/How_to_create_a_DOM_tree)
- :book: [HTML DOM 节点 —— W3school](http://www.w3school.com.cn/htmldom/dom_nodes.asp)
- :book: [DOM 概述 —— 阮一峰](http://javascript.ruanyifeng.com/dom/node.html)
- :book: [《JavaScript 闯关记》之 DOM（上）—— 掘金](https://juejin.im/post/583cbbfa61ff4b006ccc41fe)
- :book: [《JavaScript 闯关记》之 DOM（下）—— 掘金](https://juejin.im/post/583cbc4961ff4b006ccc44fb)
- :book: [掌握 DOM 操作 —— 掘金](https://juejin.im/entry/58314efd8ac2470061bb30fd)
- :book: [操作 DOM —— 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434500494451273e6b3dec9d411d9ba841dee8caec45000)
- :book: [原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的 —— 掘金](https://juejin.im/post/59c60691518825396f4f71a1)

## 25. 工厂函数和类

### 文章

- :book: [类 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
- :book: [类和实例 —— 廖雪峰](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/00138682004077376d2d7f8cc8a4e2c9982f92788588322000)
- :book: [Javascript 定义类（class）的三种方法 —— 阮一峰](http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)
- :book: [【译】ES6 的工厂函数 —— 掘金](https://juejin.im/post/59c8c8756fb9a00a681ae5bd)
- :book: [JavaScript 创建对象之单例、工厂、构造函数模式 —— 掘金](https://juejin.im/entry/587992c961ff4b0065edf1ff)

## 26. 设计模式

### 文章

- :book: [设计模式 —— 阮一峰](http://javascript.ruanyifeng.com/library/designpattern.html)
- :book: [JavaScript 设计模式 —— 掘金](https://juejin.im/post/59df4f74f265da430f311909)
- :book: [学用 JavaScript 设计模式 —— 极客学院](http://wiki.jikexueyuan.com/project/javascript-design-patterns/)
- :book: [[面试专题]JS 设计模式 —— SegmentFault](https://segmentfault.com/a/1190000010914032)
- :book: [JavaScript Patterns 中译本 —— github](https://github.com/lxj/javascript.patterns)

## 27. Memoization

### 文章

- :book: [JavaScript Memoization —— 司徒正美](https://www.cnblogs.com/rubylouvre/archive/2009/08/06/1540678.html)
- :book: [memoization 提升递归效率 —— 博客园](https://www.cnblogs.com/yingshuizy/p/4517102.html)
- :book: [如何提升 JavaScript 的递归效率 —— 51CTO](http://developer.51cto.com/art/201010/231513.htm)
- :book: [JavaScript 高级技巧 Memoization —— SegmentFaut](https://segmentfault.com/a/1190000016703106)

## 28. 纯函数, 函数副作用和状态变化

### 文章

- :book: [纯函数(Pure Function) —— React.js 小书](http://huziketang.mangojuice.top/books/react/lesson32)
- :book: [JavaScript Functional Programming：纯函数 —— 宁皓网](https://ninghao.net/blog/4634)
- :book: [js 函数的副作用分析 —— 脚本之家](https://www.jb51.net/article/28079.htm)
- :book: [如何使用纯函数式 JavaScript 处理脏副作用 —— 掘金](https://juejin.im/post/5b82bdb351882542e241ed32?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com)
- :book: [原生 JavaScript 实现 state 状态管理系统 —— 博客园](http://www.cnblogs.com/zhangycun/p/9403335.html)
- :book: [JavaScript 函数式编程 —— @BuptStEve](https://github.com/BuptStEve/blog/issues/10)

## 29. 耗性能操作和时间复杂度

### 文章

- :book: [时间复杂度 O(log n) 意味着什么？ —— 掘金](https://juejin.im/entry/593f56528d6d810058a355f4)
- :book: [算法的时间复杂度和空间复杂度 —— 掘金](https://juejin.im/entry/5a49f7d36fb9a0450a67b269)
- :book: [算法（一）时间复杂度 —— 掘金](https://juejin.im/post/58d15f1044d90400691834d4)
- :book: [Big O Search Algorithms in JavaScript —— Bradley Braithwaite](http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html)
- :book: [Time Complexity Analysis in JavaScript — Jennifer Bland](https://www.jenniferbland.com/time-complexity-analysis-in-javascript/)

## 30. JavaScript 引擎

### 文章

- :book: [javascript 引擎 —— 百度百科](https://baike.baidu.com/item/javascript引擎/5356108)
- :book: [V8(JavaScript 引擎) —— 百度百科](https://baike.baidu.com/item/V8/6178125)
- :book: [图解搞懂 JavaScript 引擎 Event Loop —— 掘金](https://juejin.im/post/5a6309f76fb9a01cab2858b1)3
- :book: [V8 JavaScript 引擎：高性能的 ES2015+ —— justjavac](https://segmentfault.com/a/1190000010819020)
- :book: [10 分钟理解 JS 引擎的执行机制 —— SegmentFaut](https://segmentfault.com/a/1190000012806637)
- :book: [V8 javascript 引擎 —— 博客园](https://www.cnblogs.com/weirdoQi/p/6609811.html)

## 32. 偏函数, 柯里化, Compose 和 Pipe

### 文章.

- :book: [Javascript 函数式编程之偏函数 —— CSDN](https://blog.csdn.net/qq_42129063/article/details/81874314)
- :book: [JavaScript 专题之偏函数 —— SegmentFault](https://segmentfault.com/a/1190000010686144)
- :book: [柯里化和偏函数有什么区别？ —— SegmentFault](https://segmentfault.com/q/1010000008626058)
- :book: [Javascript 偏函数与柯里化 —— CSDN](https://blog.csdn.net/neweastsun/article/details/75947785)
- :book: [柯里化(curry) —— JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html)
- :book: [代码组合(compose) —— JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch5.html)
- :book: [关于 javascript 函数式编程中 compose 的实现 —— SegmentFault](https://segmentfault.com/a/1190000008394749)
- :book: [实现 compose 的五种思路 —— SegmentFault](https://segmentfault.com/a/1190000011447164)
- :book: [JavaScript 函数式编程之函数组合函数 compose 和 pipe 的实现 —— SegmentFault](https://segmentfault.com/a/1190000015102804)
- :book: [JavaScript 轻量级函数式编程-第 4 章:组合函数 ——掘金](https://juejin.im/post/59a62f3d6fb9a0248363fd9d#comment)
- :book: [JavaScript 函数式编程（二） —— @BuptStEve](https://github.com/BuptStEve/blog/issues/11)

## 33. 代码整洁之道

### 文章

- :book: [[译] JavaScript 代码整洁之道 —— 边城](https://www.zcfy.cc/article/clean-code-javascript-readme-md-at-master-ryanmcdermott-clean-code-javascript-github-2273.html)
- :book: [Javascript 编程风格 —— 阮一峰](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)
- :book: [重构 - 代码整洁之道 —— 掘金](https://juejin.im/post/5a5b2a5c6fb9a01cbc6e59f9)
- :book: [让你的代码更简短，更整洁，更易读的 ES6 小技巧 —— 掘金](https://juejin.im/post/5a7d71836fb9a063435ecf51)
- :book: [Web 前端：11 个让你代码整洁的原则 —— 伯乐在线](http://blog.jobbole.com/23617/)

