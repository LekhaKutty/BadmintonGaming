const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

router.get('/:id',(req,res)=>{
    let userId = req.session.userId;
    let id = req.params.id;
    BadmintonData.updateOne(
        {'_id': userId}, 
        { $pull: { "info" : { '_id':id} } },
        function(err, doc){
            if (err) console.log(err);
            console.log("succesfully deleted");
        });
    console.log(req.session.userId);
    res.redirect('/messages');
});
module.exports = router;