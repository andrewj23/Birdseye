const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  value: String,
  img:
    {
      data: Buffer,
      contentType: String
    },
  principal: Number,
  value: Number,
  percent: Number

});

// compile model from schema
module.exports = mongoose.model("summary", SummarySchema);