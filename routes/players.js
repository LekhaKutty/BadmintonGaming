const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

const auth = (req,res,next) => {
    if(req.session.userId){
        next();
    }
    else{
        res.reddirect("/");
    }
}
router.get('/', (req,res)=>{
    //console.log(req.session);
    //res.send('it works');
    const { userId,username } = req.session;
    BadmintonData.find({},function(err,docs){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        else{
            //console.log(docs);
            res.render('players', {ID: userId, users: docs, name:username});
            
        }
    })
});

module.exports = router;