# vue项目开发问题记录

## vscode关于eslint的问题
#### 安装插件： vetur

vscode 的插件安装完成后还不用重启整个程序，只要重新加载下工作区窗口就可以了

安装完 vetur 后还需要加上这样一段配置下：
```
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
}
```
这时可以打开一个vue文件试试，注意下右下角状态栏是否正确识别为 vue 类型：


#### 安装了 ESLint 插件后，还需要在 vscode 中配置下 ESLint：
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
## npm install之后`npm run dev`，报错`This is probably not a problem with npm,there is likely additional logging output above`
```
npm install之后，运行 npm i -D webpack-dev-server@2.9.7
```
## 移动端click点击事件，会延迟300ms,怎么解决？
    解决：引入第三方包,解决移动端click事件延迟300ms；
```
    npm install fastclick --save;
    在main.js中写如下代码
    import fastClick from 'fastclick'
    fastClick.attach(document.body)
```
## iconfont字体图标的应用：
```
步骤： 4.1 在iconfont注册账号，建立一个项目，然后将需要的图标加入到该项目下，下载到本地电脑该项目文件夹下src->assets->iconfont中。
      4.2 在iconfont.css的url中修改字体在本地的路径，在main.js中直接引入该文件import "./assets/iconfont.css"。
      4.3 <span class="iconfont">&#xe624;</span>即可显示该图标字体
```
## stylus样式的应用：
```
    步骤：1 npm install --save  stylus stylus-loader
          2 <style lang="stylus" scoped/> 即可
          3 varibles.stylus该文件夹存放stylus的变量，在<style lang="stylus" scoped/>标签内引入@import "../../assets/varibles.stylus"，然后
background:@bgColor即可使用该变量。
```
```
vue项目--仿写去哪儿网app--遇到的问题及说明总结
1. 移动端开发中的1px边框问题，由于在不同屏幕上，可能会使得1px实际在移动端显示不是1px,怎么解决?

6. @在路径中指的是src目录，即@/assets/css/reset.css,注意，在css样式中引入其他css目录时，需要写成~@/assets/css/reset.css。

7. 简化路径，为常用路径简化别名，如@/assets/css/可简化为csss/：
    步骤：7.1 在build下webpack.base.conf.js文件下
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                  'vue$': 'vue/dist/vue.esm.js',
                  '@': resolve('src'),    //@这是src目录的别名
                  'csss':resolve('src/css')   //这是src/css的别名，从而用csss替代src/css路径达到简化效果
                }
            }
         7.2 重启vue项目，vue run dev;
         

9. 设置元素的宽高比值固定：
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:31.25%   //即高始终为宽的31.25%
    扩展：父元素display:flex布局，子元素flex:1;min-width:0，表示自适应父元素剩余的宽度，且不会超出父元素的宽度。
    
10. 跨平台的axios的使用：实现跨平台的请求
    步骤：10.1  npm install axios --save  //或者<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          10.2  import axios from "axios"
          10.3  methods:{            //通过.json文件模拟后端接受的数据，将index.json文件放在static里面
                      getHomeInfo(){
                          axios.get("./static/mock/index.json").then(this.getHomeInfoSucc)
                      },
                      getHomeInfoSucc(res){
                          console.log(res)
                      }
                  }
         10.4 在config>index.js里面 做如下设置，则可以实现通过调用api/index.json接口时，自动转到本地static/mock/index.json文件   
                 proxyTable: {
                    "/api":{
                        target:"http://location:8098",
                        pathRewrite:{
                            "^/api":"/static/mock"
                        }
                    }
                }   


12.由循环生成的this.$refs是一个数组

13.定义一个量change，通过this.$emit向父组件city.vue传值e.target.innerText，
    父组件通过<v-alpha :letters="letterCities" @change="letterChange"></v-alpha>接受子组件的传值，
    父组件在把值通过属性传值的方法传递给子组件lists.vue
    即间接实现兄弟组件的传递        

14. 通过一次性定时器实现函数截流，即滑动时没16ms执行一次，让执行的频率不那么快,从而实现代码优化

16.localStorage本地存储:
        let defaultCity='重庆';  
        try{    //避免用户禁止了localStorage，会报错
            if(localStorage.city){
                defaultCity=localStorage.city
            }
        }catch(e){}
        
        export default  new Vuex.Store({
            state:defaultCity,     //首页头部显示的城市，默认为localStorage.city或者重庆
        })

17. keep-alive优化代码，避免重复发送ajax获取重复数据，keep-alive缓存重复的数据：
    <keep-alive exclude="组件name名">            //exclude="组件name名"表示该组件不需要缓存，即每次跳转到页面都重新加载mounted生命周期
          <router-view/>
      </keep-alive>
      在<router-view/>标签外部包裹一层keep-alive标签，即可缓存，即在vue中增加了activated生命周期(在页面初始化mounted挂载完成，或者跳转回当前页面时，执行该生命周期函数)，
       activated(){ //因为keep-alive而多出来的生命周期，即页面初始加载时和mounted一样执行，且在每次页面跳转返回当前页面时，仍然会执行，但是mounted因为在keep-alive下不会执行了
          if(this.lastCity !== this.city){   //即跳转回当前页面时，如果选择的城市发生改变，则再次发生ajax，否则就不发生ajax
              this.lastCity=this.city;   
              this.getHomeInfo();   
          }
      }

18. <router-link tag="li" :to="'/default/'+list.id"></router-link>这种写法，避免了a标签改变了li表示内里的文字颜色，相当于<li></li>且自带跳转页面的功能。 
<router-link tag="div" :to="."></router-link>   其中to="."表示返回上一页
 
20. vue页面的滚动事件：window.addEventListener("scroll",this.headerScroll,true)添加true有时候才能触发滚动事件，页面滚动距离始终为0，
    可能原因是body,html有overflow:hidden属性    ，删除即可。
    activated(){   //当前组件页面显示的时候触发该生命周期，因为window是全局的，在其他页面滚动时也会触发，所以需要在当前页面隐藏或者被其他页面替换时，移除滚动事件
        window.addEventListener("scroll",this.headerScroll,true)
    },
    deactivated(){//当前组件页面隐藏/或被其他页面替换的时候触发该生命周期
        window.removeEventListener("scroll",this.headerScroll,true)
    }
    
21. vue中的递归组件：即组件里面调用组件自己本身；
    通过name：" detailComponent"名，去调用<detail-component :list="参数"></detail-component>
    
22. vue组件的name名称的作用：
        （1）递归组件时，作为标签名 < name-compontent></name-compontent>
        （2）该组件不需要缓存时也需要用到    <keep-alive exclude="组件name名"> <router-view/></keep-alive>
        
        
23.  避免当前页面滚动到底部，跳转到其他页面时也在底部：
     在vue项目的router->index.js中：
    export default new Router({
      routes: [
        {
          path: '/',
          component: Home
        },{
          path: '/city',
          component: City
        },{
          path: '/detail/:id',
          component: Detail,
        },
        {
          path: '/pics',
          component: Pics
        }],
       scrollBehavior (to, from, savedPosition) {   //vue-router的滚动行为，避免当前页面滚动到底部，跳转其他页面时也在底部
          return { x: 0, y: 0 }
        }
    })
25. vue项目的接口联调:即将模拟的json数据改成从服务器获取数据：
    步骤：在config->index.js下：
            dev: {
                assetsSubDirectory: 'static',
                assetsPublicPath: '/',
                proxyTable: {
                    "/api":{
                        target:"http://localhost:80", // 将此改为服务地址，即发送/api的ajax会从该地址获取数据
                    }
                },
```
## 在 .vue 文件 直接引入.md文件直接解析（ 不使用markdown 编辑器）
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
