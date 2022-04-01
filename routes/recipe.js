var express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//model recipe
const recipe = require("../models/addrecipe");
const user = require("../models/User");


router.get("/", function (req, res, next) {
  recipe.find((err, recipe) => {
    user.find((err, name) => {
      if (!err) {
        res.render("recipe", {
          recipe: recipe,
          user: name
        });
      
      } else {
        console.log("Failed to retrueve");
      }
    });
  });
});

module.exports = router;
