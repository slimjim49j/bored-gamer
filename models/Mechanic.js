const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const MechanicSchema = new Schema({
  mechanic: String
});

module.exports = Mechanic = mongoose.model("Mechanic", MechanicSchema);