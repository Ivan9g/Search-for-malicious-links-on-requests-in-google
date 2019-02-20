var express = require('express');
var router = express.Router(),
    fs = require('fs'),
    vt = require('node-virustotal');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('second');
});

module.exports = router;
