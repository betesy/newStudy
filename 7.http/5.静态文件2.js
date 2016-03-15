//导入核心模块http
var http = require('http');
var fs = require('fs');
var mime = {
    '.html':'text/html',
    '.js':'text/javascript',
    '.css':'text/css'
}
var path = require('path');
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(path.extname(url));
    response.setHeader('Content-Type',mime[path.extname(url)]+';charset=utf-8');//扩展名
    fs.readFile('.'+url,'utf8',function(err,data){
        response.write(data);
        response.end();
    });
});

server.listen(8080,'localhost');
