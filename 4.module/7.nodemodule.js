// file system
//����FS����ģ��
var fs = require('fs');//����ģ�飬NODE�Դ���������ģ��
//��ȡ�ļ�
fs.readFile('./index.txt');

//�ļ�ģ�飬���������Լ�д��ģ���ļ�ģ��
//require('./math.js');

//������ģ�飬���˸�������ģ�飬����������
var mime = require('mime');
console.log(mime);

//û��·����node���������ң�������������node_modulesĿ¼��Ѱ��ģ��
//����ͳ��Ŀ¼���ң�û��Ȼ��ȥ����Ŀ¼��ֱ������Ŀ¼����Ŀ¼��Ϊֹ
//ȫ�ְ�װ֮��ҲҪ��������ϵ����Ŀ��Ҫ�͵ñ��ذ�װ

//npm config ls �Ŵ��鿴ȫ�ְ�װĿ¼
// npm install -global mime  ȫ�ְ�װ
// npm install mime -g
// npm install mime          ���ذ�װ