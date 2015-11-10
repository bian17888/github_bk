/**
 * Created by bian17888 on 15/11/10.
 */
var http = require('http');
var express = require('express');
var app = express();

app.get('/',function(req, res){
	res.send('hi');
})


var server = http.createServer(app);
var boot = function(){
	server.listen(3001,function(){
		console.log('The app is running on port 3001 ! ');
	});
};
var shut = function(){
	server.close();
};

if(require.main === module){
	boot();
} else {
	module.exports.app = app;
	module.exports.boot = boot;
	module.exports.shut = shut;
}