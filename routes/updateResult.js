const express = require('express');

const router = express.Router();

const GameData = require('../models/gamedata');

router.post('/',(req,res)=>{
    const { userId,username } = req.session;
    let gameId = req.body.gameId;
    console.log(req.body);
    console.log(userId);
    GameData.updateOne(
    {_id:gameId},
    {
        $push:
        {
            game_details: [{
                status:req.body.status,
                player1_score1:req.body.player1_score1,
                player2_score1:req.body.player2_score1,
                player1_score2:req.body.player1_score2,
                player2_score2:req.body.player2_score2,
                player1_score3:req.body.player1_score3,
                player2_score3:req.body.player2_score3,
                player1_result:req.body.player1_result,
                player2_result:req.body.player2_result
            }]
        }
    },{upsert:true}, function(err, doc){
        if (err) console.log(err);
        console.log("succesfully saved");
        
    });
    res.redirect('/games');
});

module.exports = router;