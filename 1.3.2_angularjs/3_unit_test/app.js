/**
 * @file app
 * @author bian17888 2017/8/22 09:42
 */
var express = require('express');
var app = express();

app.use(express.static('./src'));
app.use(express.static('./bower_components'));

var server = app.listen((process.env.PORT || 3000), function () {
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port);
});