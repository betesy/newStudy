// File system
var fs = require('fs');
/**
 * 1. 每一个同步方法和异步方法都是成对出现的
 * 2. 同步方法会阻塞主线程的执行，在数据没有返回之前不能执行后续代码
 * 3. 它不需要传递回调函数，通过函数返回值接收结果
 * 4.
 */
var data = fs.readFileSync('./index.txt','utf8');
console.log(data);
console.log('b');
console.log('c');

//捕获异常
try{
    var data2 = fs.readFileSync('./index1.txt','utf8');
}catch(err){
    console.log(err);
}
console.log(data2);
console.log('bb');
console.log('cc');

//error
try{
    var data3 = fs.readFileSync('./index3.txt','utf8');
}catch(err){
    console.error(err);
}
console.log(data3);
console.log('bbb');
console.log('ccc');