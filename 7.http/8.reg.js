var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var url = require('url');
var users = [];
var server = http.createServer(function(request,response){
    var urlObj = url.parse(request.url,true);

    if(urlObj.pathname == '/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./8.reg.html',function(err,data){
            response.end(data);
        })
    }else if(urlObj.pathname == '/reg'){
        //请求提的接收
        //每当服务器收到客户端发过来的一段数据的时候就会出触发data事件
        //类似btn.on('click',function(){});
        //function中的data，这次接收到的数据，data可能触发很多次
        //接到的data是buffer，toString
        var str = '';
        request.on('data',function(data){
            str+=data.toString();
        });
        //当所有的数据全部接收完毕的时候会触发end事件，这时请求体的数据就接收完整了
        request.on('end',function(){
            console.log(str);
            //字符串转成对象，追加到用户列表里
            users.push(JSON.parse(str));
            //最后返回用户列表
            //response.end(JSON.stringify(users));//json字符串
            response.end(str);
        });
    }
});
server.listen(8080,'localhost');