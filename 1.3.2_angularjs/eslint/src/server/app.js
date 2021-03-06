const express = require('express');
const path = require('path');
const logger = require('morgan');
const http = require('http');
const routes = require('./routes/index');

// change this to something else if port 3000 is in use
const port = 3000;

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  console.log(`listening on port ${port}`);
});
server.on('error', (error) => {
  switch (error.code) {
  case 'EACCES':
    console.error(`Port ${port} requires elevated privileges`);
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(`Port ${port} is already in use`);
    process.exit(1);
    break;
  default:
    throw error;
  }
});


module.exports = app;
