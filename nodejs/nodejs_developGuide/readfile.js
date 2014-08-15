// readfile.js
var readFileCallBack = function(err,data){
	if(err){
		console.log('info:'+err);
	}
	else{
		console.log(data);
	}
};
var fs = require('fs');
fs.readFile('files.txt','utf-8',readFileCallBack);
console.log('end.');
