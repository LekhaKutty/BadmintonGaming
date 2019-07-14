const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

router.get('/',(req,res)=>{
    const { userId,username } = req.session;
    BadmintonData.findOne({_id:userId},(err,user)=>{
        if(err){
            return res.status(500).send();
        }
        if(!user){
            err = 'Incorrect userId';
        }
        else{
            //console.log(user.info);
        }
        res.render('messages', {ID: userId, name:username, info: user.info});
    });
})

module.exports = router;