const express = require('express');

const router = express.Router();

const GameData = require('../models/gamedata');

const BadmintonData = require('../models/registerdata');

router.get('/',(req,res)=>{
    const { userId,username } = req.session;
    GameData.find({},function(err,docs){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        else{
            res.render('results', {ID: userId, name:username, games: docs});
        }
    })

})

module.exports = router;