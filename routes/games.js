const express = require('express');

const router = express.Router();

const mongo = require('mongodb');

const {getDburl} = require("./../db.js");

const URL = getDburl();

const GameData = require('../models/gamedata');

const BadmintonData = require('../models/registerdata');

mongo.connect(URL, { useNewUrlParser: true }, (err, db) => {
    database = db.db("BadmintonData");
});



router.get('/',(req,res)=>{
    const { userId,username } = req.session;
    GameData.find({},function(err,docs){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        else{
            res.render('games', {ID: userId, name:username, games: docs});
        }
    })
    //res.render('games', {ID: userId, name:username});
})
router.post('/',(req,res)=>{
    let userId = req.session.userId;
    let id = req.body.message_id;
    console.log('****');
    console.log(req.body);
    console.log('****');
    //console.log(userId);
    const newGame = new GameData(req.body);
    newGame.save()
        .then(()=>{
            BadmintonData.updateOne(
                {'_id': userId}, 
                { $pull: { "info" : { '_id':id} } },
                function(err, doc){
                    if (err) console.log(err);
                    else{
                        console.log("deleted");
                        res.redirect('/');
                    }
                });
            console.log(req.session.userId);
            
        })
        .catch((err)=>console.log(err))
    //res.status(200).send();
    console.log("redirecting");
    
})
module.exports = router;