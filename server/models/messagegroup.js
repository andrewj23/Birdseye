const mongoose = require("mongoose");

const MessageGroupSchema = new mongoose.Schema({
  name: String,
  img:
    {
      data: Buffer,
      contentType: String
    },
  lastMessage: String,
  time: String

});

// compile model from schema
module.exports = mongoose.model("messagegroup", MessageGroupSchema);