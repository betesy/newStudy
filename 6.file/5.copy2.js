//图片是一个二进制数据，不能用utf-8，编码可以为binary
//如果不知道是什么编码，就不要写，则读出来是一个buffer，原生的二进制数据，和编码无关

fs = require('fs');
function copy2(src,target){
    fs.readFile(src,function(err,data){
        fs.writeFile(target,data,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('copy success from ' + src + ' to ' + target + '!');
            }
        });
    });
}

copy2('./1.png','./copy1.png');