* Gulp介绍
  * 中文主页: http://www.gulpjs.com.cn/
  * gulp是与grunt功能类似的**前端项目构建**工具, 也是基于Nodejs的自动**任务运行器**
  * 能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的
    合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
  * gulp更高效(异步多任务), 更易于使用, 插件高质量
* 安装 nodejs, 查看版本: node -v
* 创建一个简单的应用gulp_test
  ```
  |- dist
  |- src
    |- js
    |- css
    |- less
  |- index.html
  |- gulpfile.js-----gulp配置文件
  |- package.json
    {
      "name": "gulp_test",
      "version": "1.0.0"
    } 
  ```
* 安装gulp:
  * 全局安装gulp
    ```
    npm install gulp -g
    ```
  * 局部安装gulp
    ```
    npm install gulp --save-dev
    ```
  * 配置编码: gulpfile.js
    ```
    //引入gulp模块
    var gulp = require('gulp');
    //定义默认任务
    gulp.task('任务名', function() {
      // 将你的任务的任务代码放在这
    });
    gulp.task('default', ['任务'])//异步执行
    ```
  * 构建命令: 
    ```
    gulp
    ```
* 使用gulp插件
  * 相关插件:
    * gulp-concat : 合并文件(js/css)
    * gulp-uglify : 压缩js文件
    * gulp-rename : 文件重命名
    * gulp-less : 编译less
    * gulp-clean-css : 压缩css
    * gulp-livereload : 实时自动编译刷新
  * 重要API
    * gulp.src(filePath/pathArr) : 
      * 指向指定路径的所有文件, 返回文件流对象
      * 用于读取文件
    * gulp.dest(dirPath/pathArr)
      * 指向指定的所有文件夹
      * 用于向文件夹中输出文件
    * gulp.task(name, [deps], fn) 
      * 定义一个任务
    * gulp.watch() 
      * 监视文件的变化
  * 处理js
    * 创建js文件
      * src/js/test1.js
        ```
        (function () {
          function add(num1, num2) {
            var num3 = 0;
            num1 = num2 + num3;
            return num1 + num2;
          }
          console.log(add(10, 30));
        })();
        ```
      * src/js/test2.js
        ```
        (function () {
          var arr = [2,3,4].map(function (item, index) {
              return item+1;
          });
          console.log(arr);
        })();
        ```
    * 下载插件:
      ```
      npm install gulp-concat gulp-uglify gulp-rename --save-dev
      ```
    * 配置编码
      ```
      var concat = require('gulp-concat');
      var uglify = require('gulp-uglify');
      var rename = require('gulp-rename');
      
      gulp.task('minifyjs', function() {
          return gulp.src('src/js/*.js') //操作的源文件
              .pipe(concat('built.js')) //合并到临时文件     
              .pipe(gulp.dest('dist/js')) //生成到目标文件夹
              .pipe(rename({suffix: '.min'})) //重命名  
              .pipe(uglify())    //压缩
              .pipe(gulp.dest('dist/js'));
      });
      
      gulp.task('default', ['minifyjs']);
      ```
    * 页面引入js浏览测试 : index.html
      ```
      <script type="text/javascript" src="dist/js/built.min.js"></script>
      ```
    * 打包测试: gulp
  * 处理css
    * 创建less/css文件
      * src/css/test1.css
        ```
        #div1 {
          width: 100px;
          height: 100px;
          background: green;
        }
        ```
      * src/css/test2.css
        ```
        #div2 {
          width: 200px;
          height: 200px;
          background: blue;
        }
        ```
      * src/less/test3.less
        ```
        @base: yellow;
        .index1 { color: @base; }
        .index2 { color: green; }
        ```
    * 下载插件:
      ```
      npm install gulp-less gulp-clean-css --save-dev 
      ```
    * 配置编码
      ```
      var less = require('gulp-less');
      var cleanCSS = require('gulp-clean-css');
      
      //less处理任务
      gulp.task('lessTask', function () {
        return gulp.src('src/less/*.less')
            .pipe(less()) 
            
            .pipe(gulp.dest('src/css'));
      })
      //css处理任务, 指定依赖的任务
      gulp.task('cssTask',['lessTask'], function () {
      
        return gulp.src('src/css/*.css')
            .pipe(concat('built.css'))
            .pipe(gulp.dest('dist/css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist/css'));
      });
      
      gulp.task('default', ['minifyjs', 'cssTask']);
      ```
    * 页面引入css浏览测试 : index.html
      ```
      <link rel="stylesheet" href="dist/css/built.min.css">
      <div id="div1" class="index1">div1111111</div>
      <div id="div2" class="index2">div2222222</div>
      ```
    * 打包测试: gulp
  * 处理html
      * 下载插件:
        ```
        npm install gulp-htmlmin --save-dev
        ```
      * 配置编码
        ```
        var htmlmin = require('gulp-htmlmin');
        //压缩html任务
        gulp.task('htmlMinify', function() {
            return gulp.src('index.html')
                .pipe(htmlmin({collapseWhitespace: true}))
                .pipe(gulp.dest('dist'));
        });
        gulp.task('default', ['minifyjs', 'cssTask', 'htmlMinify']);
        ```
      * 修改页面引入
        ```
        <link rel="stylesheet" href="css/built.min.css">
        <script type="text/javascript" src="js/built.min.js"></script>
        ```
      * 打包测试: gulp    
  * 自动编译
    * 下载插件
      ```
      npm install gulp-livereload --save-dev
      ```
    * 配置编码:
      ```
      var livereload = require('gulp-livereload');
                
      //所有的pipe
      .pipe(livereload());
      
      gulp.task('watch', ['default'], function () {    
        //开启监视
        livereload.listen();
        //监视指定的文件, 并指定对应的处理任务
        gulp.watch('src/js/*.js', ['minifyjs'])
        gulp.watch(['src/css/*.css','src/less/*.less'], ['cssTask','lessTask']);
      });
      ```
      
    * 热加载(实时加载)
        * 下载插件：gulp-connect
        ```
        1、 npm install gulp-connect --save-dev
        2、 注册 热加载的任务 server，注意依赖build任务 
        3、注册热加载的任务
            //配置加载的选项
            connect.server({
                  root : 'dist/',//监视的源目标文件路径
                  livereload : true,//是否实时刷新
                  port : 5000//开启端口号
             });
             // 自动开启链接
             open('http://localhost:5000');//npm install open --save-dev
             // 监视目标文件
            gulp.watch('src/js/*.js', ['js']);
            gulp.watch(['src/css/*.css', 'src/css/*.less'], ['cssMin', 'less']);
        ```
    
    * 扩展
        * 打包加载gulp插件
        * 前提：将插件下载好。
        * 下载打包插件： gulp-load-plugins
        * npm install gulp-load-plugins --save-dev
        * 引入： var $ = require('gulp-load-plugins')();！！！引入的插件是个方法，必须记住调用。
        * 神来之笔：其他的插件不用再引入了
        * 使用方法：
            ```
            * 所有的插件用 $ 引出，其他插件的方法名统一为插件的功能名字(即插件名字的最后一部分)：如：concat,connect,cssmin...
            gulp.task('less', function () {
  				return gulp.src('src/less/*.less')
			    .pipe($.less())//将less转换为less
			    .pipe(gulp.dest('src/css/'))//将转换为less的文件输出到src下
			    .pipe($.livereload())//实时刷新
			    .pipe($.connect.reload())
			});


            ```
一个示例的gulp.js文件
```
// 导入工具包，require('node_modules里对应木块')
// 本地安装gulp-rev-append
// 2.1、github：https://github.com/bustardcelly/gulp-rev-append
// 2.2、安装：命令提示符执行 cnpm install gulp-rev-append --save-dev
// 2.3、注意：没有安装cnpm请使用 npm install gulp-rev-append --save-dev 什么是cnpm，如何安装？
// 2.4、说明：--save-dev 保存配置信息至 package.json 的 devDependencies 节点。package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件

var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	cssmin = require('gulp-minify-css'),
	cssver = require('gulp-make-css-url-version'),
	rev = require('gulp-rev-append'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	less = require('gulp-less');

// 定义一个testLess任务(自定义任务名称)
gulp.task('testLess', function() {
	gulp.src('src/less/index.less')/*该任务针对的文件*/
		.pipe(less())/*该任务调用的模块*/
		.pipe(gulp.dest('src/css'));/*将会在src/css下生成index.css*/
});

// html代码优化和压缩
gulp.task('testHtmlmin', function() {
	var options = {
		removeComments : true,/*清除HTML注释*/
		collapseWhitespace: true,/*压缩HTML*/
		collapseBooleanAttributes: true,/*省略布尔属性的值<input checked="true"/>==> <input/>*/
		removeEmptyAttributes: true,/*删除所有空格作属性值<input id=""/> ==> <input />*/
		removeScriptTypeAttributes: true,/*删除<script>的type ="text/javascript"*/
		removeStyleLinkTypeAttibutes: true,/*删除<Style>和<link>的type="text/css"*/
		minifyJS: true,/*压缩页面JS*/
		minifyCSS: true,/*压缩页面CSS*/
	};
	gulp.src('src/html/*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dist/html'))
});

//图片压缩
gulp.task('testImagemin', function () {
    // gulp.src('src/img/*.{png,jpg,gif,ico}')
    //     .pipe(imagemin())
    //     .pipe(gulp.dest('dist/img'));
    gulp.src('src/img/*.{png,jpg,gif,ico}')
    	.pipe(imagemin({
    		optimizationLevel: 5,/*类型:Nmuber 默认:3 取值范围: 0-7(优化等级)*/
    		progressive: true,/*类型:Boolean 默认:false 无损压缩JPG图片*/
    		interLaced: true,/*类型:Boolean 默认:false 隔行扫描gif进行渲染*/
    		multipass: true/*类型 Boolean 默认 false 多次优化SVG直到完全优化*/
    	}))
    	.pipe(gulp.dest('dist/img'));
});

// 深度压缩图片
gulp.task('test2Imagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],/*不要移除svg的viewbox属性*/
            use: [pngquant()] /*使用pngquant深度压缩png图片的imagemin插件*/
        }))
        .pipe(gulp.dest('dist/img'));
});


// 只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片，
// 没有必要压缩所有图片，使用”gulp-cache”
// 只压缩修改的图片，没有修改的图片直接从缓存文件读取（C:\Users\Administrator\AppData\Local\Temp\gulp-cache）。
gulp.task('test3Imagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

// 使用gulp-minify-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存。重要：gulp-minify-css已经被废弃，请使用gulp-clean-css，用法一致。
gulp.task('testCssmin', function() {
	// gulp.src('src/css/*.css')
	// 	.pipe(cssmin())
	// 	.pipe(gulp.dest('dist/css'));
		gulp.src('src/css/*.css')
			.pipe(cssmin({
				advanced: false,/*类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]*/
				compatibility: 'ie7',/*保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，*/
				keepBreaks: true,/*类型：Boolean 默认：false [是否保留换行]*/
				keepSpecialComments: '*'/*保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀*/
			}))
			.pipe(gulp.dest('dist/css'));
});

// 给css文件里引用url加版本号（根据引用文件的md5生产版本号），像这样：
gulp.task('testUrlCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssver()) /*给css文件里引用文件加版本号（文件MD5）*/
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

/*使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
gulp-rev-append 插件将通过正则(?:href|src)=”(.*)[?]rev=(.*)[“]
查找并给指定链接填加版本号（默认根据文件MD5生成，因此文件未发生改变，此版本号将不会变）*/
gulp.task('testRev', function() {
	gulp.src('src/html/index.html')
		.pipe(rev())
		.pipe(gulp.dest('dist/html'));
});

// 使用gulp-uglify压缩javascript文件，减小文件大小。
gulp.task('testJsmin', function() {
	gulp.src('src/js/index.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});
// 压缩多个js文件
var jsFiles = [
		'src/js/index.js',
		'src/js/jquery-kcb.js',
		'src/js/higcharts-3d.js',
		'src/js/hightcharts-all.js',
		'src/js/higcharts-more.js',
		'src/js/higcharts.js',
		'src/js/wxcomm.js'
];
gulp.task('test2Jsmin', function() {
	gulp.src(jsFiles)
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// 匹配符“!”，“*”，“**”，“{}”
gulp.task('test3Jsmin', function() {
	// 压缩SRC/Js目录下的所有的js文件
	// 除了index.js（**匹配src/js的0个或多个子文件夹）
	// 多个使用{one,two}.js,单个直接one.js
	gulp.src(['src/js/*.js', '!src/js/**/{index,highcharts}.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// 指定变量名不混淆改变
gulp.task('test4Jsmin', function() {
	gulp.src(['src/js/*.js', '!src/js/**/wxcomm.js'])
		.pipe(uglify({
			// mangle: true,类型:boolean 默认 true 是否修改变量名
			mangle: {except: ['require', 'exports', 'module', '$']}/*排除混淆关键字*/
		}))
		.pipe(gulp.dest('dist/js'));
});

// gulp-uglify其他参数
gulp.task('test5Jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{hightcharts-all, higcharts-3d}.js'])
        .pipe(uglify({
            mangle: true,/*类型：Boolean 默认：true 是否修改变量名*/
            compress: true,/*类型：Boolean 默认：true 是否完全压缩*/
            preserveComments: 'all' /*保留所有注释*/
        }))
        .pipe(gulp.dest('dist/js'));
});

// 使用gulp-concat合并javascript文件，减少网络请求。
gulp.task('testConcat', function() {
	gulp.src('src/js/*.js')
		.pipe(concat('all.js'))/*合并后的文件名*/
		.pipe(gulp.dest('dist/js'));
});

// 使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀。
// 使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀。【特别是开发移动端页面时，就能充分体现它的优势。例如兼容性不太好的flex布局。】
gulp.task('testAutoFx', function () {
    gulp.src('src/css/index.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, 
            // 是否美化属性值 默认：true 像这样：
            // -webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true /*是否去掉不必要的前缀 默认：true */
        }))
        .pipe(gulp.dest('dist/css'));
});
// 3.2、gulp-autoprefixer的browsers参数详解 （传送门）：
// ● last 2 versions: 主流浏览器的最新两个版本
// ● last 1 Chrome versions: 谷歌浏览器的最新版本
// ● last 2 Explorer versions: IE的最新两个版本
// ● last 3 Safari versions: 苹果浏览器最新三个版本
// ● Firefox >= 20: 火狐浏览器的版本大于或等于20
// ● iOS 7: IOS7版本
// ● Firefox ESR: 最新ESR版本的火狐
// ● > 5%: 全球统计有超过5%的使用率
// 3.3、发现上面规律了吗，相信这不难看出，接下来说说各浏览器的标识：
// Android for Android WebView.
// BlackBerry or bb for Blackberry browser.
// Chrome for Google Chrome.
// Firefox or ff for Mozilla Firefox.
// Explorer or ie for Internet Explorer.
// iOS or ios_saf for iOS Safari.
// Opera for Opera.
// Safari for desktop Safari.
// OperaMobile or op_mob for Opera Mobile.
// OperaMini or op_mini for Opera Mini.
// ChromeAndroid or and_chr
// FirefoxAndroid or and_ff for Firefox for Android.
// ExplorerMobile or ie_mob for Internet Explorer Mobile.
// 定义一个默认任务 elseTask为其他任务

// gulp-livereload拯救F5！当监听文件发生变化时，浏览器自动刷新页面。【事实上也不全是完全刷新，例如修改css的时候，不是整个页面刷新，而是将修改的样式植入浏览器，非常方便。】特别是引用外部资源时，刷新整个页面真是费时费力。
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('default', ['testLess', 'elseTask']);
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
```
