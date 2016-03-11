/**
 * Created by Administrator on 2016/3/9.
 */

//字符串转buffer
var buffer = new Buffer('刘刚','utf8');
console.log(buffer);

//buffer转字符串
console.log(buffer.toString('utf8'));
console.log(buffer.toString('utf8',3,6));//包前不包后，指的是3、4、5