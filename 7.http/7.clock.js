var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node亲生的模块，帮助我们解析请求中的URL的
var url = require('url');
var server = http.createServer(function(request,response){
    //把url转成url对象
    var urlObj = url.parse(request.url,true);

    //response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname == '/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./clock.html',function(err,data){
            response.end(data);
        })
    }else if(urlObj.pathname == '/clock'){
        //response.end(new Date().toLocaleString());
        response.statusCode = 404;
        response.end();
    }
});
server.listen(8080,'localhost');