/**
 * Created by bian17888 on 15/12/1.
 */

var express = require('express');
var request = require('superagent');

var app = express();

app.get('/', function(req, res){

	var sreq = request.get('sneezryworks.sinaapp.com/ip.php')
	sreq.pipe(res);
	sreq.on('end', function(err, sres){
		console.log('done');
	});

});

app.listen('3001');
console.log('server is running on port 3001 ');