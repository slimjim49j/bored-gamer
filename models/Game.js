const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const GameSchema = new Schema({
    bggGameId: Number,
    title: String,

    minPlayers: Number, 
    maxPlayers: Number,
    avgTime: Number, 
    avgRating: Number, 

    mechanics: [Mechanic], 
    categories: [Category], 

    year: Number, 
    imageUrl: String,
    designer: String,
    bggGameUrl: String
});

const Mechanic = new Schema({
    mechanic: String
});

const Category = new Schema({
    category: String
});

module.exports = Game = mongoose.model("Game", GameSchema);