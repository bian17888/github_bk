/**
 * @fileOverview http_server
 * @desc
 * @author bian17888 16/8/24 10:17
 */

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if (req.url === '/file.txt') {
		// tolight : pipe方案, 当/file.txt不存在时, 会crash
		// 替代方案如下, 参考 : https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-read-stream/
		var rs = fs.createReadStream(__dirname + '/file.txt'); 
		rs.on('open', function () {
			rs.pipe(res);
		})
		rs.on('error', function (err) {
			res.end(JSON.stringify(err));
		});
	} else {
		res.end('Hello world!');
	}
});
server.listen('3000');
console.log('server port is 3000');
