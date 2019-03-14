process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", chunk => {
  process.stdout.write("Data -----> " + chunk);
});

process.stdin.on("end", err => {
  process.stderr.write("End! \n");
});

process.on("SIGTERM", err => {
  process.stderr.write("Why are you try to ternate me ?");
});

console.log("Node is running as process # " + process.pid);
