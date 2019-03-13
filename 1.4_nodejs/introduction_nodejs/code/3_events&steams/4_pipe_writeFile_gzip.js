var fs = require("fs");
var zlib = require("zlib");
var request = require("request");

var website = request("https://www.baidu.com");

website.pipe(zlib.createGzip()).pipe(fs.createWriteStream("baidu.html.gz"));
