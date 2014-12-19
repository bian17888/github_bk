/**
 * Created by biankai on 14/12/18.
 */
var sha1 = require('node-sha1'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    path = require('path'),
    http = require('http');

exports.sendIdIp = function(req, res){
    var timenow,
        dealvalue;
    var postheaders,
        optionspost,
        reqData = {};

    databody = req.body;
    databody = JSON.stringify(databody);
    console.dir(databody);
//    timeNow = new Date().getTime();


//    dealValue = sha1(timeNow+'2TTGF2BCOBEZOSJRWIUA');
    dealValue = sha1('1418708348'+'2TTGF2BCOBEZOSJRWIUA');

    optionspost = {
        host : '10.0.3.202',
        port : '8066',
        path : '/console/rds/api/inner/instance/detail/query',
        method : 'POST',
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
            "Content-Length": databody.length,
            "timestamp" : '1418708348',     //timeNow
            "key" : 'fb3bdbf5a7f3a7bff940a340e935f3aebe236bb7',  //dealValue
            "X-Requested-With" : "XMLHttpRequest"
        }
    };
    var reqPost = http.request(optionspost, function(resPost){
        console.log('STATUS: ' + resPost.statusCode);
        console.log('HEADERS: ' + JSON.stringify(resPost.headers));
        resPost.setEncoding('utf8');
        resPost.on('data', function(chunk){
            console.log('BODY: ' + chunk);
            res.send(chunk);
        })
    });
    reqPost.write('databody');
    reqPost.end();

    res.render('home', {title : "home page"})
}