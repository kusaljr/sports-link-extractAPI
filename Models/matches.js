const mongoose = require("mongoose");

const matches = mongoose.Schema({
    Matchtitle : {
        type : String,
    },
    Matchtime : {
        type : String,
    },
    Competition : {
        type : String,
    },
    Country : {
        type : String,
    },
    Link : {
        type : String,
    }
})

module.exports = mongoose.model('Matches', matches)