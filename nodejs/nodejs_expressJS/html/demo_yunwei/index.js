
var express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    path = require('path'),
    http = require('http');

var Home = require('./routes/home.js');

var app = express();

/* ====== Set ====== */
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


/* ====== Use ====== */
app.use(serveStatic(path.join(__dirname, 'resources')));
// 下面三个为POST请求需要依赖的中间件
app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

/* ====== Routes ====== */
app.get('/' , function(req, res){
    res.render('home', {title : "home page"})
});
app.post('/' , Home.sendIdIp);

app.get('/monitor' , function(req, res){
    res.render('monitor', {title : "monitor page"})
});


app.listen(3000);
