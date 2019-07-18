const express = require('express');

const router = express.Router();

//const URL = getDburl();
const BadmintonData = require('../models/registerdata');
//let database;
/*mongo.connect(URL, { useNewUrlParser: true }, (err, db) => {
    database = db.db("BadmintonData");
});*/

router.post('/',(req,res)=>{
    console.log(req.body);
    let userId = req.body.userId;
    console.log(req.session.username);
    BadmintonData.updateOne(
    {_id:userId},
    {
        $push:
        {
            info: [{
                time:req.body.time,
                location:req.body.location,
                message:req.body.message,
                sender:req.session.username,
                sender_id:req.session.userId
            }]
        }
    },{upsert:true}, function(err, doc){
        if (err) console.log(err);
        console.log("succesfully saved");
    });
    //database.collection("badmintondatas")
    BadmintonData.findOne({_id:userId},(err,user)=>{
    if(err){
        return res.status(500).send();
    }
    if(!user){
        err = 'Incorrect userId';
    }
    else{
        console.log(user);
    }
})
res.redirect('/players');
});


module.exports = router;