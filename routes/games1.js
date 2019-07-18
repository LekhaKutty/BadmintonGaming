const express = require('express');

const router = express.Router();

const mongo = require('mongodb');


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
                        //res.redirect('/');
                    }
                });
            console.log(req.session.userId);
            res.redirect('/messages');/*This is not redirecting*/
        })
        .catch((err)=>console.log(err))
    //res.status(200).send();   
});
module.exports = router;