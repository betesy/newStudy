//导入核心模块http
var http = require('http');
/**
 * 1. 能在特定的IP 特定的端口上监听 客户端的请求
 * 2. 当请求到来的时候能执行监听函数，并返回响应
 *
 * 创建一个服务器
 * 指定监听函数 每当有客户端请求到来的时候执行函数
 * request 代表客户端的请求，可以从中获取请求过来的信息
 * response 代表向客户端发的响应，可以通过它向客户端发响应
 */
    //write 后边的参数只有两种：字符串、Buffer
var server = http.createServer(function(request,response){
    //write 和end 的参数只能是Buffer或字符串，不能是其它类型
    response.write('hello');//可以向客户端发送响应 向客户端说话
    response.write(' world');
    response.write(new Buffer('HELLO'));
    response.end();//说完了，挂掉电话，end之后就不能再write了
    //response.write(' world');//会报错
});
//在8080端口上进行监听，主机名是localhost
//localhost  相当于域名或是IP地址,可以省略，省略了指的就是localhost
//端口号在 0 -- 65535 之间
// MAC 下执行 ps -ef | grep node  结束node进程
server.listen(8080,'localhost');
//sever.listen(8080,'127.0.0.1');
//127代表回环地址，代表本机
//80端口是默认端口，可以省略，访问的时候可以不加 :80

//localhost:8080浏览器访问
// curl -v http://localhost:8080  github访问