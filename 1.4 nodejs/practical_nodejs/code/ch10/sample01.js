/**
 * Created by bian17888 on 15/11/8.
 */
var http = require('http');
var express = require('express');
var errorhandler = require('errorhandler');
var app = express();

if(process.env.NODE_ENV === 'development'){
	console.log('==========');
	app.use(errorhandler());
};

app.get('/',function(req, res){
	res.send('Hello world ! ');
});

// Start app
var server = http.createServer(app);
server.listen(3000, function(){
	console.log('The app is running on port 3000 !');
});