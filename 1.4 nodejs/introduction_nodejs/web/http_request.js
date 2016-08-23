/**
 * @fileOverview http_request
 * @desc
 * @author bian17888 16/8/23 10:48
 */

var http = require('http');

var options = {
	host : 'www.taobao.com',
	port :80,
	path : '/',
	method : 'GET'
};

// 或 options
//var req = http.request('http://www.taoabao.com', function (res) {
//	console.log(res.statusCode);
//	res.pipe(process.stdout);
//});
//req.end();


// get方案
// todo : 稍后做302跳转
http.get(options, function (res) {
	console.log(res.statusCode);
	res.pipe(process.stdout);
});