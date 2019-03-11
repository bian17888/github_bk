const maxTime = 1000;

const evenDouble = function(num, callback) {
  if (num % 2) {
    setTimeout(function() {
      callback(new Error("Odd input"));
    }, 1000);
  } else {
    setTimeout(function() {
      callback(null, num * 2, 1000);
    }, 1000);
  }
};

const handleResults = function(err, results, time) {
  if (err) {
    console.log("Input error : " + err.message);
  } else {
    console.log("The results are : " + results + " ( " + time + " ms) ");
  }
};

evenDouble(5, handleResults);

console.log("----------");
