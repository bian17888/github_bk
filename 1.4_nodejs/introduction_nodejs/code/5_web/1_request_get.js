const http = require("http");

const options = {
  host: "www.taobao.com",
  port: 80,
  path: "/",
  method: "GET"
};

console.log("Going to make request ...");

http.get(options, function(res) {
  console.log(res.statusCode);
  res.pipe(process.stdout);
});
