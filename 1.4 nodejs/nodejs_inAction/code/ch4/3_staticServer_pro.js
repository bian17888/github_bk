
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

	// 改造此处 : 用fs.stat(), 获取文件相关信息
	fs.stat(path, function (err, stat) {
		if(err){
			if(err.code === 'ENOENT'){
				res.statusCode = 404;
				res.end('Not Found')
			} else {
				res.statusCode = 500;
				res.end('Internal Server Error ! ');
			}
		} else {
			var readStream = fs.createReadStream(path);
			res.setHeader('Content-Length', stat.size);
			readStream.pipe(res);
			readStream.on('error', function (err) {
				res.statusCode = 500;
				res.end('Internal Server Error ! ');
			});
		}
	});


});


/**
 * run app
 */
server.listen(3000, function () {
	console.log('The app is running on port 3000 !');
});
