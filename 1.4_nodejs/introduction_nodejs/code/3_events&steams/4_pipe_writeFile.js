var fs = require("fs");
var request = require("request");

var website = request("https://www.baidu.com");

website.pipe(fs.createWriteStream("baidu.html"));
