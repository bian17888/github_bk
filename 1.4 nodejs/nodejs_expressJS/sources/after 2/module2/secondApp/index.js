var express = require('express');


var app = express();

app.get('/', function (request, response) {
   response.send('Welcome to Express!');
});

app.get('/customer', function (request, response) {
   response.send('This is the customer page');
});

app.get('/contact', function (request, response) {
   response.send('Contact us form');
});

app.listen(3000);