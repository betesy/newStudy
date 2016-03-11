// File System

/**
 *  1. 异步方法需要把回调传入
 *  2. 回调函数会在同步方法执行完毕后才执行
 *  3. 异步方法不会阻塞主线程，不会影响后续代码的执行
 * @type {exports|module.exports}
 */

//异步不按顺序执行,啥时候文件读完了,啥时候执行回调函数

//1.toString()
var fs = require('fs');
function afterRead(err,data){
    console.log(data.toString());
}
fs.readFile('./index.txt',afterRead);
console.log('b');
console.log('c');

//2.utf8 在node中utf8和utf-8一样
function afterRead2(err,data){
    console.log(data);
    //var sum = 0;
    //for(var i=1;i<=1000000;i++){
    //    sum += i;
    //}
    //console.log(sum);//测试异步执行顺序
}
fs.readFile('./index2.txt','utf8',afterRead2);
console.log('bb');
console.log('cc');

//3.err
function afterRead3(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}
fs.readFile('./index3.txt','utf8',afterRead3);
console.log('bbb');
console.log('ccc');

//4.readFile

fs.readFile('./index.txt','utf8',function (err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('bbbb');
console.log('cccc');