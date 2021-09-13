const http = require('http');
const tools = require('./module/tools.js');
const request = require('./module/request.js');

console.log(tools, request);

// http://www.itying.com/api/plist

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/html;charset='utf-8'"});

    res.write("<head><meta charset='UTF-8' /></head>");
    
    res.write('你好 NodeJS<br />');

    const api = tools.formatApi('/api/fcous');

    res.write(api);

    res.end();
}).listen(3000);

request.get();

request.post();