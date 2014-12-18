/**
 * Created by biankai on 14/12/17.
 */

var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path');

var app = express();

/* ====== Set ====== */
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


/* ====== Use ====== */
app.use(serveStatic(path.join(__dirname, 'public')));


/* ====== Routes ====== */
app.get('/' ,function(req, res){
    res.render('home');
});
app.get('/:viewname' ,function(req, res){
    res.render(req.params.viewname);
});

app.listen(3000);