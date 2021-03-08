var Encrypt = require('./crypto.js.js');
var express = require('express');
var http = require('http');
var crypto = require('crypto');
var reqhttp = require("request");
var app = express();
var dir = "/v1";
var cookie = null;
var user = {};

// 纯函数
const str2Arr = str => str.split('').reduce((pre,cur)=>(pre.push(cur.charCodeAt(0)),pre),[])
const arr2Str = arr => arr.reduce((pre,cur)=>(pre+=String.fromCharCode(cur),pre),'')
const randomString = (pattern, length) => Array.from({length},()=>pattern[Math.floor(Math.random() * pattern.length)]).join('')

const id2Url = (pic_str) => {
	var magic = str2Arr('3go8&$8*3*3h0k(2)2')
	var songId = str2Arr(pic_str)
	for(var i = 0; i < songId.length; i++) {
		songId[i] = songId[i] ^ magic[i % magic.length]
	}
	var md5 = crypto.createHash('md5');
	md5 = md5.update(arr2Str(songId))
	var res = md5.digest('base64')
	res = res.replace(/\//g, '_').replace(/\+/, '-')
	return res
}

var jsessionid = randomString('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ\\/+',176) + ':' + (new Date).getTime(); 
var nuid = randomString('0123456789abcdefghijklmnopqrstuvwxyz',32);
var baseCookie=`JSESSIONID-WYYY=${jsessionid}; _iuqxldmzr_=32; _ntes_nnid=${nuid},${(new Date).getTime()}; _ntes_nuid=${nuid}`;


function createWebAPIRequest(path, data, c, response, method) {
	method = method ? method : "POST"
	var music_req = '';
	var cryptoreq = Encrypt(data);
	var http_client = http.request({
		hostname: 'music.163.com',
		method: method,
		path: path,
		headers: {
			'Accept': '*/*',
			'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
			'Connection': 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Referer': 'http://music.163.com',
			'Host': 'music.163.com',
			'Cookie': cookie,
			'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/602.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/602.1'
		}
	}, function(res) {
		res.on('error', function(err) {
			response.status(502).send('fetch error');
		});
		res.setEncoding('utf8');
		if(res.statusCode != 200) {
			createWebAPIRequest(path, data, c, response, method);
			return;
		} else {
			res.on('data', function(chunk) {
				music_req += chunk;
			});
			res.on('end', function() {
				if(music_req == '') {
					createWebAPIRequest(path, data, c, response, method);
					return;
				}
				if(res.headers['set-cookie']) {
					cookie =baseCookie +';'+ res.headers['set-cookie'];
					response.send({
						code: 200,
						i: JSON.parse(music_req)
					});
					user = JSON.parse(music_req)
					return;
				}
				response.send(music_req);
			})
		}
	});
	http_client.write('params=' + cryptoreq.params + '&encSecKey=' + cryptoreq.encSecKey);
	http_client.end();
}

function createRequest(path, method, data, callback) {
	var ne_req = '';
	var http_client = http.request({
		hostname: 'music.163.com',
		method: method,
		path: path,
		headers: {
			'Referer': 'http://music.163.com',
			'Cookie': 'appver=1.5.6',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	}, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			ne_req += chunk;
		});
		res.on('end', function() {
			callback(ne_req);
		})
	});
	if(method == 'POST') {
		http_client.write(data);
	}
	http_client.end();
}
app.get(dir + '/mine', function(request, response) {
	response.send(user);
});
//手机登录
app.get(dir + '/login/cellphone', function(request, response) {
	var phone = request.query.phone;
	var md5sum = crypto.createHash('md5');
	md5sum.update(request.query.password);
	var data = {
		'phone': phone,
		'password': md5sum.digest('hex'),
		'rememberLogin': 'true'
	};
	createWebAPIRequest('/weapi/login/cellphone', data, null, response)
});

//登录信息刷新
app.get(dir + '/login/refresh', function(request, response) {
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var csrf = ""
	for(i in cookie) {
		if(cookie[i].name == '__csrf') {
			csrf = cookie.value
		}
	}
	csrf = request.query.t
	var data = {
		"csrf_token": csrf
	};
	createWebAPIRequest('/weapi/login/token/refresh?csrf_token=' + csrf, data, cookie, response)
});

//搜索
app.get(dir + '/search', function(request, response) {
	var keywords = request.query.keywords || '';
	var type = request.query.type || 1;
	var offset = request.query.offset || '0';
	var limit = request.query.limit || 20;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var data = {
		"s": keywords,
		"offset": offset,
		"limit": limit,
		"type": type
	};
	createWebAPIRequest('/weapi/cloudsearch/get/web', data, cookie, response)
});


//歌词
app.get(dir + '/lyric', function(request, response) {
	var id = request.query.id;
	createRequest('/api/song/lyric?os=osx&id=' + id + '&lv=-1&kv=-1&tv=-1', 'GET', null, function(res) {
		response.setHeader("Content-Type", "application/json");
		response.send(res);
	});
});

//关注歌手
app.get(dir + '/artist/sub', function(req, response) {
	var cookie = req.get('Cookie') ? req.get('Cookie') : (req.query.cookie ? req.query.cookie : '');
	var type = req.query.type;
	var url = '/weapi/artist/';
	var data;
	if(type == 1) {
		url += "sub";
		data = {
			artistId: req.query.id
		}
	} else {
		url += "unsub";
		data = {
			artistIds: [req.query.id],
		}
	}
	createWebAPIRequest(url, data, cookie, response)

})
//mv播放地址
app.get(dir + '/mv/url', function(request, response) {
	var url = request.query.url
	var headers = {
		"Referer": "http://music.163.com/",
		"Cookie": "appver=1.5.0.75771;",
		'Content-Type': 'video/mp4',
		'Location': url
	}
	var options = {
		header: headers,
		url: url
	}
	reqhttp(options).pipe(response)
});
//单曲详情
app.get(dir + '/music/detail', function(request, response) {
	var id = parseInt(request.query.id);
	var data = {
		"id": id,
		'c': JSON.stringify([{
			id: id
		}]),
		"ids": '[' + id + ']',
		"csrf_token": ""
	};
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	createWebAPIRequest('/weapi/v3/song/detail', data, cookie, response)
});
//单曲播放地址
app.get(dir + '/music/url', function(request, response) {
	var id = parseInt(request.query.id);
	var br = parseInt(request.query.br);
	var data = {
		"ids": [id],
		"br": br,
		"csrf_token": ""
	};
	createWebAPIRequest('/weapi/song/enhance/player/url', data, null, response)
});
//歌曲喜欢和删除 op=like or trash,songid,
app.get(dir + '/song/tracks', function(request, response) {
	var op = request.query.op
	var pid = request.query.id;
	var cookie = request.get('Cookie') ? request.get('Cookie') : (request.query.cookie ? request.query.cookie : '');
	var url = op == 'like' ? '/weapi/radio/like' : '/weapi/radio/trash/add'
	var data = op == 'like' ? {
		"alg": request.query.r != 'del' ? 'itembased' : 'RT',
		"trackId": pid,
		"like": request.query.r != 'del' ? 'true' : 'false',
		"time": 2,
		"csrf_token": ""
	} : {
		"alg": 'RT',
		"songId": pid,
		"time": 2,
		"csrf_token": ""
	};
	createWebAPIRequest(url, data, cookie, response)
});

app.get(dir + '/id2url', function(req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(id2Url(req.query.id));
})
//短视频-播放地址
app.get(dir + '/video/playurl', function(request, response) {
	var data = {
		ids: JSON.stringify([request.query.id]),
		resolution: request.query.br,
		csrf_token: ''
	}
	createWebAPIRequest('/weapi/cloudvideo/playurl', data, null, response)
})
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.listen(3000, function() {
	console.log("启动App，端口3000");
});

