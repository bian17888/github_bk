
var express = require('express'),
    SuperAgent =require('superagent');


var app = express();

/* ====== Set ====== */
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


/* ====== Use ====== */

/* ====== Routes ====== */
request
    .post('/api/pet')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(res){
        if (res.ok) {
            alert('yay got ' + JSON.stringify(res.body));
        } else {
            alert('Oh no! error ' + res.text);
        }
    });


app.listen(3000);
