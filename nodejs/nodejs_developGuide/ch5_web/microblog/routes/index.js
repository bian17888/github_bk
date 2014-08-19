var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',name:'index_router'});
});
router.get('/hello', function(req, res) {
  res.render('hello', { title: 'Express',name:'hello_router'});
});
router.get('/user/:username', function(req, res) {
  res.send('user:'+req.params.username);
});
module.exports = router;
