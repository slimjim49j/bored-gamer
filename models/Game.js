const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const GameSchema = new Schema({
    bggGameId: Number,
    title: String,

    minPlayers: Number, 
    maxPlayers: Number,
    avgTime: Number, 
    avgRating: Number, 

    mechanic: String, 
    category: String, 

    year: Number, 
    imageUrl: String,
    designer: String,
    bggGameUrl: String
});

module.exports = Game = mongoose.model("Game", GameSchema);