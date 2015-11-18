/**
 * Created by bian17888 on 15/11/16.
 */
var http = require('http');
var parse = require('url').parse
var fs = require('fs');
var join = require('path').join;
var qs = require('querystring');

var root = __dirname;

/**
 * create http server
 */
var server = http.createServer(function (req, res) {

	var readStream = fs.createReadStream(join(root + '/mock.json'));

	var data;
	// 关键点1 : 设置 encoding -> utf-8, chunk转换为 string
	readStream.setEncoding('utf-8');
	readStream.on('data',function(chunk){
		data = chunk;
	})
	readStream.on('end',function(){
		// 关键点2 : string -> json
		data = JSON.parse(data);
		res.end(data.message);
	})

})

/**
 * run app
 */
server.listen(3000, function () {
	console.log('The app is running on port 3000 !');
});