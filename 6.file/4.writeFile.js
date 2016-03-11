var fs = require('fs');

/**
 *  1. 回调里面的 err data 是由fs.readFile决定的。
 */

//fs.writeFileSync(file, data[, options])

//以同步的方式向硬盘的文件里写数据
//fs.writeFileSync('./write.txt', '张晓张梦');

/**
 * 异步操作
 */
//fs.writeFile('./write.txt','node读写',function(){
//    console.log(arguments);  //{ '0': null } 函数只有一个参数，写入成功，err=0;
//})
fs.writeFile('./write.txt','刘刚刘宝宝','utf8', function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('It\'s saved!');
    }
});

/**
 * flag 是表示要对此文件做何种类型的操作 默认是w
 *   w 清空并写入
 *   a 在原有基础上追加
 */
fs.writeFile('./write.txt','刘宝宝呵呵哒',{flag:'a'}, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('It\'s saved!');
    }
});

fs.appendFile('./write.txt','node');  //追加