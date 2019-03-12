var Resource = require("./2_resource");

var r = new Resource(8);

r.on("start", function() {
  console.log("I have started !");
});

r.on("data", function(d) {
  console.log("I have recieved data ----->  " + d);
});

r.on("end", function(t) {
  console.log("I am done, with  " + t + " data events");
});
