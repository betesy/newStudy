// Buffer 类似于数组
// Buffer 里面只能放字节 0-255

//指定大小
var buffer = new Buffer(1);
buffer[0] = 16;
console.log(buffer);

//通过字符串来创建
console.log(new Buffer("珠"));
console.log(new Buffer("贝"));

//通过数组来创建
console.log(new Buffer([1,2,3]));//只能放数字，字节的大小，放其他的要清零（十进制，二进制，十六进制都可以）