/**
 * Created by bian17888 on 15/12/1.
 */

var http = require('http');
var request = require('superagent');

var app = http.createServer(function(req, res){

	var sreq = request.get('sneezryworks.sinaapp.com/ip.php')
	sreq.pipe(res);
	sreq.on('end', function(err, sres){
		console.log('done');
	});
});

app.listen('3001');
console.log('server is running on port 3001 ');