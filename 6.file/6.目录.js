/**
 * 操作目录
 */

var fs = require('fs');
// mk dir
//创建目录（异步）
//创建目录 的时候要求父目录必须存在
// test 可以是目录名test(创建test目录)，也可以是路径test/t(在test目录下创建t目录)
//fs.mkdir('test/t',function(err){
//    if(err){
//        console.log(err);
//        console.log('目录创建失败');
//    }else{
//        console.log('目录创建成功');
//    }
//});

//如果父目录不存在，想要创建子目录，可以写一个方法
//如果node做的了，node做；node做不了自己做
//创建文件夹，如果父文件夹不存在的话，怎需要自动创建
//作业
function makep(path,callback){
    // 1. 把这个参数转成数组
    // 2. 依次判断各个目录是否存在，如果存在跳过，如果不存在则创建一个
    // 3. 最后创建一个最终目录

}

//2.读取目录下所有的文件
//回调函数（约定俗成的写法）第一个参数都是err，第二个可选
//读东西的话会把读到的内容放到第二个参数data
//写的话就不需要返回值了，可能就没有第二个参数了
fs.readdir('./book',function(err,files){
    console.log(files);
})

//3. 获取一个文件或目录详情
//node里没有浏览器兼容的问题,能用什么用什么
fs.readdir('./book',function(err,files){
    //循环文件列表
    files.forEach(function(file){
        //获取文件的详情，file当前目录下
        fs.stat('./book/'+file,function(err,state){//注意：此处是 ./book/ 而不是 ./book  ,注意路径不要写错
            //是否是目录（遍历会用到，判断）
            console.log(state.isDirectory());
            //是否是文件（遍历会用到，判断）
            console.log(state.isFile());
            console.log(state.size);
        });  //异步,需要回调函数
    }); // 迭代数组
    //fs.stat(); //状态，详情，统一信息
});

//4.判断一个文件(或文件夹)是否存在
fs.exists('./book',function(exists){
    console.log(exists);
});
