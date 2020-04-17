const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Like = new Schema({
  gameId: ObjectId,
  dislike: Boolean,
  review: String,
});

module.exports = Like = mongoose.model("Like", LikeSchema);