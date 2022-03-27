var express = require('express');
const router = express.Router();
const controllers = require("../controllers/addrecipe");

//Recipe model
const recipe = require('../models/addrecipe');


router.get("/", controllers.getAddrecipe);

router.post("/", function(req, res, next){
    console.log(req.body)
    //res.send("hello")
    const { dessertname, category, diffselect, ingredient, howto, imgurl} = req.body;
    let errors = [];


     //Check required fields
     if(!dessertname || !category || !diffselect || !ingredient || !howto || !imgurl){
        errors.push({msg:'Please fill in all fields'});
    }

    if(errors.length>0){
        res.render('addrecipe',{
            errors,
            dessertname,
            category,
            diffselect,
            ingredient,
            howto,
            imgurl
        });
    }else{
        const newrecipe = new recipe({
            dessertname,
            category,
            diffselect,
            ingredient,
            howto,
            imgurl
        });
        // console.log(newrecipe)
        // res.send('hello');
        newrecipe.save().then(user => {
            req.flash('success_msg', 'You are now add recipe');
            res.redirect('addrecipe');
        }).catch(err => console.log(err));
    }
});


module.exports = router;