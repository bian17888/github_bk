/**
 * Created by biankai on 14/12/17.
 * Info : http server base demo .
 */
var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('This is a simple Http Server');
    response.end();
}).listen(3000);