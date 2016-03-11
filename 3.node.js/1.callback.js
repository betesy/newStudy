/**
 * Created by Administrator on 2016/3/9.
 */

//异步，非阻塞
function boil(){
    console.log("烧水了");
}
setTimeout(boil,2000);
console.log('bbbbbb');

//死循环；阻塞后续代码的执行
function exe(){
    while(true){

    }
}
exe();
console.log('c');