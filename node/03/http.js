//http模块
//作用，将电脑编程web服务器

//ip地址
/*
ip地址就是互联网上每台计算机的魏仪地址，因此ip地址具有唯一性。
ip地址的格式，通常用点分十进制表示成a。b。c。d的形式，
如192.168.1.1 每个数字都在0-255之间
*/

//域名和域名服务器
/*
ip地址：不容易记忆 39.156.66.18
域名：www.baidu.com

ip和域名是一一对应的关系，之分对应的关系存放在一个电脑中
（域名服务器）,用户出入域名，转换成ip地址，之后再访问

在开发测试期间，127.0.0.1对应的域名是localhost，
他们都代表我们自己的电脑

*/

//端口号
/*
计算机的端口号，就好像现实生活中的门牌号，起到
唯一标识的作用

例：在一台电脑中运行成百上千个web服务
每一个web服务都对应这一个唯一的端口号，客户端发送来的网络请求
通过端口号，可以被准确的交给

客户端发起请求 http://127.0.0.1 80,表示启用80服务
*/

//创建web 服务器的基本步骤
/*
1.导入http模块
2.创建web服务器实例
3.为服务器实例绑定request事件，监听客户端的请求
4.启动服务器
*/

//1.导入http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log("有人来访问服务器")
    //req是请求对象，它包含宇客户端相关的数据和属性，例如：
    //req.url 是客户端请求的url地址
    const url = req.url;
    //req.method是客户端请求的method类型
    const method = req.method;
    const str = "you request url is:" + url + "  and your request type is" + method
    //res 响应对象
    res.end(str);
})
//4.启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})
