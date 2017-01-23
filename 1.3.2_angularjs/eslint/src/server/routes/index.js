const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {});
});

router.get('/vanilla', (req, res) => {
  res.render('index', { fileName: 'vanilla' });
});

router.get('/react', (req, res) => {
  res.render('index', { fileName: 'react' });
});

router.get('/angular', (req, res) => {
  res.render('index', { fileName: 'angular' });
});

module.exports = router;
