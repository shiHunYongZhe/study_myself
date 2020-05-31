# 你不知道的JavaScript(上卷)
---

## 遮蔽效应

### 遮蔽效应的原理

```js
function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2);
```

上述代码存在三个逐级嵌套的作用域，分别为全局作用域、foo所创建的作用域和bar所创建的作用域。
引擎执行`console.log(a, b, c);`声明，并查找`a,b,c`三个变量的引用，首先从最内部的作用域开始查找，
如果没有找到对应的变量，例如在`bar`所创建的作用域中，并没有找到`a和b`，则往外部作用域查找，
如果找到了对应的变量，例如在`bar`所创建的作用域中，可以直接找到`b`变量，

**作用域查找会在找到第一个匹配的标识符时停止**，因为即使在外部作用域再次声明了变量`b`，
JS引擎也都会选择忽略掉，这叫做 **遮蔽效应** 。

### 全局属性绕开遮蔽效应

全局变量会自动成为全局对象(比如浏览器中的 `window`对象)的属性，因此可以不直接通过全局对象的词法名称，
而是间接地通过对全局对象属性的引用来对其进行访问。

```js
window.a
```

通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量，如果被遮蔽了，无论如何都无法被访问到。

**无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。**

## 欺骗词法

指得是在程序运行时来“修改”（也可以说欺骗）词法作用域。
使用欺骗词法并不是什么好主意，并且最重要的是：**欺骗词法作用域会导致性能下降** 。
所以在程序中动态生成代码的使用场景非常罕见，因为它所带来的好处无法抵消性能上的损失。

### `eval`

`eval()`函数接收一个字符串作为参数，并将其中的内容视为好像在书写时就存在于
程序中这个位置的代码，换句话说，可以在你写的代码中用程序生成代码并运行，就好像代码是写在那个位置的一样。
在执行 `eval(..)` 之后的代码时，引擎并不“知道”或“在意”前面的代码是以动态形式插
入进来，并对词法作用域的环境进行修改的。引擎只会如往常地进行词法作用域查找。

```js
function foo(str, a) {
  eval(str);  // 欺骗
  console.log(a,b);
}
var b=2;
foo('var b=3;',1);
```

以上代码将会输出`1,3`，这是因为代码句 ` eval(str) ` 实质上就相当于是`var b = 3`，
JS引擎在寻找`a,b`变量的时候，能够在`foo`的作用域内同时找到，所以就不会再访问全局作用域中的`b`了。

在严格模式下(`use strict`)，`eval()`在运行时有其自己的作用域，意味着其中的声明无法修改所在的作用域。

```js
function foo(str) {
  'use strct';
  eval(str);
  console.log(a);   // ReferenceError: a is not defined
}
foo('var a=2;');
```

### `with`

`with` 通常被当作重复引用同一个对象的多个属性的快捷方式，可以*不需要重复引用对象本身*。
在严格模式下，`with` 被完全禁止使用。

```js
var obj={
  a:1,
  b:2,
  c:3
};
```

以上代码使用字面量方式定义了一个存在三个属性的对象，下面给这三个属性重新赋值，有两种方法：
```js
obj.a = 2;
obj.b = 3;
obj.c = 4;
```
和下面代码起到的作用其实是一样的，因为`with`改变下面代码大括号中变量的作用域：
```js
with(obj) {
  a=2;
  b=3;
  c=4;
}
```

但 `with` 的作用并不仅仅是改变作用域那么简单，有的时候，可能会导致意料之外的结果：

```js
function foo(obj) {
  with (obj) {
    a = 2;
  }
}
var o1 = {
  a: 3
};
var o2 = {
  b: 3
};

foo(o1);
console.log(o1.a); // 2
foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2——不好，a 被泄漏到全局作用域上了！
```

尽管 `with` 块可以将一个对象处理为词法作用域，但是这个块内部正常的 `var`声明并不会被限制在这个块的作用域中，而是被添加到 `with` 所处的函数作用域中。

```js
var obj={
  a:1,
  b:2
}
with(obj){
  var c=3;
  var b=5;
  a:2
}
console.log( obj.a ); // 2
console.log( obj.b ); // 5
console.log( b ); // undefined
console.log( c ); // 3
```

## 立即执行函数表达式(IIFE)

```js
(function{
console.log('ok')
})();

// 上面代码其实和下面这一段，写法上第二个圆括号的位置发生了变化，
// 但在功能上是一致的，没什么区别，**选择哪个全凭个人喜好**。

(function{
console.log('ok')
}());

```

## 变量提升，函数声明优先于变量声明

```js
foo();  // 1
var foo;
function foo() {
  console.log(1);
}

foo=function() {
  console.log(2);
}
```

以上代码最终将会输出 `1` ，因为在上述的提升过程中，函数首先被提升，然后才是变量，
第二句的 `var foo` 其实已经因为重复声明，被JS引擎忽略掉了。

## `this` 隐式绑定

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。

```js
function foo() {
  console.log(this.a);
}

var obj2={
  a:42,
  foo:foo
}

var obj1={
  a:2,
  obj2:obj2
}

obj1.obj2.foo();    // 42
``` 
上述代码将会输出 `42` 而不是 `2` ，这是因为在引用链上，最后一层是 `obj2` ，而 `obj2` 的 `a` 属性值就是 `42`。

## `this` 隐式绑定丢失

一个最常见的 `this` 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，
从而把 `this` 绑定到全局对象或者 `undefined` 上，取决于是否是严格模式。

```js
function foo() {
  console.log(this.a);
}

var obj={
  a:2,
  foo:foo
}

var bar=obj.foo;    // 函数别名
var a='oops,global';

bar();  // 'oops,global'
```
上述代码中，虽然 `bar` 是 `obj.foo` 的一个引用，但是实际上，它引用的是 `foo` 函数本身，因此此时的
`bar()` 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

一种更微妙、更常见并且更出乎意料的情况发生在传入回调函数时：

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // fn 其实引用的是 foo
  fn(); // <-- 调用位置！
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global"; // a 是全局对象的属性
doFoo(obj.foo); // "oops, global"
```

`this`绑定地隐式丢失是非常常见的，一般发生在为函数引用声明一个变量作为别名，
或者将函数引用作为函数的参数传递，而且调用回调函数的函数可能会修改`this`。

## 判断 `this`

- new

函数是否在 `new` 中调用（ `new` 绑定）？如果是的话 `this` 绑定的是新创建的对象。

```js
var bar = new foo();
```

- `call` `apply`

函数是否通过 `call 、 apply` （显式绑定）或者硬绑定调用？如果是的话， `this` 绑定的是指定的对象。

```js
var bar = foo.call(obj2)
```

- 隐式绑定

函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上下文对象。

```js
var bar = obj1.foo();
// 上述代码，foo()在全局的上下文对象中被调用，使用 bar 作为 函数别名，
// 所以this 其实就是被隐式绑定到了全局作用域上。
```

- 默认绑定

如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 `undefined`，否则绑定到全局对象。

- 箭头函数

箭头函数(`=>`)不使用以上 `this` 的四种标准规则，而是根据外层（函数或者全局）作用域来决定 `this`，（无论 `this` 绑定到什么），这其实和 `ES6` 之前代码中的 `self = this `机制一样。并且 箭头函数的绑定无法被修改。

- `this`绑定判断的例外情况

如果把 `null` 或者 `undefined` 作为 `this` 的绑定对象传入 `call apply` 或者 `bind`，这些值在调用时会被忽略，实际应用的是默认绑定规则
```js
function foo() {
  console.log(this.a);
}
var a=2;
foo.call(null);  // 2
```

需要注意的是，总是使用 `null` 或者 `undefined` 来忽略`this`的绑定可能产生一些副作用。
一种 **更安全** 的做法是传入一个特殊的对象，把 `this` 绑定到这个对象不会对你的程序产生任何副作用。
它就是一个空的非委托的对象，而在JS中，创建一个空对象的最简单方法就是`Object.create(null)`
`Object.create(null)` 和 `{}` 很像，但是并不会创建 `Object.prototype` 这个委托，所以它比 `{}` **更空**

```js
function foo(a,b) {
  console.log( "a:" + a + ", b:" + b );
}
// 我们的 DMZ 空对象
var ø = Object.create( null );
// 这里之所以使用一个空对象，其实就是为了能把数组展开成参数传入函数
foo.apply( ø, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( ø, 2 );
bar( 3 ); // a:2, b:3
```

## 复制对象

考虑下面代码：
```js
var obj1={a:'aa',b:'bb'}
var obj2=obj1
obj2===obj1  // true
```

因为实质上这里`obj2`和`obj1`实质上都是引用内存中同样的一个地址，所以它们是完全相同的，`obj2`的改变，能够同时让`obj1`同时发生相同的变化，这并不是复制，因为没有产生任何副本。

- `JSON.parse`

对于一个能够被`JSON序列化`并且解析的对象来说，有一种巧妙的复制方法：
```js
var obj1={a:'aa',b:'bb'}
var obj2=JSON.parse(JSON.stringify(obj1));
obj2==obj1  // false
```
这个时候，`obj2`所指向的内存中的地址，实质上已经与`obj1`不再相同了。

- `slice`

如果是复制数组，那么可以借助`slice()`方法：
```js
var a=[1,2,3];
var b=a;
var c=a.slice();
b === a;    // true
c === a;    // false
```

- `Object.assign`

如果需要深度复制，那么可借助`ES6`中定义的`Object.assign()`方法。

## 属性描述符

### `getOwnPropertyDesciptor`

从`ES5`开始，可使用 `Object.getOwnPropertyDescriptor(obj, attr)` 来检测属性特性。
```js
var obj1={
  a:2
};

Object.getOwnPropertyDescriptor(obj1, 'a');

// 输出:
{
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true
}
```
将一个对象属性的 `writable` 和 `configurable` 全部设置为 `false`，就可以创建一个真正的常量属性(不可修改、定义或删除)。

### 禁止扩展

如果你想禁止一个对象添加新属性并且保留已有属性，可以使用`Object.preventExtensions()`。

```js
var obj1={
  a:2
}

Object.preventExtensions(obj1);

obj1.b=3;
obj1.b    // undefined
```

### 密封

`Object.seal()` 方法会创建一个 **密封**对象，这个方法实际上会在一个现有对象上调用
**`Object.preventExtensions()`**，并把所有现存属性标记为 **`configurable:false`**


### 冻结

`Object.freeze()` 方法会创建一个 **冻结**对象，这个方法实际上会在一个现有对象上调用
**`Object.seal()`**，并把所有数据访问属性标记为 **`writable:false`**
**此方法是可以应用在对象上的级别最高的不可变性**


## 检测对象及其属性的存在性

- 在不访问属性值的情况下判断对象中是否存在这个属性
```js
var obj={
  a:2
}

'a' in obj    // true
'b' in obj    // false

obj.hasOwnProperty('a')  // true
obj.hasOwnProperty('b')  // false
```

- 检测对象的枚举属性

```js
var myObject = { };
Object.defineProperty(
  myObject,
  "a",
  // 让 a 像普通属性一样可以枚举
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  // 让 b 不可枚举
  { enumerable: false, value: 3 }
);

myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty("b"); // true
Object.getOwnPropertyNames(myObject); // ["a", "b"]

// 第一种检测枚举的方法
for (var k in myObject) {
  console.log(k, myObject[k]);
}
// "a" 2

// 第二种检测枚举的方法
myObject.propertyIsEnumerable("a"); // true
myObject.propertyIsEnumerable("b"); // false

// 第三种检测枚举的方法
Object.keys(myObject); // ["a"]
```

# 你不知道的JavaScript(中卷)
---

## 类型和语法

### 函数不仅是对象,还可以拥有属性。

```js
function a(b, c){}
a.length    // 2
```
以上代码中，因为函数`a()`具有两个参数，所以其属性`length` 的值为`2`。

### 使用 `arguments` 对象(类数组)将函数的参数当做列表访问，即转换为数组(注意，这种方法从ES6开始已废止)。

```js
function foo() {
  var arr=Array.prototype.slice.call(arguments);
  arr.push('bam');
  console.log(arr);
}

foo('bar', 'baz');      // ["bar","baz","bam"]
```

在 `ES6` 中，可以使用 `ES6` 的内置工具函数 `Array.from()`来实现同样的功能：
```js
let arrLike={
  '0':'a',
  '1':'b',
  '2':'c',
  length:3
}
var arr = Array.from(arrLike);
arr     // ["a", "b", "c"]
arr.length    // 3
```

不过，`Array.from()` 只能将部署了 `Iterator` 接口的数据结构转为数组，
例如字符串(`string` )类型、带有 `length` 属性的类数组等，对于其他的数据结构则不起作用。

另外，`ES6` 的扩展运算符 `...` 同样具备将某些数据结构转为数组的功能：
```js
function foo() {
  var arr = [...arguments];
}
foo('a','b','c');     // ["a", "b", "c"];

// 或者用来转换 NodeList对象:
[...documents.querySelectorAll('div')]
```

这种用法同样具有局限性 ，扩展运算符背后调用的是遍历器接口(`Symbol.iterator`)，
例如函数的参数(`arguments`)对象，如果一个对象没有部署这个接口，就无法转换。

还有一种在 `ES6` 中将数值转换为数组的方法，就是 `Array.of()`:
```js
Array.of()    // []
Array.of(undefined)     // [undefined]
Array.of(1,2)     // [1,2]
```

### `ES6` 中的八进制与二进制新写法

`JavaScript` 支持二进制、八进制和十六进制的写法：
以 `0x` 或 `0X` 开头的十六进制：
```js
0xf3    // 243的十六进制
0Xf3    // 243的十六进制
```

以 数字`0`开头八进制：
```js
0363    // 243的八进制
```

在 `ES6` 中，严格模式下不在支持类似 `0363` 的八进制格式，非严格可以继续使用，
不过为了兼容性，最好避免使用。

`ES6` 支持以下新格式：
以 `0o` 或者 `0O` 开头的八进制：
```js
0o363     // 243的八进制
0O363     // 243的八进制
```

以 `0b` 或者 `0B` 开头的二进制：
```js
0b11110011     // 243的二进制
0B11110011     // 243的二进制
```

### `0.1 + 0.2` 的精度问题。

由于 `JavaScript` 遵循 `IEEE 754` 规范，所以一些数字运算，会出现无法做到完全精确的情况：
```js
0.1 + 0.2 === 0.3     // false
```
这是因为在JS中二者相加的结果其实等于 `0.30000000000000004`。

解决方案：
- 先将浮点数放大为整数，计算完成后再缩小为浮点数：
```js
0.1 * 10 + 0.2 * 10 === 0.3 * 10    // true
```
- 机器精度

设置一个误差范围值，称为及其精度
在`JavaScript`中，此时通常是`2^-52`，
在`ES6`中，该值定义在`Number.EPSTLON`, 也可以为`ES6`之前的版本写`polifill`。
```js
if(!Number.EPSTLON) {
  Number.EPSTLON = Math.pow(2, -52);
}
```

然后就可以使用`Number.EPSTLON` 来比较两个数字是否相等(在指定的误差范围内)：
```js
function numbersCloseEnoughToEqual(n1,n2) {
  return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

numbersCloseEnoughToEqual( a, b ); // true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 ); // false
```

### 值和引用

```js
function foo(x) {
  x.push(4);
  console.log(x);     //[1,2,3,4]

  x=[4,5,6];
  x.push(7);
  console.log(x);     //[4,5,6,7]
}

var a=[1,2,3];
foo(a);
console.log(a);     // 是[1,2,3,4]， 不是[4,5,6,7]
```

将 `a`作为参数传给 `foo`，实际上是将 `a`的一个引用传了进去，所以对这个引用的操作，同时也会作用给 `a`，
当修改参数的引用时，这个参数与 `a`不再指向同一个引用，所以不再有关联

### `JSON.stringify()` 不太为人所知但却非常有用的功能/参数。

可选参数`replacer`：可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被派出，和`toJSON()` 类似。

```js
var a = {
  b: 42,
  c: "42",
  d: [1,2,3]
};

JSON.stringify(a, ['b', 'c']);    // "{"b":42,"c":"42"}"
JSON.stringify(a, function(k, v){
  if(k !== 'c') {
    return v;
  }
});
// "{"b":42,"d":[1,2,3]}"
```

## 判断`IE`浏览器

### 判断 `document.all` 的真假

在现在标准浏览器上， `document.all` 的值为`false`，而在包括`IE10`及以下版本则为`true`。
```js
if(document.all) {
  console.log('IE10及以下的IE浏览器');
}
```

### 是否存在 `window.addEventListener` 属性

```js
if(window.addEventListener){ 
  console.log("IE9及以上或标准浏览器"); 
} else if (window.attachEvent){ 
  console.log("IE10及以上的IE浏览器"); 
} else { 
  console.log("这种情况发生在不支持DHTML的老版本浏览器（现在一般都支持）") 
}
```

## 隐式强制类型转换

### 字符串和数字之间的隐式强制类型转换

如果操作符为 `+` ，其中一个操作数是字符串(或者能够转换为字符串，例如数组和对象)的，
则进行字符串拼接；如果操作符为 `-` ，表明是减法运算，首先将两边操作数全都转换为字符串，
然后再转换为数字进行减法操作。
  
```js
var a = '42';
var b = 1;
a + b     // 421

var c = [1,2];
var d = [3,4];
c + d     // '1,23,4'

var e = [5];
var f = [3];
e - f     // 2
```

>注意类似于 `a+` 隐式转换与 `String(a)` 显式转换间的差别

```js
var a = {
  valueOf: function() { return 42; },
  toString: function() { return 4; }
};

a + ''    // 42
String(a)     // 4
```

以上两种转换的结果不同，这是因为 `a + ''`会对 `a` 调用 `valueOf` 方法，
然后通过 `ToString` 抽象操作将返回值转换为字符串。
而 `String(a)` 则是直接调用 `ToString()`。

### 宽松相等 `==` 于完全相等 `===`

- 转换效率

宽松相等 `==` 具有强制类型转换的功能，而完全相等 `===`则不具备，
所以对相同的一组数进行比较，使用这两个操作符可能会产生不同的结果。
但是，并不像想象中的那样，二者的效率几乎相同，宽松相等 `==` 因为需要强制转换类型，
所以可能要多花点时间，但这 **仅仅是在微妙级别(百万分之一秒)的差别而已**。

- 强制转换的方法

如果两个操作数中，存在一个为数字类型的，那么就把另外一个(包括字符串、布尔值)转换为数字类型(如果可以的话)，
然后返回它们的操作结果。

根据以上规则：
```js
var x=true;
var y=42;
x == y;     // false
```
因为 `y` 是数字类型，所以将 `x` 转为数字类型，也就是 `1`，所以返回 `false`。

### 安全运用隐式强制类型转换

- 如果两边的值中有 `true` 或者 `false` ，千万不要使用宽松相等 `==`
- 如果两边的值中有 `[]` 、`""` 或者 `0` ，尽量不要使用宽松相等 `==`

以上两种情况下，最好使用 `===` 来避免不经意的强制类型转换，这些原则可以避开几乎所有强制类型转换的坑。

## 函数参数

### 默认值

对 `ES6` 中的参数默认值而言，除了在极少数情况下意外，参数被省略或被赋值为 `undefined` 效果都一样，都是取该参数的默认值。

```js
function foo(a=42, b=a+1) {
  console.log(a, b);
}

foo(10)     // 10, 11
foo(10, undefined)    // 10, 11
```

### 命名参数关联

函数参数默认值会导致 `arguments` 数组和相对应的命名参数之间出现偏差：
```js
function foo(a) {
  a = 42;
  console.log(arguments[0]);
}

foo(2);     // 42(linked)
foo();    // undefined(not linked)
```

严格模式下则不会存在参数关联的说法，但无论如何，**尽量不要依赖这种关联机制**

```js
function foo(a) {
  'use 'strict';
  a = 42;
  console.log(arguments[0]);
}

foo(2);     // 2(not linked)
foo();    // undefined(not linked)
```

## `try...cantch...finally`

### 执行顺序

```js
function foo() {
  try {
    return 42;
  }
  finally {
    console.log('Hello');
  }
  
  console.log('never runs');
}

console.log(foo());
// Hello
// 42
```
上述代码中，`return 42` 先执行，并将 `foo()` 函数的返回值设置为 `42` ，
然后 `try` 执行完毕，接着执行`finally`，最后`foo()` 函数执行完毕，
`foo()` 函数中最后一句`console.log('never runs');`因为前面已经存在`return 42`返回值，所以没有机会执行。
同理，如果将`return 42;` 换成 `throw 42;`，将在输出`Hello`之后，再输出`Uncaught 42`

### `finally` 抛出异常终止

如果在 `finally` 中抛出异常，则函数就会在此终止，并且如果此前`try`中已经有`return`，设置了返回值，则该值也会被丢弃。
```js
function foo() {
  try {
    return 42;
  }
  finally {
    throw 'Oops!';
  }
  console.log('never runs');
}

console.log(foo());
// Uncaught Oops!
```

### `finally` 返回值覆盖

由于 `finally` 无论如何都会被执行，所以如果在 `finally` 中存在 `return` 返回值，
那么 `finally` 中的 `return` 会覆盖 `try` 或者 `catch` 中的 `return` 返回值。

```js
function foo() {
  try {
    return 42;
  }
  finally {
    // 没有返回语句，所以不存在覆盖问题
  }
}

function bar() {
  try {
    return 42;
  }
  finally {
    // 覆盖前面的 return 42，并且因为没有确切的返回值，
    // 所以将返回 undefined，效果和 return undefined; 是相同的。
    return;
  }
}

function baz() {
  try {
    return 42;
  }
  finally {
    // 覆盖前面的 return 42
    return 'Hello';
  }
}

foo();    // 42
bar();    // undefined
baz();    // Hello
```

## `switch` 语句

### 严格 `true`
`switch` 语句块(即双大括号)中，`case` 表达式的结果必须为严格意义上的`true`，条件才能成立， 
即，类似于 `case 'abc'  ， case {}` 都是不成立的条件。

```js
var a = 'Hello world';
var b = 10;

switch (true) {
  case (a || b===10):
    // 永远执行不到这里
    break;
  default:
    console.log('Oops');
}
```
因为 `(a || b===10)` 的结果是 `Hello world` ，尽管隐式强制类型转换为布尔值后也是 `true`，
但并非严格意义上的 `true`，所以条件不成立。
如果想让条件成立，则可以使用显式强制表达式的方法，即 `case !!((a || b===10)`。

### 执行顺序

```js
var a = 10;
switch (a) {
  case 1:
  case 2:
    // 永远执行不到这里
  default:
    console.log('default');
  case 3:
    console.log('3');
    break;
  case 4:
    console.log('4');
}
// default
// 3
```

上例中的代码是这样执行的，首先遍历并找到所有匹配的 `case`，如果没有匹配则执行 `default` 中的代码，
因为 `default` 没有 `break` 语句 ，所以继续执行已经遍历过的 `case 3` 代码块，直到 `break` 为止。
一般来说，不建议混合 `default` 与 `case` ，如果有必须使用的必要，那么请**进行详细的注释**。

## 全局`DOM`变量

由于浏览器演进的历史遗留问题，在创建带有`id` 属性的`DOM` 元素时，也会创建同名的全局变量。
```html
<div id="foo"></div>
```

```js
if(typeof foo=='undefined'){
  // 不会执行这到这里
  foo=42;
}
console.log(foo);     // HTML对象
```

上述代码中，因为在页面文档上存在一个`id='foo'`的元素，相当于是在`window`的全局环境中
添加了一个名为`foo`的全局`DOM`对象，所以`foo`的值就是对应的`HTML`元素对象。

## `<script>`

- 内联代码的 `script` 标签没有 `charset` 属性。

- 内联代码的 `script` 标签中不可以出现 `</script>` 字符串，一旦出现即被视为代码块的结束。

```js
<script>
  // 这将导致错误
  var code = "<script>alert('hello world')</script>";
</script>

// 可以修改成如下代码进行变通
<script>
  // 这样就行了
  var code = "<script>alert('hello world')</sc" + "ript>";
</script>
```
---

## 异步和性能

### `Promise`

如果向 `Promise.resolve()` 传递一个非`Promise`、非`thenable`的立即值，
就会得到一个用这个值填充的`promise`，这同样适用于 `Promise.reject()`。

```js
// 下面两种情况的结果是完全相同的
var p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

var p2 = Promise.resolve(42);
```

如果向 `Promise.resolve()` 传递一个真正的`Promise`，就只会返回同一个`Promise`

```js
var p1 = Promise.resolve(42);
var p2 = Promise.resolve(p1);

p1 === p2;    // true
```

### `yield`

### 迭代消息传递

```js
function *foo(x) {
  // 注意，yield 的圆括号不能省略
  var y = x * (yield);
  return y;
}

var it = foo(6);
// 启动foo()
it.next();

var res = it.next(7);
res.value     // 42
```

以上代码，首先传入`6`作为参数，然后调用`it.next()`启动 `*foo()`,
在`*foo()` 内部，语句将会暂停在 `yield` 处，并在本质上要求调用代码为 `yield`
表达式提供一个结果值。接下来，调用 `it.next( 7 )` ，这一句把值 `7` 传回作为被暂停的
yield 表达式的结果。

>**`yield` 和 `next()` 调用存在一个不匹配，一般来说，需要的 `next()` 调用要比 `yield` 语句多一个。**

### 生成器

#### `iterable`

接口中有 `next()` 方法的对象，称为迭代器对象。

从一个 `iterable` 中提取迭代器的方法：

`iterable` 必须支持一个函数，其名称是专门的 `ES6` 符号值 `Symbol.iterable` 。
调用这个函数时，它会返回一个迭代器，通常每次调用会返回一个全新的迭代器，虽然这一点并不是必须的。
`for...of` 循环能够自动调用迭代器对象的 `Symbol.iterator` 函数，从而构建一个迭代器。

#### `[Symbol.iterator]`

`[...]` 语法被称为 计算属性名： 指定一个表达式，并用这个表达式的结果作为属性的名称。
`Symbol.iterator` 是 `ES6`预定义的特殊 `Symbol` 值之一。

```js
var a = [5,6,8];
// 调用 [Symbol.iterator]()函数，返回一个迭代器
var it = a[Symbol.iterator]();

it.next().value;    // 5
it.next().value;    // 6
it.next().value;    // 8
it.next().value;    // undefined
```

#### 停止生成器

- 自动终止
 
通常由 `break 、 return` 或者未捕获的异常，会向生成器发送一个异常结束信号 使其终止，
一般情况下，`for...of` 循环能够自动发送这个信号。

- 使用 `return(...)` 手动终止
 
```js
var it = something();
for(var v of it) {
  console.log(v);
  if(v > 500) {
    // 完成生成器的迭代器
    console.log(
      it.return('Hello World').value;
    );
  }
}

// 1 9 33 105 321 969
// Hello world
```

#### 异步迭代生成器

```js
function foo(x, y) {
  ajax(
    'http://some.url.1/?x=' + x + '&y=' + y,
    function (err, data) {
      if (err) {
        // 向 *main() 抛出一个错误
        it.throw(err);
      } else {
        // 用接收到的 data 恢复 *main()
        it.next(data);
      }
    }
  );
}

function *main() {
  try {
    var text = yield foo(11,31);
    console.log(text);
  }
  // 同步捕获异步错误。
  catch(err) {
    console.error(err);
  }
}

var it = main();
// 启动生成器
it.next();
```

#### 生成器中的 `Promise` 并发。

```js
function *foo() {
  // 两个请求是相互独立、互不干扰的，所以使用并发方式同时运行
  var results = yield Promise.all([
    request('http://some.url.1'),
    request('http://some.url.2')
  ]);

  // 这里用到了 ES6 中的结构语法
  var [r1, r2] = results;
}
```
