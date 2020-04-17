const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { LikeSchema } = require("./Like");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }, 
    likes: [LikeSchema],
});

module.exports = User = mongoose.model("User", UserSchema);