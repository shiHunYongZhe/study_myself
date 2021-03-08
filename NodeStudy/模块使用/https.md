在应用根目录下执行

0. openssl version -a
查看是否已有openssl命令，没有的话自行安装

1. 生成私钥key文件：
openssl genrsa -out privatekey.pem 1024
2. openssl生成证书文件
openssl genrsa -out privatekey.pem 1024
3. 通过私钥生成CSR证书签名
openssl req -new -key privatekey.pem -out certrequest.csr

```
此时根目录下有新生成了3个文件：
privatekey.pem: 私钥
certrequest.csr: CSR证书签名
certificate.pem: 证书文件
```

修改启动文件(以vue的bin/www)为例

~ vi ./bin/www

//最下面
var https = require('https')
    ,fs = require("fs");

var options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

https.createServer(options, app).listen(3011, function () {
    console.log('Https server listening on port ' + 3011);
});


然后找一个浏览器打开https://localhost:3011即可，Chrome浏览器可能会屏蔽不安全的自签名网址，多试试其他浏览器比如firefox，信任证书即可访问