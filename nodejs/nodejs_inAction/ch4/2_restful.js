/* demo02:  crul模拟POST、GET请求*/
var http = require('http');
var count = 0;

var server = http.createServer(function(req, res) {
    req.setEncoding('utf-8');
    req.on('data', function(chunk) {
        count++;
        console.log(chunk);
        console.log('time:'+count);
    });
    req.on('end', function(chunk) {
        console.log('===== done parsing ======');
        res.end();
    })
});
server.listen(3000);
