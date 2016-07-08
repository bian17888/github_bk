/**
 * Created by bian17888 on 15/12/1.
 */

var http = require('http');

var app = http.createServer(function(req, res){

	var sreq = http.request({
		host : 'sneezryworks.sinaapp.com',
		path : '/ip.php',
		method : req.method
	}, function(sres){
		sres.pipe(res);
		sres.on('end',function(){
			console.log('pipe data is done');
		});
	});

	if (/POST|PUT/i.test(req.method)) {
		req.pipe(sreq);
	} else {
		sreq.end();
	}

});

app.listen('3001');
console.log('server is running on port 3001 ');