var express = require('express');
const router = express.Router();
const controllers = require("../controllers/Account");
const bcrypt = require('bcryptjs');
//User model
const User = require('../models/User');


router.get("/", controllers.getRegister);

router.post("/", function(req, res ,next) {
    // console.log(req.body)
    // res.send("hello")
    const { email, name, password, password2} = req.body;
    let errors = [];

    //Check required fields
    if(!email || !name || !password || !password2){
        errors.push({msg:'Please fill in all fields'});
    }

    //Check password match
    if(password !== password2){
        errors.push({msg: 'Password do not match'});
    }

    //Check pass lenght 
    if(password.lenght < 6){
        errors.push({msg:'Password should be at least 6 character'});
    }

    if(errors.length>0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    }else{ 
        //Validation Passed
        User.findOne({ email: email }).then(user => {
            if (user) {
              errors.push({ msg: 'Email already exists' });
              res.render('register', {
                errors,
                name,
                email,
                password,
                password2
              });
            } else {
              const newUser = new User({
                name,
                email,
                password
              });
            // console.log(newUser)
            // res.send('hello');

            //Hash Password
            bcrypt.genSalt(10, (err, salt)=> 
              bcrypt.hash(newUser.password, salt, (err, hash)=> {
                if(err) throw err;
                //set password to hash
                newUser.password = hash;
                //Save User
                newUser.save().then(user => {
                  res.redirect('/');
                }).catch(err => console.log(err));
            }))
            }
        });
    }
});



module.exports = router;