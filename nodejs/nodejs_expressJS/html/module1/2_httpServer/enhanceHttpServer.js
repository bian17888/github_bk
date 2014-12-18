/**
 * Created by biankai on 14/12/17.
 * Info :  静态资源服务器基础 demo
 */

var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');

var server = http.createServer(function(request, response){
    var urlParts = url.parse(request.url);
    var doc = './docs' + urlParts.pathname;
    path.exists(doc, function fileExists(exists){
        if(exists){
            response.writeHead(200, {'Content-type': 'text/plain'});
            fs.createReadStream(doc).pipe(response);
        }else{
            response.writeHead(404);
            response.end('not found \n');
        }
    })
}).listen(3000)