// getmodule.js

//console.log('success!');

// Demo01
// var myModule = require('./ch3_module.js');
// myModule.setName('biankai');
// myModule.sayHello();



// Demo02:单次加载
var hello01 = require('./ch3_module.js');
hello01.setName('biankai');

var hello02 = require('./ch3_module.js');
hello02.setName('kaibian');

hello01.sayHello();