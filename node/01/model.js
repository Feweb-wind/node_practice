//模块
//引入读取文件模块
const fs = require('fs');
fs.readFile('./txt.txt', 'utf-8', function (err, string) {
    console.log(err);
    //console.log(string);
})
//处理文件路径问题
//解决：提供完整文件存放路径
// __dirname 表示当前文件所处的路径
console.log("当前的目录" + __dirname)
fs.readFile(__dirname + '/txt.txt', 'utf-8', function (err, string) {
    console.log(err);
    console.log(string);
})