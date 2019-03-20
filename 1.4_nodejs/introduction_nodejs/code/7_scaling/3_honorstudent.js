const fun = require("./mathfun");

process.on("message", m => {
  if (m.cmd === "double") {
    console.log(`honorStudent : I was asked to double ${m.number}`);
    fun.evenDoubler(m.number, (error, result) => {
      process.send({ answer: result });
    });
  } else if (m.cmd === "done") {
    process.exit();
  }
});
