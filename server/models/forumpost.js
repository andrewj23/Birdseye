const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  AuthorID: String,
  AuthorName: String,
  Subject: String,
  Content: String,

});

// compile model from schema
module.exports = mongoose.model("post", PostSchema);