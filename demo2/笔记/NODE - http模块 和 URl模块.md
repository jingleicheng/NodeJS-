## NODE - http模块 和 URl模块

1、引入http模块

2、通过http.createServer创建一个Web服务

3、在上面的方法中创建一个func    其中有两个参数   

​		request   表示获取url传过来的信息

​		response 给浏览器响应信息



如果没有调用res.end()函数  则会陷入死循环，服务一直在加载





## NODE supervisor自启动工具的使用

1. 保存文件之后 会立即重启nodeJS

2. 避免重启nodeJS之后在启动NODEJS代码块，是的修改的代码立即生效

   - 首先安装 supervisor

     ```node
     npm install -g supervisor
     ```

   - 使用supervisor 代替 node 命令启动应用

     <img src='./image/1.png' />

   - 如果传统npm安装失败  可以用cnpm进行安装

