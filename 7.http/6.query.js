var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node亲生的模块，帮助我们解析请求中的URL的
var url = require('url');
var server = http.createServer(function(request,response){
    //把url转成url对象
    var urlObj = url.parse(request.url,true);

    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //console.log('url:'+url);
    //console.log('urlObj:'+urlObj);
    //console.log('urlObj.pathname:'+urlObj.pathname);
    //pathname 指的是路径名 问号和端口号中间的那一部分
    if(urlObj.pathname == '/apple'){
        // query 查询字符串，true，则转成对象
        response.end(urlObj.query.num+"袋苹果");
    }
});
server.listen(8080,'localhost');

//访问  http://localhost:8080/apple?num=2