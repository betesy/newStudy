/**
 * 1. 把src里的文件内容，写入到target文件里
 * 2. 写入时要先清空再写入
 */

var fs = require('fs');

function copy(src,target){
    fs.readFile(src,'utf-8',function(err,data){
        console.log(data);
        fs.writeFile(target,data,'utf-8',function(err){
            if(err){
                console.log(err);
            }else{
                console.log('OK');
            }
        });
    });
}

copy('./name.txt','./name.bak.txt');
