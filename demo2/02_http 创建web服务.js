// 手写第一个实例
const http = require('http');

http.createServer((req, res) => {
    console.log(req.url) // 获取url
    // 设置响应头
    // 状态码是200，文件类型是html，字符集是 utf-8
    res.writeHead(200, {"Content-type": "text/html;charset='utf-8'"}); // 解决乱码

    res.write("<head><meta charset='UTF-8'></head>");  // 解决乱码

    res.write('你好 nodeJS');

    res.write('<h2>你好 nodeJS</h2>');


    res.end(); // 结束响应
}).listen(3000);