
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;


/**
 * create http server
 */
var server = http.createServer(function (req, res) {
	var url = parse(req.url).pathname;
	var path = join(root, url);
	var readStream = fs.createReadStream(path);

	// 静态文件服务器 : 基本模型
	//readStream.on('data', function (chunk) {
	//	res.write(chunk)
	//});
	//readStream.on('end', function () {
	//	res.end();
	//})

	// 静态文件服务器 : pipe模型
	readStream.pipe(res);

	// 增加 error 事件, 防止 node 进程崩溃
	readStream.on('error', function (err) {
		console.log('===== error message : =====');
		console.log(err);
		res.statusCode = 500;
		res.end('Internal Server Error ! ');
	});


});


/**
 * run app
 */
server.listen(3000, function () {
	console.log('The app is running on port 3000 !');
});