var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get', function(req, res) {
  res.json(["One - 1","Two - 2","Three - 3"]);
});

router.put('/put', function(req, res) {
  console.log(req.body);
  res.send('Log stored');
});

module.exports = router;
