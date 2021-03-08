// 怎么去实时地知道服务器的状态呢？以前方法有两个：
// （1）**轮询**：客户端每隔很短的时间，都会对服务器发出请求，查看是否有新的消息，只要轮询速度足够快，例如1秒，就能给人造成交互是实时进行的印象。这种做法是无奈之举，实际上对服务器、客户端双方都造成了大量的性能浪费。


// （2）**长连接**：客户端只请求一次，但是服务器会将连接保持，不会返回结果。当服务器有了新数据时，实时地发给客户端，而一直保持挂起状态。这种做法的也造成了大量的性能浪费。

// 现在基本采用WebSocket
//  原理非常简单：利用HTTP请求产生握手，HTTP头部含有 WebSocket 协议的请求，**握手之后，二者转用TCP协议进行交流*（QQ的协议）。
// WebSocket客户端监听时间过长可能会导致监听失败，一般都加一个心跳包，定时向服务器发送一些无用数据维持连接

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8000 });//服务端口8181
wss.on('connection', function (ws) {
    console.log('服务端：客户端已连接');
    ws.on('message', function (message) {
        //打印客户端监听的消息
        console.log(JSON.stringify(message));
        ws.send(JSON.stringify(message))
    });

    ws.on('close', function (params) {
      console.log('close');
    })
});
