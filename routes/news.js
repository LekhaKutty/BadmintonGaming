const express = require('express');

const router = express.Router();

const BadmintonData = require('../models/registerdata');

router.get('/',(req,res)=>{
    const { userId,username } = req.session;
    res.render('news', {ID: userId, name:username});
})

module.exports = router;