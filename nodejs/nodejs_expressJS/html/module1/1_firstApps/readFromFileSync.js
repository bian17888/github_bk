/**
 * Created by biankai on 14/12/17.
 */
var fs = require('fs');

var content = fs.readFileSync('writeToConsole11.js', 'utf-8');

console.log('File contents is : ');
console.log(content);