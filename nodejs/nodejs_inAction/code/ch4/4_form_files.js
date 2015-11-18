/**
 * Created by bian17888 on 15/11/18.
 */
var http = require('http');
var parse = require('url').parse;
var qs = require('querystring');


var lists = [];

var server = http.createServer(function (req, res) {

	if(req.url === '/'){
		switch (req.method) {

			case 'GET' :
				showLists(res);
				break;

			case 'POST' :
				upload(req, res);
				break;

			default :
				badRequest(res);
				break;
		}
	} else {
		notFound(res);
	}

});



/**
 * run app
 */
server.listen(3000, function () {
	console.log('The app is running on port 3000 !');
});

// ============================== Functions ========================================
/**
 * notFound
 */
function notFound(res) {
	res.statusCode = 404;
	res.setHeader('Content-Type','text/plain');
	res.end('Not Found');
};

/**
 * badRequest
 */
function badRequest(res) {
	res.statusCode = 400;
	res.setHeader('Content-Type','text/plain');
	res.end('Bad Request');
}

/**
 * addList
 */
function upload(req, res) {

	var body = '';

	req.setEncoding('utf8');
	req.on('data',function(chunk){
		body += chunk;
	});
	req.on('end',function(){
		var obj = qs.parse(body);
		lists.push(obj.list);
		showLists(res);
	});

}

/**
 * showLists
 */
function showLists(res) {
	var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Restful</title>\n</head>\n<body>\n<h2>To do list</h2>\n<form action="/" method="post" enctype="application/x-www-form-urlencoded">\n\t<p><label for="">输入list : </label><input type="text" name="list" placeholder="输入..."/> </p>\n\t<p><button type="submit">submit</button></p>\n</form>\n<div class="box">\n\t<ul>\n\t'
		+ lists.map(function(item){
			return '<li>' + item +'</li>'
		}).join('')
		+'\n\t</ul>\n</div>\n</body>\n</html>';
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.setHeader('Content-Length',Buffer.byteLength(html));
	res.end(html);
}