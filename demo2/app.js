const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    // http://127.0.0.1:8000?name=zhangsan&age=20   想要获取传过来的name  和  age  以及端口号

    console.log(req.url) // 获取url
    // 设置响应头
    // 状态码是200，文件类型是html，字符集是 utf-8
    res.writeHead(200, {"Content-type": "text/html;charset='utf-8'"}); // 解决乱码

    res.write("<head><meta charset='UTF-8'></head>");  // 解决乱码

    console.log(req.url);

    if(req.url !== '/favicon.ico') {
        const userinfo = url.parse(req.url, true).query;

        console.log(userinfo);
        console.log('url', `姓名：${userinfo.name}, 年龄：${userinfo.age}`);
    }

    res.write('你好世界');

    res.write('<p>我是神你知道吗?</p>')
    
    res.end('你好nodeJS'); // 结束响应
}).listen(3000);