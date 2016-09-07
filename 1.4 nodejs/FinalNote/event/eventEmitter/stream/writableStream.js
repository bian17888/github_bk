/**
 * @fileOverview writableStream
 * @desc
 * @author bian17888 16/8/19 10:46
 */

console.log('stdout is writable? ' + process.stdout.writable);

process.stdout.write('Hello, ');
process.stdout.write('World');

