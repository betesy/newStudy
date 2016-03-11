var buf1 = new Buffer('张');
var buf2 = new Buffer('梦');
var buf3 = new Buffer('张');
var buf4 = new Buffer('晓');

//console.log(Buffer.concat([buf1,buf2,buf3,buf4],12).toString('utf8'));//toString()默认是utf8

var all = Buffer.concat([buf1,buf2,buf3,buf4],12);
console.log(all.toString());

var s = all.slice(6,9);//截取
console.log(s.toString());

//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
//复制
var buffers = new Buffer(12);
buf1.copy(buffers,0,0,3);
//console.log(buffers.toString('utf8',0,3));

buf2.copy(buffers,3,0,3);
buf3.copy(buffers,6,0,3);

buf4.copy(buffers,9,0,3);
console.log(buffers.toString('utf8'));

console.log(Buffer.byteLength('ab萌萌'));//字符串的字节数