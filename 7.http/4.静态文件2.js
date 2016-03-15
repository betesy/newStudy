//导入核心模块http
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    var url = request.url;

    if(url == '/index.html'){//注意url路径，不是 ./ 而是 /
        response.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('./index.html','utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(url == '/style.css'){
        response.setHeader('Content-Type','text/css;charset=utf-8');
        fs.readFile('./style.css','utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(url == '/index.js'){
        response.setHeader('Content-Type','text/javascript;charset=utf-8');
        fs.readFile('./index.js','utf8',function(err,data){
            response.write(data);
            response.end();
        });
    }




});

server.listen(8080,'localhost');
