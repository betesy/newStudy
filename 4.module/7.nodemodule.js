// file system
//加载FS核心模块
var fs = require('fs');//核心模块，NODE自带的亲生的模块
//读取文件
fs.readFile('./index.txt');

//文件模块，就是我们自己写的模块文件模块
//require('./math.js');

//第三方模块，别人给你生的模块，第三者生的
var mime = require('mime');
console.log(mime);

//没有路径，node先在自身找，不是亲生的在node_modules目录下寻找模块
//先在统计目录下找，没有然后去父级目录，直到顶级目录（根目录）为止
//全局安装之后，也要看依赖关系，项目需要就得本地安装

//npm config ls 排错，查看全局安装目录
// npm install -global mime  全局安装
// npm install mime -g
// npm install mime          本地安装