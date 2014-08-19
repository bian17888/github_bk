var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET user page. */
router.get('/u/:user', function(req, res) {
  res.render('user');
});
/* POST home page. */
router.post('/post', function(req, res) {
  res.render('post');
});
/* GET & POST reg page. */
router.get('/reg', function(req, res) {
  res.render('reg');
});
router.post('/reg', function(req, res) {
  res.render('doReg');
});
/* GET & POST login page. */
router.get('/login', function(req, res) {
  res.render('login');
});
router.post('/login', function(req, res) {
  res.render('doLogin');
});
/* GET logout page. */
router.get('/logout', function(req, res) {
  res.render('logout');
});


module.exports = router;
