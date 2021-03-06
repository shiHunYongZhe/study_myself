## 常用函数
## 缓存记忆
```
var fibonacci = (function(){
	var cache = [0,1];
	var fib = funciton(n){
		var resilt = cache[n];
		if(typeof result !== 'number'){
			result = fib(n-1)+fib(n-2);
			cache[n] = result;
		}
		return result;
	}
	return fib
})
const yesNo = (val, def = false)=>/^(y|yes)$/i.test(val) ? true:/^(no|n)$/i.test(val) ? false:def;
const validateNumber = n=>!isNaN(parseFloat(n))&&isFinite(n)&&Number(n) ==n;
const toDecimalMark = num =>num.toLocaleString('en-US');
```
## 随机颜色
```
const RGBToHEX = (r,g,b) =>((r<<16)+(g<<8)+b).toString(16).padStart(6,'0');
const randomHexColorCode = ()=>{
	let n = ((Math.random()*0xfffff|0).toString(16);
	return = '#'+(n.length !==6?((Math.random()*0xf)|0).toString(16)+n:n)
}
```  

## 函数柯里化
```
function currying(fn) {
	var args = [].slice.call(arguments, 1); 
	return function () {
	var new_args = [].slice.call(arguments); 
	args = args.concat(new_args);
	return fn.apply(null, args);
	}
}
var cost = (function () {
	var money = 0;
	return function () {
	for (var i = 0, l = arguments.length; i < l; i++) {
		money += arguments[i];
	}
	return money;
	}
})();
var cost = currying(cost);
cost(100);
cost(200);
cost(300);
alert(cost());
  
``` 
  
## 异步加载JS
```
function requireJs(url, onload, onerror) {
	if (url) {
		var hm = document.createElement("script");
		hm.src = url;
		hm.onload = function () {
			onload && onload();
		}
		hm.onerror = function () {
			onerror && onerror();
		}
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	}
}
``` 
