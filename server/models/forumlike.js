const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  AuthorID: String,
  AuthorName: String,
  Parent: String
});

// compile model from schema
module.exports = mongoose.model("like", LikeSchema);