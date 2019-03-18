const fs = require("fs");
const http = require("http");

const port = process.env.PORT;
const ip = process.env.IP;

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    if (req.url === "/file.txt") {
      fs.createReadStream(__dirname + "/file.txt").pipe(res);
    } else {
      res.end("Hello World!");
    }
  })
  .listen(port, ip);

console.log("Server is running !");
console.log("port - " + port + " ip - " + ip);
