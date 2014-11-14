/* demo01: base http.createServer */
// var http = require('http');
// var server = http.createServer(function(req, res) {
// 	var outputInfo = 'hello world1!';
// 	res.write(outputInfo);
// 	res.end();
// });
// server.listen(3000);



/* demo02: setHeader */
var http = require('http');
var server = http.createServer(function(req, res) {
	var outputInfo = 'success!';
	var url = 'http://www.baidu.com';
	var body = '1234567890';

	res.setHeader('Location', url);
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 302;
	res.write(outputInfo);
	res.end();
});
server.listen(3000);




