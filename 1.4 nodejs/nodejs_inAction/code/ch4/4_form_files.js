/**
 * Created by bian17888 on 15/11/18.
 */
var http = require('http');
var util = require('util');
var formidable = require('formidable');
var fs = require('fs');


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

	if(!isFormData(req)){
		res.statusCode = 400;
		res.end('Bad Request : expecting multipart/form-data');
		return ;
	}

	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.keepExtensions = true;     // 上传后文件带扩展名
	form.multiples = true;  // 多选上传
	form.hash = false;      // If you want checksums calculated for incoming files, set this to either 'sha1' or 'md5'
	form.uploadDir = __dirname + '/tmp';
	form.parse(req, function(err, fields, files){
		console.log(fields);
		console.log(files);
		res.writeHead(200, {'content-type': 'text/plain'});
		res.write('received upload:\n\n');
		res.end(util.inspect({fields: fields, files: files}));
	});

	form
		.on('progress', function (bytesReceived, bytesExpected) {
			var percent = Math.floor(bytesReceived / bytesExpected * 100);
			console.log(percent + '%');
		})
		/* 两种重命名方式 : fileBegin + file-> fs.rename */
		/* this is where the renaming happens */
		.on ('fileBegin', function(name, file){
			//rename the incoming file to the file's name
			file.path = form.uploadDir + "/" + file.name;
		})
		//.on('file', function(field, file) {
		//	//rename the incoming file to the file's name
		//	fs.rename(file.path, form.uploadDir + "/" + file.name);
		//})
		.on('error', function(err) {
			console.log("an error has occured with form upload");
			console.log(err);
			req.resume();
		})




	function isFormData(req) {
		var type = req.headers['content-type'] || '';
		return 0 == type.indexOf('multipart/form-data');
	}

	return;

}

/**
 * showLists
 */
function showLists(res) {
	var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Restful</title>\n</head>\n<body>\n<h2>To do list</h2>\n<form action="/" method="post" enctype="multipart/form-data" >\n\t<p><input type="text" name="name"/></p>\n\t<p><input type="file" name="file" multiple="multiple" /></p>\n\t<p><button type="submit">upload</button></p>\n</form>\n<div class="box"></div>\n</body>\n</html>';
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.setHeader('Content-Length',Buffer.byteLength(html));
	res.end(html);
}