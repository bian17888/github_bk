var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
    switch (req.method) {

        case 'POST' :
            var item = '';
            req.setEncoding('utf-8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end',function () {
                items.push(item);
                res.end('OK \n' + 'data is : ' + item);
            });
            break;

        case 'GET' :
            // 普通方法
            //items.forEach(function (value, key) {
            //	res.write(key + '->' + value + '\n');
            //})
            // 优化方法 : 设置 Content-Length, 一次性发送
            var body = items.map(function(value, key){
                return key + '->' + value;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            res.end(body);

            break;

        // 测试命令 :  curl -X DELETE  http://localhost:3000/id
        case 'DELETE' :
            var path = url.parse(req.url).pathname;
            var id = parseInt(path.slice(1), 10);

            if(isNaN(id)){
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!items[id]){
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(id,1);
                res.end('success : delete ' + id);
            }
            break;

    }
})

server.listen(3000, function () {
    console.log('The app is running on port 3000 !');
});
