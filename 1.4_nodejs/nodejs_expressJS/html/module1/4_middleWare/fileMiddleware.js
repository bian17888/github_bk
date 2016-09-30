/**
 * Created by biankai on 14/12/17.
 * Info : 静态服务器， use middleware -> serveStatic
 */

var connect = require('connect');
var serveStatic = require('serve-static');

var server = connect()
    .use(serveStatic(__dirname + '/public'))
    .use(function onRequest(request, response){
        response.end('Hello from middleware')
    })
    .listen(3000);