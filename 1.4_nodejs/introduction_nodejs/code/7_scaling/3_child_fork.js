const { fork } = require("child_process");

const child = fork(__dirname + "/3_honorstudent.js");

child.on("message", m => {
  console.log(`The answer is ${m.answer}`);
  child.send({ cmd: "done" });
});
child.send({ cmd: "double", number: 20 });
