//导入核心模块http
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){

    response.setHeader('Content-Type','text/html;charset=utf-8');//utf8 告诉浏览器我的响应类型（这两个没关系）
    //指定文件路径 设置编码 得到的data就是字符串类型的 他会将我们得到的Buffer去toString()
    fs.readFile('./index.html','utf8',function(err,data){// utf8 读取文件时指定编码的（给node看的）
        response.write(data);
        response.end();
    });//没有做判断，不管访问什么，返回的都是index.html


});

server.listen(8080,'localhost');
