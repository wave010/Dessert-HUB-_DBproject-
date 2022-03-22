var express = require('express');
const router = express.Router();
const mongoose1 = require('mongoose');
const { check ,validationResult, body} = require('express-validator');
const controllers = require("../controllers/review");


mongoose1.connect("mongodb+srv://admin:3000@cluster0.szqjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
  console.log(":: Connected from review");
});
const reviewSchema ={
    RevDetail:String
}
const NewReview = mongoose1.model("Review",reviewSchema)
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