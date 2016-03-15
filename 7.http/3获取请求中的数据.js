//导入核心模块http
var http = require('http');

var server = http.createServer(function(request,response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求的URL
    console.log(request.headers);//请求的头

    //Can't set headers after they are sent.at ServerResponse.
    //在响应头发出以后不能再发送响应头
    //响应头应该在响应头之上
    response.statusCode = 404;//调响应码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应头
    //在读到第一个write的时候发出响应头，响应头和第一个响应体一起发出
    response.write('hello');//写的响应体,在调用第一次write的时候，会发送响应头和第一个write的内容
    setTimeout(function(){
        response.write(' world ');
        response.end('over');
    },2000);


    //response.end('over');
});

server.listen(8080,'localhost');
