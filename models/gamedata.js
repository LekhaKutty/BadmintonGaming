const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    player1:{
        type:String
    },
    player2:{
        type:String
    },
    date:{
        type:String
    },
    location:{
        type:String
    },
    player1_id:{
        type:String
    },
    player2_id:{
        type:String
    },
    game_details:[{
        status:{
            type:String,
            default: ''
        },
        player1_score1:{
            type:String
        },
        player2_score1:{
            type:String
        },
        player1_score2:{
        type:String
        },
        player2_score2:{
            type:String
        },
        player1_score3:{
        type:String
        },
        player2_score3:{
            type:String
        },
        player1_result:{
        type:String
        },
        player2_result:{
            type:String
        },
    }],
    
});

module.exports = mongoose.model('GameData', GameSchema);