// readFileSync.js

var fs = require('fs');
var data = fs.readFileSync('files.txt','utf-8');
console.log(data);
console.log('end.');
