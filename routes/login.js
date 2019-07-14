const express = require('express');

const router = express.Router();

//const mongo = require('mongodb');

const BadmintonData = require('../models/registerdata');



router.get('/',(req,res)=>{
        console.log(req.session);
        res.render('login');
})

router.post('/',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    BadmintonData.findOne({username:username},(err,user)=>{
        if(err){
            return res.status(500).send();
        }
        if(!user){
            err = 'Incorrect username or password;'
        }
        else{
            user.comparePassword(password, (err, isMatch)=>{
                if(isMatch){
                    req.session.username = username;
                    req.session.userId = user._id;
                    return res.redirect('/');
                }
                else{
                    return res.redirect('/login');
                }
            })
        }
    })
});

module.exports = router;