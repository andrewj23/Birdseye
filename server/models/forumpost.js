const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  Subject: String,
  Content: String,
  Author: String

});

// compile model from schema
module.exports = mongoose.model("post", PostSchema);