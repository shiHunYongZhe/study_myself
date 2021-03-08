const { time } = require("node:console")

var obj = {
  name: 'hjz'
}
var name = 'hjb'
function getname() {
  console.log(this.name)
}

Function.prototype.mycall = function (context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  context.fn = this;
  let result = context.fn(...args)
  delete context.fn
  return result
}
getname.mycall(obj)


Function.prototype.myapply = function (context = window, args) {
  if(typeof this !== 'function'){
    throw new TypeError('not function')
  }
  context.fn = this;
  let result = context.fn(args)
  delete context.fn
  return result  
}
getname.myapply(obj)


Function.prototype.mybind = function (context, ...args) {
  if(typeof this !== 'function'){
    throw new TypeError('not function')
  }
  let _this = this;
  return function F() {
    if(this instanceof F){
      return new _this(...args,...arguments)
    }else{
      return _this.apply(context, args.concat(...arguments))
    }
  }
}
getname.mybind(obj)()


function myinstanceof(left,right) {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;
  while(true){
    if(leftValue === null){
      return false;
    }
    if(leftValue === rightValue){
      return true;
    }
    leftValue = leftValue.__proto__
  }
}
function parent1(name) {
  this.name = name
}
var child1 = new parent1()
myinstanceof(child1, parent1)

function curry(fn, ...rest) {
  const length = fn.length;
  return function () {
    const args = [...rest, ...arguments]
    if (args.length < length) {
      return curry.call(this, fn, ...args)
    } else {
      return fn.apply(this, args)
    }
  }
}
function add(m,n) {
  return m + n 
}
const add5 = curry(add, 5)
console.log(add5(4))


function mycreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F()
}


function myNew(fun) {
  return function () {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
      __proto__: fun.prototype
    }
    // 执行构造函数
    fun.call(obj, ...arguments)
    return obj
  }
}
let child2 = myNew(parent1)('hjz')

//此功能不完善
class myPromise {
  constructor (fn) {
    this.status = 'pending'
    this.value = null
    this.resolve = this._resolve.bind(this)
    this.reject = this._reject.bind(this)
    this.resolveFns = []
    this.rejectedFns = []
    try {
      fn(this.resolve, this.reject)
    } catch (e) {
      this.catch(e)
    }
  }
  _resolve(res){
    setTimeout(()=>{
      this.status = 'rejected'
      this.value = res
      this.resolveFns.forEach(fn => {
        fn(res)
      })
    })
  }
  _reject(res) {
    setTimeout(() => {
      this.status = 'rejected'
      this.value = res
      this.rejectedFns.forEach(fn => {
        fn(res)
      })
    })
  }
  then(resolveFns, rejectedFns) {
    return new myPromise(function (resolve, reject) {
      this.resolveFns.push(function(value) {
        try {
          const res = resolveFns(value)
          if (res instanceof myPromise) {
            res.then(resolve, reject)
          } else {
            resolve(res)
          }
        } catch (err) {
          reject(err)
        }
      })
      this.rejectedFns.push(function(value) {
        try {
          const res = rejectedFns(value)
          if (res instanceof myPromise) {
            res.then(resolve, reject)
          } else {
            reject(res)
          }
        } catch (err) {
          reject(err)
        }
      })
    })
  }
  catch(rejectedFn) {
    return this.then(null, rejectedFn)
  }
}

// 观察者模式
class Subject {
  constructor() {
    this.observers = []
  }
  add(observer) {
    this.observers.push(observer)
    this.observers = [...new Set(this.observers)]
  }
  notify(...args) {
    this.observers.forEach(observer => observer.update(...args))
  }
  remove(observer) {
    let observers = this.observers
    for (let i = 0, len = observers.length; i < len; i++) {
      if (observers[i] === observer) observers.splice(i, 1)
    }
  }
}
class Observer {
  constructor(name){
    this.name = name
  }
  update(...args) {
    console.log(this.name)
    console.log(...args)
  }
}

let observer_1 = new Observer('observer_1 name') // 创建观察者1
let observer_2 = new Observer('observer_2 name')
let sub = new Subject() // 创建主体
sub.add(observer_1) // 添加观察者1
sub.add(observer_2)
sub.notify('I changed !')

// 只支持object、array、string、number、true、false、null这几种数据或者值，其他的比如函数、undefined、Date、RegExp等数据类型都不支持
// 1、字面量拷贝，最简单的深拷贝方式
JSON.parse(JSON.stringify(obj)) 
// 2. 简单递归拷贝
function deepCloneSimple(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
let obj1 = {x: 1, b: {a:4}, date: new Date(), d: null}
let obj2 = deepClone(obj1)


// 支持复杂子项的深拷贝
function deepClone(source, cache = new Map()) {
  if (cache.has(source)) {
    return cache.get(source)
  }

  if(source instanceof Object){
    let target
    if (source instanceof Array) {
      target = []
    } else if (source instanceof Function) {
      target = function () {
        return source.apply(this, arguments)
      }
    } else if (source instanceof RegExp) {
      target = source
    } else if (source instanceof Date) {
      target = new Date(source)
    } else {
      target = {}
    }
    cache.set(source, target)
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = deepClone(source[key], cache)
      }
    }
    return target
  } else {
    return source
  }
}
let obj = {
  a: 1,
  b: undefined,
  c: null,
  e: new Date(),
  g: function () {
    console.log("我叫王大锤")
  }
}
let obj2 = deepCopy(obj)
obj2.g = function () {
  console.log("我不叫王大锤")
}


class myEventEmitter {
  // 存储事件
  constructor() {
    this.events = this.events || new Map()
  }
  // 监听事件
  addListener (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  // 触发事件
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}
let emitter = new myEventEmitter()
emitter.addListener('ages', age => {
  console.log(age)
})
emitter.emit('ages', 18)


class Route {
  constructor() {
    this.routes = {}
    this.currentHash = ''
    this.freshRoute = this.freshRoute.bind(this)
    window.addEventListener('load', this.freshRoute, false)
    window.addEventListener('hashchange', this.freshRoute, false)
  }
  storage(path, cb){
    this.routes[path] = cb || function () {}
  }
  freshRoute(){
    this.currentHash = location.hash.slice(1) || '/'
    this.routes[this.currentHash]()
  }
}

function setRem() {
  let doc = document.documentElement
  let width = doc.getBoundingClientRect().width()
  let rem = width / 75
  doc.style.fontSize = rem + 'px'
}
window.addEventListener('resize', setRem, false)


function ajax() {
  let xhr = new XMLHttpRequest()
  xhr.open(method,url,async)
  xhr.send(data)
  xhr.onreadystatechange =  ()=> {
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText)
    }
  }
}

function ajax2(options) {
  let {url, method, async, data, timeout} = options
  method = method.toLocaleLowerCase() || 'get'
  let xhr = new XMLHttpRequest()
  if (timeout && timeout > 0) {
    xhr.timeout = timeout
  }
  return new Promise((resolve,reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
          resolve && resolve(xhr.responseText)
        }else{
          reject && reject()
        }
      }
    }
    xhr.onerror = err => reject && reject(err)
    let paramArr = []
    let encodeData;
    if (data instanceof Object) {
      for(let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }
    if(method === 'get'){
      const index = url.indexOf('?')
      if (index === -1) {
        url += '?'
      } else if (index !== url.length - 1) {
        url += '&'
      }
      url += encodeData
    }
    xhr.open(method, url, async)
    if(method === 'get'){
      xhr.send(null)
    }else{
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
    }
  })
}


// 传入一个方法，然后每隔一段时间执行一次，执行n次
function repeat(fn, n, interval) {
  return (...args) => {
    let timer;
    let counter = 0;
    timer = setInterval(()=>{
      counter++
      fn.apply(this, args)
      if (counter === n){
        clearInterval(timer)
      }
    }, interval)
  }
}
const repeatFn = repeat(console.log, 4, 2000)
repeatFn('helloworld')


// 实现一个带并发限制的异步调度器Scheduler，最多同时运行两个任务
class Scheduler{
  constructor(maxNum){
    //等待执行的任务队列
    this.taskList = []
     //当前任务数
    this.count = 0
    //最大任务数
    this.maxNum = maxNum
  }

  async add(promiseCreator){
    if (this.count >= this.maxNum) {
      await new Promise(resolve => {
        this.taskList.push(resolve)
      })
    }
    this.count++
    const result = await promiseCreator()
    this.count--
    //当其它任务执行完任务队列中还有任务没执行就将其出队并执行
    if (this.taskList.length > 0){
      this.taskList.shift()()
    }
    return result
  }
}
const timeout = time => {
  return new Promise(resolve => setTimeout(resolve, time))
}
const scheduler = new Scheduler(2)
const addTask = (time, value) => {
  scheduler.add(()=>{
    return timeout(time).then(()=> {
      console.log(value)
    })
  })
}
//此处输出2 -> 3 ->1 -> 4
//一开始1、2两个任务进入队列
addTask(1000, '1') //1000ms时，1完成，输出1
addTask(500, '2') //500ms时，2完成，输出2，任务3进入队列
addTask(300, '3') //800ms时，3完成，输出3，任务4进入队列
addTask(400, '4') //1200ms时，4完成，输出4