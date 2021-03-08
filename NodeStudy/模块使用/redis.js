var Redis = require('ioredis');
var redis = new Redis({
    port: 6379,                  // Redis port
    host: '127.0.0.1',           // Redis host
    family: 4,                   // 4 (IPv4) or 6 (IPv6)
    password: 'UclBrt1qaz!QAZ',
    db: 0,                       // 数据库号
});
// redis.set('foo', 'bar');
// redis.set('key', 100, 'EX', 10);
// redis.sadd('set', 1, 3, 5, 7);
redis.get('name', function (err, result) {
  console.log(result);
});