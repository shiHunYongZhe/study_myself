
sql封装
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'aolai'
});
module.exports = connection;



使用
const jwt = require('jsonwebtoken');
		let payload = {name:userName}; //用户名
		let secret = 'xiaoluxian';//口令
		let token = jwt.sign(payload,secret);

解码
let token = req.headers.token;
var jwt_decode = require('jwt-decode');
	let phone = jwt_decode(token);

cors
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


//发送验证码
router.post('/api/code', function(req, res, next) {
	//前端给后端的数据
	let params = {
		userName : req.body.userName
	};
	// 短信应用 SDK AppID
	var appid = 1400187558;  // SDK AppID 以1400开头
	// 短信应用 SDK AppKey
	var appkey = "dc9dc3391896235ddc2325685047edc7";
	// 需要发送短信的手机号码
	var phoneNumbers = [params.userName];
	// 短信模板 ID，需要在短信控制台中申请
	var templateId = 298000;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
	// 签名
	var smsSign = "三人行慕课";  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
	// 实例化 QcloudSms
	var qcloudsms = QcloudSms(appid, appkey);
	// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
	function callback(err, ress, resData) {
	  if (err) {
	      console.log("err: ", err);
	  } else {
		  code = ress.req.body.params[0];
	      res.send({
			  data:{
				  success:true,
				  code:code
			  }
		  })
	  }
	}
	var ssender = qcloudsms.SmsSingleSender();
	var paramss = [  Math.floor( Math.random()*(9999-1000))+1000 ];//发送的验证码
	ssender.sendWithParam("86", phoneNumbers[0], templateId,
	paramss, smsSign, "", "", callback); 
	
})