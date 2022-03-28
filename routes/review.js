var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check ,validationResult, body} = require('express-validator');
// const controllers = require("../controllers/review");
const { ensureAuthenticated } = require("../config/auth");



const reviewSchema ={
    RevDetail:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
}
const NewReview = mongoose.model("Review",reviewSchema)


router.get("/",ensureAuthenticated, function(req, res, next){
    NewReview.find((err, review)=>{
        if(!err){
            res.render('review',{
                Newreview : review
            });
        }else{
            console.log("Failed to retrueve")
        }
    })
});



router.post("/",
    body("textarea1").not().isEmpty()
,function(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
    }else{
        let newReview = new NewReview({
            RevDetail: req.body.textarea1
        });
        newReview.save();
        console.log(req.body.textarea1);
        res.render("review");
    }
});
module.exports = router;