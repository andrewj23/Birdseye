const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  creatorName: String,
  Content: String,
  time: Number

});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);