//引入核心模块
var http = require('http');
//引用URL解析URL参数
var url = require('url');
//读写文件
var fs = require('fs');
var querystring = require('querystring');
//只有当提交form表单，并且是GET请求的时候，浏览器才会把表单进行序列化（生成查询字符串）拼到URL后面
//创建http服务器
http.createServer(function(req,res){
    //parse，一定会返回一个对象
    //true的话urlObj的query也会是一个对象，否则就是一个字符串
    //query原本格式：username=zfpx&password=123(字符串)
    //为true变成对象： {username:'zfpx',password:'123'}
    var urlObj = url.parse(req.url,true);
    // 取出路径名
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        fs.readFile('./index3.html','utf8',function(err,data){
            res.end(data);
        });
    }else if(pathname == '/reg'){
        var result='';
        //当读到客户端提交过来的数据时会触发data事件，然后调用回调函数
        req.on('data',function(data){
            result += data;
        });
        req.on('end',function(data){
            //取出请求体的内容类型
            var contentType = req.headers['content-type'];
            //如果请求体发过来的是序列化表单
            if(contentType == 'application/x-www-form-urlencoded'){
                //把查询字符串转成对象
                var obj = querystring.parse(result);
                console.log(obj);
            }else if(contentType == 'application/json'){
                var obj = JSON.parse(result);
                console.log(obj);
            }

            //发送响应
            res.end('ok');
        });
    }
}).listen(8080);