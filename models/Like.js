const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const LikeSchema = new Schema({
  gameId: ObjectId,
  dislike: Boolean,
  review: String,
  date: {
    type: Date,
    default: Date.now
  },
});

const Like = mongoose.model("Like", LikeSchema);

module.exports = {
    Like,
    LikeSchema,
}