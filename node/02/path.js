//path 路径模块
const path = require('path');
//路径拼接
//path.join([......,......,...])
const pathStr = path.join('/a', '/b/c/d', '../', '/e')
console.log(pathStr)
//获取路径名
//path.basename()
const pathStr2 = '/a/b/c/d/index.html';
const name = path.basename(pathStr2);
console.log(name) //输出index.html
//获取文件拓展名
console.log(path.extname(pathStr2)) //输出.html
