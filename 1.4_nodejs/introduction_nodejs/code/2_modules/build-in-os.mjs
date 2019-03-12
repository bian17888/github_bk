import { hostname, loadavg, freemem, totalmem } from "os";

const toMb = function(f) {
  return Math.round((f / 1024 / 1024) * 100) / 100;
};

console.log("Host : " + hostname());
console.log("15 min. load average : " + loadavg()[2]);
console.log(toMb(freemem()) + " of " + toMb(totalmem()) + " MB free");
