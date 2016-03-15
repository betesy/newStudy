var fs = require('fs');
//处理路径
var path = require('path');
//合并 链接路径
console.log(path.join('./book','node.json'));
//windows下分隔符为： \
//linux下的分隔符为： /
//路径分隔符  seperator
console.log(path.sep);

//获取当前模块的绝对路径
console.log(__filename);
//获取当前模块的所在目录
console.log(__dirname);

//获取一个路径里文件的名
console.log(path.basename('7.path.js'));
console.log(path.basename('7.path.js','.js'));//去掉后缀，只要文件名
//获取一个路径里的扩展名
console.log(path.extname('7.path.js'));
//从一个相对路径解析出一个绝对路径
// 以应用程序的所在目录为根起点
console.log(path.resolve());
console.log(path.resolve('book'));
console.log(path.resolve('book','node.json'));
console.log(path.resolve('book','node.json','..','mysql.json'));