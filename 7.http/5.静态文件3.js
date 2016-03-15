//导入mime模块
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var server = http.createServer(function(request,response){
    var url = request.url;

    console.log(url);
    console.log(path.extname(url));
    response.setHeader('Content-Type',mime.lookup(request.url)+';charset=utf-8');
    fs.readFile('.'+url,'utf8',function(err,data){
        response.write(data);
        response.end();
    });
});

server.listen(8080,'localhost');
