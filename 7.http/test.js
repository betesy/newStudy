var fs = require('fs');
var mime = require('mime');

console.log(mime.lookup('test.mp3'));
console.log(mime.lookup('index.html'));

//console.log(mime.lookup(request.url));
