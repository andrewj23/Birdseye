const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  AuthorID: String,
  AuthorName: String,
  Parent: String,
  Content: String
});

// compile model from schema
module.exports = mongoose.model("comment", CommentSchema);