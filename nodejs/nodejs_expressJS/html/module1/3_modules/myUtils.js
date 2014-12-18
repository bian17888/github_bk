/**
 * Created by biankai on 14/12/17.
 * Info : code organization -> common module
 */

// define a method : printMessage
var printMessage = function (message) {
    console.log('Message :' + message);
}
// define a method : printWithDateMessage
var printWithDateMessage = function (message) {
    console.log(new Date().toUTCString() + ' - Message : ' + message);
}

// exports a method
exports.printMessage = printMessage;
exports.printWithDateMessage = printWithDateMessage;

