const mongoose = require("mongoose");

const CoinSchema = new mongoose.Schema({
  name: String,
  img:
    {
      data: Buffer,
      contentType: String
    },
  holding: Number,
  value: Number,
  percent: Number

});

// compile model from schema
module.exports = mongoose.model("coin", CoinSchema);