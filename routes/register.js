var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.get('/', function(req, res, next) {
    res.render("register");
  });
router.post('/', function(req, res, next){
  console.log(req.body)
  res.send('helllo');
});


module.exports = router;