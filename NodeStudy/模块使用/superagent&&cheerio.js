let express = require('express');
let router = express.Router();
let request = require('superagent')
let cheerio = require('cheerio');
/* GET users listing. */
router.get('/', function(req, res, next) {
  request
    .get('https://www.buxiuse.com/?page=0')
    .then(res1 => {
      // console.log(res.text);
      let $ = cheerio.load(res1.text);
      // console.log($.html())
      let imgArr = $('.height_min');
      // console.log(imgArr.length)
      var imgUrl = [];
      // console.log(imgArr[0].attribs.src);
      
      for (var i = 0; i < imgArr.length; i++){
        imgUrl.push(imgArr[i].attribs.src)
      }
      // console.log(imgUrl);
      res.send({
        imgUrl
      }
        )
      // $ = cheerio.load('<h2 class="title">Hello world</h2>');

      // $('h2.title').text('Hello there!');
      // $('h2').addClass('welcome');
      
      // console.log($.html());
    }).catch(e=>{
      console.log(e)
    });
  // res.send('respond with a superagent');
});


router.get('/superagent', function(req, res, next) {
  request
    .get('https://mock.cangdu.org/mock/5e8dd8cdc52eaf59b709f85b/example/getname')
    // .set('Content-Type', 'application/json') //设置头部
    // .query({
    //   query: 'Manny',
    //   range: '1..5',
    //   order: 'desc'
    // }) //查询字符串
    // .send('{"name":"tj","pet":"tobi"}') //post发送的数据
    // .auth('tobi', 'learnboost') //认证
  //   .field('user[name]', 'Tobi')  //type为multipart/form-data请求时，不能用send
  //  .field('user[email]', 'tobi@learnboost.com') //type为multipart/form-data请求时，不能用send
  //  .field('friends[]', ['loki', 'jane']) //type为multipart/form-data请求时，不能用send
  //  .attach('image', 'path/to/tobi.png') //type为multipart/form-data请求时，不能用send
  // attach(name, file, options)  name为文件名， file为文件路径字符串或blob、buffer对象，options为（可选的）自定义文件名或字符串，
  // .withCredentials() //跨域资源共享
    // .retry(2, ()=>{
    //   console.log('222')
    // }) //失败重连次数和回调函数
    // .timeout({
    //   response: 5000,  // 5s后没有响应就断开连接
    //   deadline: 60000, // 第一次接收数据到最终接收数据的时间，一般用于获取大尺寸二进制图片
    // })
    .then(res => {

//       text：未解析前的响应内容，字符串类型。一般只在mime类型能够匹配"text/"，"json"，"x-www-form-urlencoding"的情况下，这个属性才会有效，默认为nodejs客户端提供；

// body：响应数据解析后的对象，对象类型。

// header：解析之后的响应头数据，数组类型。

// type：响应报文的Content-Type值，字符串类型。

// charset：响应的字符集，字符串类型。

// status：响应状态标识。

// statusCode：响应的状态码，数整数类型。如：200、302、404、500等。
      console.log(res.body)
       // res.body, res.headers, res.status
    },err => {
      console(err)
       // err.message, err.response
    });
  res.send('respond with a superagent');
});


module.exports = router;
