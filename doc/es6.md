let const 块级作用域 暂时性死区 不可重复声明
字符串新增includes()、startsWith()、endsWith()、repeat()、padStart()、padEnd()方法
模板字符串 `data数据是${data}`
数组方法
Array.of()将参数中所有值作为原始形成数组console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
Array.from()将类数组对象或可迭代对象转化为数组console.log(Array.from([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

let arr = Array.of(1, 2, 3, 4)
find()
console.log(arr.find(item => item > 2)); // 3
findIndex()
console.log(arr.findIndex(item => item = 1)); // 0
fill()
console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]
entries()遍历键值对,keys()遍历键名，values()遍历键值
for(let [key, value] of ['a', 'b'].entries()){
    console.log(key, value);
}
// 0 "a"
// 1 "b"
includes()查找数组是否包含值
copyWithin()将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。console.log(arr.copyWithin(0,2,4)); // [3, 4, 3, 4]

数组对象解构 let [a,b] = [b,a]     
let {data} = {data: 'shuju'; info: '成功'}

函数参数默认值 function(a = '14') {console.log(a)}
promise  function a(){
  return new Promise(function(resolve, reject){
    if(true){
      resolve('true')
    }else{
      reject('false')
    }
  })
}
async await  
async funciton (){
  const data = await axios(url, params, fn())
  }
generate函数   function * () {yield 1; yield 2}
箭头函数（没有自己的this，this永远继承于定义时的父函数，改变箭头函数的this，可以通过改变其父函数的this来改变）
class类  原型链的语法糖
fetch API提供了js接口，用于替代XMLHttpRequest方式的网络请求，fetch()全局方法使用起来比XHR更加方便
数据类型Symbol表示独一无二的值，最大的用法是用来定义对象的唯一属性名

// fetch方法返回一个Promise对象，可用then方法接收结果，用catch方法捕获异常，同Promise使用
// 配置对象具体配置
const config = {
  method: 'GET',      // 请求方法
  headers: {          // 头信息
    'user-agent': 'Mozilla/4.0 MDN Example',
    'content-type': 'application/json'
  },
  body: JSON.stringify({  // 请求的 body 信息，Blob, FormData 等
    data: 1
  }),
  mode: 'cors',             // 请求的模式，cors、 no-cors 或 same-origin
  credentials: 'include',   // omit、same-origin 或 include。为了在当前域名内自动发送 cookie, 必须提供这个选项
  cache: 'no-cache',        // default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached
  redirect: 'follow',       // 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向).
  referrer: 'no-referrer',  // no-referrer、client或一个 URL。默认是 client。
  referrerPolicy: 'no-referrer', // 指定 referer HTTP头
  integrity: 'sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=', // 包括请求的  subresource integrity 值
}
// 发起请求
fetch('http://biadu.com' [, config])

普通 JS 对象通常可以很好地保存结构化数据，但它们也有一些局限性:
 只能用字符串或 sybmol 作为键
 自己的对象属性可能会与从原型继承的属性键冲突（例如 toString，constructor等）。
 对象不能用作键
 无法立即获取包含的属性的数量

所有这些问题都可以通过 map 轻松解决。 而且，它们提供了诸如迭代器和任意类型键名之类的好处。
不要将 map 当作普通对象的替代品，而应视为是普通对象补充

测试代码性能常用console.time()以及console.timeEnd()




es2020
可选链式操作符
console.log(user?.address?.zip); user存在继续取其address属性，类推

有空值合并操作符
type = type ?? true; (type不为false、undefined、null时取原值，为以上值时取true)

动态引入资源
const exportPdfButton = document.querySelector('.exportPdfBtn');
exportPdfButton.addEventListener('click', () => {
  import('./export-as-pdf.js')
    .then(module => {
      module.exportAsPdf()
    })
    .catch(err => {
      // handle the error if the module fails to load
    })
})

globalThis  包含对全局对象的引用，与环境无关。 在浏览器中，全局对象是  window 对象。 在 Node 环境中，全局对象是   global 或者 Web workers 中的  self。

7大原始类型与Object类型
Boolean
Null
Undefined
Number
BigInt
String
Symbol
Object

手写new
var New = function(Fn) {
  var obj = {}; // 创建空对象
  var arg = Array.prototype.slice.call(arguments, 1);
  obj.__proto__ = Fn.prototype; // 将obj的原型链__proto__指向构造函数的原型prototype
  obj.__proto__.constructor = Fn; // 在原型链 __proto__上设置构造函数的构造器constructor，为了实例化Fn
  Fn.apply(obj, arg); // 执行Fn，并将构造函数Fn执行obj
  return obj; // 返回结果
};

手写深拷贝
const getType = data => {
  // 获取数据类型
  const baseType = Object.prototype.toString
    .call(data)
    .replace(/^\[object\s(.+)\]$/g, "$1")
    .toLowerCase();
  const type = data instanceof Element ? "element" : baseType;
  return type;
};
const isPrimitive = data => {
  // 判断是否是基本数据类型
  const primitiveType = "undefined,null,boolean,string,symbol,number,bigint,map,set,weakmap,weakset".split(
    ","
  ); // 其实还有很多类型
  return primitiveType.includes(getType(data));
};
const isObject = data => getType(data) === "object";
const isArray = data => getType(data) === "array";
const deepClone = data => {
  let cache = {}; // 缓存值，防止循环引用
  const baseClone = _data => {
    let res;
    if (isPrimitive(_data)) {
      return data;
    } else if (isObject(_data)) {
      res = { ..._data };
    } else if (isArray(_data)) {
      res = [..._data];
    }
    // 判断是否有复杂类型的数据，有就递归
    Reflect.ownKeys(res).forEach(key => {
      if (res[key] && getType(res[key]) === "object") {
        // 用cache来记录已经被复制过的引用地址。用来解决循环引用的问题
        if (cache[res[key]]) {
          res[key] = cache[res[key]];
        } else {
          cache[res[key]] = res[key];
          res[key] = baseClone(res[key]);
        }
      }
    });
    return res;
  };
  return baseClone(data);
};


手写bind
Function.prototype.bind2 = function(context) {
  if (typeof this !== "function") {
    throw new Error("...");
  }
  var that = this;
  var args1 = Array.prototype.slice.call(arguments, 1);
  var bindFn = function() {
    var args2 = Array.prototype.slice.call(arguments);
    var that2 = this instanceof bindFn ? this : context; // 如果当前函数的this指向的是构造函数中的this 则判定为new 操作。如果this是构造函数bindFn new出来的实例，那么此处的this一定是该实例本身。
    return that.apply(that2, args1.concat(args2));
  };
  var Fn = function() {}; // 连接原型链用Fn
  // 原型赋值
  Fn.prototype = this.prototype; // bindFn的prototype指向和this的prototype一样，指向同一个原型对象
  bindFn.prototype = new Fn();
  return bindFn;
};

手写函数柯里化
const curry = fn => {
  if (typeof fn !== "function") {
    throw Error("No function provided");
  }
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};

手写 Promise
// 来源于 https://github.com/bailnl/promise/blob/master/src/promise.js
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

const isFunction = fn => typeof fn === "function";
const isObject = obj => obj !== null && typeof obj === "object";
const noop = () => {};

const nextTick = fn => setTimeout(fn, 0);

const resolve = (promise, x) => {
  if (promise === x) {
    reject(promise, new TypeError("You cannot resolve a promise with itself"));
  } else if (x && x.constructor === Promise) {
    if (x._stauts === PENDING) {
      const handler = statusHandler => value => statusHandler(promise, value);
      x.then(handler(resolve), handler(reject));
    } else if (x._stauts === FULFILLED) {
      fulfill(promise, x._value);
    } else if (x._stauts === REJECTED) {
      reject(promise, x._value);
    }
  } else if (isFunction(x) || isObject(x)) {
    let isCalled = false;
    try {
      const then = x.then;
      if (isFunction(then)) {
        const handler = statusHandler => value => {
          if (!isCalled) {
            statusHandler(promise, value);
          }
          isCalled = true;
        };
        then.call(x, handler(resolve), handler(reject));
      } else {
        fulfill(promise, x);
      }
    } catch (e) {
      if (!isCalled) {
        reject(promise, e);
      }
    }
  } else {
    fulfill(promise, x);
  }
};

const reject = (promise, reason) => {
  if (promise._stauts !== PENDING) {
    return;
  }
  promise._stauts = REJECTED;
  promise._value = reason;
  invokeCallback(promise);
};

const fulfill = (promise, value) => {
  if (promise._stauts !== PENDING) {
    return;
  }
  promise._stauts = FULFILLED;
  promise._value = value;
  invokeCallback(promise);
};

const invokeCallback = promise => {
  if (promise._stauts === PENDING) {
    return;
  }
  nextTick(() => {
    while (promise._callbacks.length) {
      const {
        onFulfilled = value => value,
        onRejected = reason => {
          throw reason;
        },
        thenPromise
      } = promise._callbacks.shift();
      let value;
      try {
        value = (promise._stauts === FULFILLED ? onFulfilled : onRejected)(
          promise._value
        );
      } catch (e) {
        reject(thenPromise, e);
        continue;
      }
      resolve(thenPromise, value);
    }
  });
};

class Promise {
  static resolve(value) {
    return new Promise((resolve, reject) => resolve(value));
  }
  static reject(reason) {
    return new Promise((resolve, reject) => reject(reason));
  }
  constructor(resolver) {
    if (!(this instanceof Promise)) {
      throw new TypeError(
        `Class constructor Promise cannot be invoked without 'new'`
      );
    }

    if (!isFunction(resolver)) {
      throw new TypeError(`Promise resolver ${resolver} is not a function`);
    }

    this._stauts = PENDING;
    this._value = undefined;
    this._callbacks = [];

    try {
      resolver(value => resolve(this, value), reason => reject(this, reason));
    } catch (e) {
      reject(this, e);
    }
  }

  then(onFulfilled, onRejected) {
    const thenPromise = new this.constructor(noop);
    this._callbacks = this._callbacks.concat([
      {
        onFulfilled: isFunction(onFulfilled) ? onFulfilled : void 0,
        onRejected: isFunction(onRejected) ? onRejected : void 0,
        thenPromise
      }
    ]);
    invokeCallback(this);
    return thenPromise;
  }
  catch(onRejected) {
    return this.then(void 0, onRejected);
  }
}

手写防抖函数
const debounce = (fn = {}, wait = 50, immediate) => {
  let timer;
  return function() {
    if (immediate) {
      fn.apply(this, arguments);
    }
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
};

手写节流函数
var throttle = (fn = {}, wait = 0) => {
  let prev = new Date();
  return function() {
    const args = arguments;
    const now = new Date();
    if (now - prev > wait) {
      fn.apply(this, args);
      prev = new Date();
    }
  };
};

手写 instanceOf
const instanceOf = (left, right) => {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while (true) {
    if (proto === null) {
      return false;
    } else if (proto === prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
};


vscode快捷键 ES6 code snippets

clg
console.log(object)
cti
console time(object)
cte
console timeEnd(object)

nfn
const name = (arg) => {

}


anfn
(arg) => {

}

imp
improt fs from 'fs'

rqr
require('fs')

req
const fs = require('fs')

mde
module.default = {

}


fre
array.forEach(currentItem=>{

})


fof 
for(const item of object) {

}


fin
for(const item in object) {

}

dar
const [first, second] = [1,2]

dob
const {rename} = fs

sti
setInterval(() => {

});


sto
setTimeout(() => {

});


prom
return new Promise((resolve, reject) => {

});


thenc
.then((res) => {}).catch((err) => {

});