/**
 * Created by biankai on 14/12/17.
 * Info: node-style -> readFile 回调的写法
 */
var fs = require('fs');

fs.readFile('writeToConsole11.js', 'utf-8', function(err, data){
    if(err){
        throw err;
    }
    console.log('File contents is : ');
    console.log(data);
});
