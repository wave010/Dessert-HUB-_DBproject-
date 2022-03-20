// var express = require('express');
// var router = express.Router();
// const db = require('monk')('localhost:27017/TutoroialDB') // import monk for manege database mongoDB and connect url to database

// const { body, validationResult, check } = require('express-validator');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render("blog");
//   });

//   router.get('/add', function(req, res, next) {
//     res.render("addblog");
//   });

//   router.post('/add',[
//     check("name","Please Input your blog name").not().isEmpty(),
//     check("description","Please Input your blog desription").not().isEmpty(),
//     check("author","Please Input your blog author").not().isEmpty()
//   ], function(req, res, next) {
//     const result = validationResult(req);
//     var errors = result.errors;
//     if (!result.isEmpty()) {
//       res.render('addblog',{errors:errors});
//     }else{
//       //insert to db
//       var ct = db.get('blogs') // collection 'blogs'
//       ct.insert({
//         name:req.body.name,
//         description:req.body.description,
//         author: req.body.author
//       }, function(err,blog){
//         if(err){
//             res.send(err);
//         }else{
//           req.flash("error", "บันทึกบทความเรียบร้อยแล้ว"); 
//           res.location('/blog/add');
//           res.redirect('/blog/add');
//         }
//       });
//     }
//   });

// module.exports = router;
  