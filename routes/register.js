var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.get('/', function(req, res, next) {
    res.render("register");
  });

  
module.exports = router;