// File system
var fs = require('fs');
/**
 * 1. ÿһ��ͬ���������첽�������ǳɶԳ��ֵ�
 * 2. ͬ���������������̵߳�ִ�У�������û�з���֮ǰ����ִ�к�������
 * 3. ������Ҫ���ݻص�������ͨ����������ֵ���ս��
 * 4.
 */
var data = fs.readFileSync('./index.txt','utf8');
console.log(data);
console.log('b');
console.log('c');

//�����쳣
try{
    var data2 = fs.readFileSync('./index1.txt','utf8');
}catch(err){
    console.log(err);
}
console.log(data2);
console.log('bb');
console.log('cc');

//error
try{
    var data3 = fs.readFileSync('./index3.txt','utf8');
}catch(err){
    console.error(err);
}
console.log(data3);
console.log('bbb');
console.log('ccc');