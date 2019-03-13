var request = require("request");

var website = request("https://www.baidu.com");

website.pipe(process.stdout);
