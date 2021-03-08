```
//当前项目运行目录路径
const ROOT_PATH = process.cwd();
```
```
// buffer模块
```

- child_process是Node.js的一个十分重要的模块，通过它可以实现创建多进程，以利用单机的多核计算资源。
功能
```
自动化执行命令
var du = child.spawn('du', ['-sh', '/disk1']);
du.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
du.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
du.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
通过node运行的结果
~ node spawn.js
stdout: 582M    /disk1
child process exited with code 0
通过特定命令可达到系统监控的功能
exec函数是对spawn的一种友好封装，增加Shell命令解析，可以直接嵌入复杂的命令，比如，管道用法 cat spawn.js exec.js | wc。
execFile函数会直接执行特定的程序，参数作为数组传入，不会被bash解释，因此具有较高的安全性。execFile与spawn的参数相似，也需要分别指定执行的命令和参数，但可以接受一个回调函数，与exec的回调函数相同。

execSync(cmd)  该方法可执行命令行
```

```
多个子进程协同工作
fork函数，用于在子进程中运行的模块，如 fork(‘./son.js’) 相当于 spawn(‘node’, [‘./son.js’]) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。
新建主进程文件。
~ main.js
var childProcess = require('child_process');
var n = childProcess.fork('./son.js');
n.on('message', function(m) {
  console.log('Main Listen: ', m);
});
n.send({ hello: 'son' });
新建子进程文件
~ vi son.js
process.on('message', function(m) {
  console.log('Son Listen:', m);
});
process.send({ Hello: 'conan' });
运行程序：
~ node main.js
Main Listen:  { Hello: 'conan' }
Son Listen: { hello: 'son' }
```

cluster
多核处理模块，每个worker进程通过使用child_process.fork()函数，基于IPC（Inter-Process Communication，进程间通信），实现与master进程间通信。具体适用参考http://blog.fens.me/nodejs-core-cluster/