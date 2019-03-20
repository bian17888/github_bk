const { exec } = require("child_process");

const child = exec("uptime | cut  -d ',' -f 1 ", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error : ${error}`);
    return;
  }
  console.log(`stdout : ${stdout}`);
  console.log(`stderr : ${stderr}`);
});

console.log(`PID is : ${child.pid}`);
