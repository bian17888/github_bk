var request = require("request");

var web = request("https://www.baidu.com");

web.on("data", function(chunk) {
  console.log("========== data ========== > " + chunk);
});

web.on("end", function(chunk) {
  console.log("========== done ==========");
});
