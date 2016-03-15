//导入mime模块
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var server = http.createServer(function(request,response){
    var url = request.url;

    //如果访问收藏图标的话，直接返回404记得加return
    if(url == '/favicon.ico'){
        return response.end('404');
    }
    // 如果访问/,重定向到index.html，也就是默认首页
    if(url == '/'){
        url = '/index.html';
    }

    console.log(url);

    response.setHeader('Content-Type',mime.lookup(request.url)+';charset=utf-8');

    //判断文件是否存在，如果存在则读取并返回给客户端
    //如果不存在，则报404 Not Found
    fs.exists('.'+url,function(exists){
        if(exists){
            fs.readFile('.'+url,function(err,data){
                console.error(url,err,data);
                //如果读取文件出错了，则也报404错误
                if(err){
                    response.statusCode = 404;
                    response.end();
                }else{
                    response.statusCode = 200;
                    response.write(data);
                    response.end();
                }
            });
        }else{
            response.statusCode = 404;
            response.end();
        }
    });

});

server.listen(8080,'localhost');
