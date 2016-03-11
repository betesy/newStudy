// File System

/**
 *  1. �첽������Ҫ�ѻص�����
 *  2. �ص���������ͬ������ִ����Ϻ��ִ��
 *  3. �첽���������������̣߳�����Ӱ����������ִ��
 * @type {exports|module.exports}
 */

//�첽����˳��ִ��,ɶʱ���ļ�������,ɶʱ��ִ�лص�����

//1.toString()
var fs = require('fs');
function afterRead(err,data){
    console.log(data.toString());
}
fs.readFile('./index.txt',afterRead);
console.log('b');
console.log('c');

//2.utf8 ��node��utf8��utf-8һ��
function afterRead2(err,data){
    console.log(data);
    //var sum = 0;
    //for(var i=1;i<=1000000;i++){
    //    sum += i;
    //}
    //console.log(sum);//�����첽ִ��˳��
}
fs.readFile('./index2.txt','utf8',afterRead2);
console.log('bb');
console.log('cc');

//3.err
function afterRead3(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
}
fs.readFile('./index3.txt','utf8',afterRead3);
console.log('bbb');
console.log('ccc');

//4.readFile

fs.readFile('./index.txt','utf8',function (err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('bbbb');
console.log('cccc');