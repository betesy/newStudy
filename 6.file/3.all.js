var fs = require('fs');

//同步
//var name = fs.readFileSync('./name.txt','utf8');
//var age = fs.readFileSync('./age.txt','utf8');
//console.log(name,age);

//异步
fs.readFile('./name.txt','utf8',function(err,data){
    console.log(data);
});
fs.readFile('./age.txt','utf8',function(err,data){
    console.log(data);
});

//异步，嵌套（回调函数实现多个异步操作完成之后执行的回调）
//缺点：1.需要的时间长，m+n  2.代码可读写非常差
//嵌套多的时候，阅读起来非常麻烦;花费时间长，效率低
fs.readFile('./name.txt','utf8',function(err,name){
    fs.readFile('./age.txt','utf8',function(err,age){
        console.log(name,age);
    });
});

//计数器
//第二种
//var count = 0;
//count++;count==2;执行show();
var person = {};
function show(){
    if(Object.keys(person).length==2){  //Object.keys（obj），返回一个数组，数组里是该obj可被枚举的所有属性。 Javascript
        console.log(person);
    }
}
fs.readFile('./name.txt','utf8',function(err,name){
    person.name = name;
    show();
});
fs.readFile('./age.txt','utf8',function(err,age){
    person.age = age;
    show();
});

//promise也可以实现（专题讲）

