var express = require('express');
const router = express.Router();
const {ensureAuthenticated } = require('../config/auth');

//model recipe
const recipe = require('../models/addrecipe');

router.get('/', ensureAuthenticated ,function(req, res, next) {
  recipe.find((err, recipe) =>{
    if(!err){
      res.render("recipe",{
        recipe : recipe
      });
    }else{
      console.log('Failed to retrueve')
    }
  })  
  });

module.exports = router;