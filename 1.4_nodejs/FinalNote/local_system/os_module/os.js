/**
 * @fileOverview os
 * @desc
 * @author bian17888 16/9/30 14:24
 */
var os = require('os');

process.stdout.write(os.tmpDir() + '\n');
process.stdout.write(os.release());