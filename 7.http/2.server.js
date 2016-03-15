//创建一个http服务器并返回当前时间
var http = require('http');

var server = http.createServer(function(request,response){
    var now = new Date();
    //设置内容类型的响应头
    response.setHeader('Content-Type','text/html;charset=utf-8');//key,value
    response.write(now.toString());//不加内容类型响应头会出现乱码
    response.write(new Buffer(' HELLO '));
    response.write(now.toLocaleString());
    response.end();
});

server.listen(8080,'localhost');
