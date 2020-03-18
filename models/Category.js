const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: String
});

module.exports = Category = mongoose.model("Category", CategorySchema);
