# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题 

## 可跳转的目录
1. **[指定语言代码](#指定语言代码)**

## 无序列表
- 文本1
- 文本2
- 文本3


## 有序列表
1. 文本1
2. 文本2
3. 文本3

<h2 id="picture"> 链接和图片</h2>

[百度](http://www.baidu.com)
[脚注链接][1]

![简书](https://dummyimage.com/600x240)

## 引用

> 一盏灯， 一片昏黄； 一简书， 一杯淡茶。 守着那一份淡定， 品读属于自己的寂寞。 保持淡定， 才能欣赏到最美丽的风景！ 保持淡定， 人生从此不再寂寞。

*斜体*
**粗体**
接下来是分割线
*** 
~~删除线~~
<u>带下划线文本</u>
未被选中的可选框
- [ ] 可选框后的内容
已被选中的可选框
- [x] 可选框后的内容
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
```
目前支持的 HTML 元素有：<kbd> <b> <i> <em> <sup> <sub> <br />等 ，如：使用 
```
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

## 代码
```
var Redis = require('ioredis');
var redis = new Redis({
    port: 6379,                  // Redis port
    host: '127.0.0.1',           // Redis host
    family: 4,                   // 4 (IPv4) or 6 (IPv6)
    password: 'UclBrt1qaz!QAZ',
    db: 0,                       // 数据库号
});
// redis.set('foo', 'bar');
redis.get('name', function (err, result) {
  console.log(result);
});
```

## 指定语言代码
```php
<?php
require './PDOHelper.class.php';

$db = new PDOHelper (array (
		'host' => '120.24.216.157',
		'username' => 'root',
		'password' => 'hongwei',
		'database' => 'meizhu',
		'charset' => 'utf8',
		'prefix' => '',
		'persistent' => false,
		'debug'=>true
));

$starttime = microtime(true);

$result = $db->sql('SELECT `id`, `hotelentity_id`, `orderinfo_id`, `roominfo_id`, `status`, `payment`, `startdate`, `enddate`, `checkindate`, `printcheckoutdate`, `checkoutdate`, `roomtype_name`, `roominfo_name`, `roominfo_from`, `createtime`, `creator`, `night`, `realnight`, `hour`, `month`, `ismidnightorder`, `minusprice` FROM `tb_order_room` WHERE `hotelentity_id` = 207 ORDER BY createtime DESC, id DESC')->fetch_all();

var_dump(microtime(true)-$starttime);

var_dump($result);
```
```bash
D:\workspace\javascript\nodejs-hexo>hexo new 新的开始
[info] File created at D:\workspace\javascript\nodejs-hexo\source\_posts\新的开始.md
```

片段的代码`var data = new Date();`

## 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# 高级使用
## 图标
- :book: [[译] this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind —— 掘金](https://juejin.im/post/5b9f176b6fb9a05d3827d03f)
[1]: http://www.taobao.com


> 流程图的显示需要再学习