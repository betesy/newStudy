//异步不能通过try catch 来捕获异步代码的异常
try{
    setTimeout(function(){
        throw Error('error');
    },1000);
}catch(e){
    console.error(e);
}
console.log('c');