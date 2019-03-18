const http = require("http");
const fs = require("fs");
const socketio = require("socket.io");

const port = process.env.PORT;
const ip = process.env.IP;

const app = http.createServer(handler);
const io = socketio(app);
io.on("connection", socket => {
  setInterval(() => {
    let timestamp = Date.now();
    socket.emit("timer", timestamp);
  }, 2000);
  socket.on("submit", data => {
    console.log("Submitted : " + data);
  });
});

app.listen(port, ip);

//////////////////////////////////////////////////

function handler(req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  if (req.url === "/file.txt") {
    fs.createReadStream(__dirname + "/file.txt").pipe(res);
  } else {
    res.end("Hello World!");
  }
}

console.log("Port - " + port + " Ip - " + ip);
