//核心模块
var querystring = require('querystring');
var s = 'name=zfpx&age=8';
console.log(querystring.parse(s));//解析  字符串转成对象
console.log(querystring.stringify(querystring.parse(s)));//转回去，将对象转成字符串
// 1. 作业1  实现 parse  stringify 方法