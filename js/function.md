防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
## 常用函数
## 封装ajax
```
function json2url(json) {
  var arr = [];
  for (var name in json) {
    arr.push(name + '=' + json[name]);
  }
  return arr.join('&');
}

function ajax(json) {
  json = json || {};
  if (!json.url) {
    return;
  }
  json.data = json.data || {};
  json.type = json.type || {};

  var timer = null;

  if (window.XMLHttpRequest) {
    var oAjax = new XMLHttpRequest();
  } else {
    var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }

  switch (json.type) {
    case 'get':
      oAjax.open('GET', json.url + '?' + json2url(json.data), true);
      oAjax.send();
      break;
    case 'post':
      oAjax.open('POST', json.url, true);
      oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      oAjax.send(json2url(json.data));
      break;
  }

  oAjax.onreadystatechange = function () {
    if (oAjax.readyState == 4) {
      clearTimeout(timer);
      if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304) {
        json.success && json.success(oAjax.responseText);
      } else {
        json.error && json.error(oAjax.status);
      }
    }
  }
}

window.onload = function () {
  var oTxtUser = document.getElementById('user');
  var oTxtPass = document.getElementById('pass');
  var oBtnReg = document.getElementById('reg_btn');
  var oBtnLogin = document.getElementById('login_btn');

  oBtnLogin.onclick = function () {
    ajax({
      url: '/user',
      data: {
        act: 'login',
        user: oTxtUser.value,
        pass: oTxtPass.value
      },
      type: 'get',
      success: function (str) {
        var json = eval('(' + str + ')');

        if (json.ok) {
          alert('登录成功');
        } else {
          alert('登录失败：' + json.msg);
        }
      },
      error: function () {
        alert('通信错误');
      }
    });
  };

  oBtnReg.onclick = function () {
    ajax({
      url: '/user',
      data: {
        act: 'reg',
        user: oTxtUser.value,
        pass: oTxtPass.value
      },
      type: 'get',
      success: function (str) {
        var json = eval('(' + str + ')');

        if (json.ok) {
          alert('注册成功');
        } else {
          alert('注册失败：' + json.msg);
        }
      },
      error: function () {
        alert('通信错误');
      }
    });
  };
};
```
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
## 测试时间
```
const timeTaken = callback => {
	console.time('timeTaken');
	const r = callback();
	console.timeEnd('timeTaken');
	return r;
}
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

## 获取URL的字符串  
```
var backurl = unescape(geturlparameter("backurl"));
  function geturlparameter(paramname) {
      var returnval = "";
      var paramurl = window.location.search;
      //处理长度
      if (paramurl.length > 0) {
          paramurl = paramurl.substring(1, paramurl.length);
          var paramurlarray = paramurl.split("&");
          for (var i = 0; i < paramurlarray.length; i++) {
              var temp = paramurlarray[i].split("=");
              if (temp[0] == paramname) {
                  returnval = temp[1];
                  break;
              }
          }
      }
      return decodeURI(returnval);
  }
  ```
