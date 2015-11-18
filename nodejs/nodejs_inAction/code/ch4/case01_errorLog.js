/**
 * Created by bian17888 on 15/11/16.
 */
var http = require('http');
var parse = require('url').parse
var fs = require('fs');
var join = require('path').join;

var root = __dirname;


/**
 * create http server
 */
var server = http.createServer(function(req, res){
	var path = parse(req.url).pathname;

	if (path === '/') {
		res.end('ok\n');
	} else {
		var readStream = fs.createReadStream(join(root + '/1_base.js'));
		var writeStream = fs.createWriteStream(join(root + '/log.txt'));
		readStream.pipe(writeStream);
		console.log('==========');
		console.log(join(root + '3_staticServer.js'));
		res.end('ok')

		//writeStream.write('path : ' + path + '\n');
		//writeStream.end('====== the end ======');
		//writeStream.on('finish', function(){
		//	console.log('finished!');
		//	res.end('ok')
		//});
	}
})


/**
 * run app
 */
server.listen(3000, function () {
	console.log('The app is running on port 3000 !');
});