//
/*
1.获取请求的url
2.设置默认的响应内容为 404 not found
3.判断用户请求的是否为/ 或 /index.html 首页
4.判断用户请求的是否为/about.html 关于页面
5.设置Content-Type 响应头，防止中文乱码
*/
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url;
    let content = '<h1>404 not found';
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页<h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面<h1>'
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content);
})
server.listen('80', () => {

})