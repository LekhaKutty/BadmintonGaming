const express = require('express');

const router = express.Router();

const auth = (req,res,next) => {
    if(req.session.userId){
        next();
    }
    else{
        res.reddirect("/");
    }
}


router.get('/', (req,res)=>{
    //res.send('it works');
    //console.log(req.session);
    const userId = req.session.userId;
    const username = req.session.username;
    res.render('index', {ID: userId, name:username});
});

module.exports = router;