var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check ,validationResult, body} = require('express-validator');
const controllers = require("../controllers/addrecipe");

// mongoose1.connect("mongodb+srv://admin:3000@cluster0.szqjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
//   console.log(":: Connected from addrecipe");
// });
const recipeSchema ={
    RecName:String,
    RecDiff:String,
    RecIng:String,
    RecHow:String,
    RecImg:String

}
const NewRecipe = mongoose.model("Recipe",recipeSchema)
router.get("/", controllers.getAddrecipe);
router.post("/",
    body("dessertname1").not().isEmpty(),
    body("ingredient1").not().isEmpty(),
    body("howto").not().isEmpty(),
    body("imgurl1").not().isEmpty()
,function(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
    }else{
        let newRecipe = new NewRecipe({
              RecName:req.body.dessertname1,
              RecIng:req.body.ingredient1,
              RecDiff:req.body.diffselect,
              RecHow:req.body.howto,
              RecImg:req.body.imgurl1
        });
        newRecipe.save();
        console.log(req.body.diffselect);
        res.render("addrecipe");
    }
});
module.exports = router;