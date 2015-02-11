var express = require('express');
var router = express.Router();

// define the home page route

router.get('/hi', function(req, res) {
  var data = {
      title: "Hi"
  };

  res.render('index', data);
})

router.get('*', function(req, res) {
  var data = {
      title: "Hello World"
  };

  res.render('index', data);
})

module.exports = router;
