var express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//login handle
router.post('/', (req, res, next) =>{
  passport.authenticate('local', {
    successRedirect: '/recipe',
    failureRedirect : '/',
    failureFlash: true
  })(req, res, next);
})
module.exports = router;
