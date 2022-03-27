var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check ,validationResult, body} = require('express-validator');
const controllers = require("../controllers/review");


const reviewSchema ={
    RevDetail:String
}
const NewReview = mongoose.model("Review",reviewSchema)
router.get("/", controllers.getReview);
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