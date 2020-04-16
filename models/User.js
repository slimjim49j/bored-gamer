const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Like = new Like({
    game_id: ObjectId,
    dislike: Boolean,
})

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
    likes: [Like],
});

module.exports = User = mongoose.model("User", UserSchema);