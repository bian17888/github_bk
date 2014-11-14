/* demo03: staticServer */
// 1、staticServer 简版
// var http = require('http');
// var parse = require('url').parse;
// var join = require('path').join;
// var fs = require('fs');

// var root = __dirname;

// var server = http.createServer(function(req, res) {
//     var url = parse(req.url);
//     var path = join(root + url.pathname);
//     var stream = fs.createReadStream(path);
//     stream.on('data', function(chunk) {
//         req.setEncoding('utf-8');
//         res.write(chunk);
//     });
//     stream.on('end', function(chunk) {
//         res.end();
//     });
// });
// server.listen(3000);



// 2、 pipe()用法
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     var stream = fs.createReadStream(__dirname + '/1_base.js');
//     stream.pipe(res);
//     // pipe用法2:写入文件
//     // var writeStream = fs.createWriteStream(__dirname + '/log.txt');
//     // stream.pipe(writeStream);
// });
// server.listen(3000);



// 3、staticServer pipe()优化版
var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var url = parse(req.url);
    var path = join(__dirname + url.pathname);
    var stream = fs.createReadStream(path);
    
    stream.pipe(res);
});
server.listen(3000);
