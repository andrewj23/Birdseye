const mongoose = require("mongoose");

const coinbaseUserSchema = new mongoose.Schema({
  parent: String,
  accessToken: String,
  refreshToken: String,
});

// compile model from schema
module.exports = mongoose.model("coinbaseUser", coinbaseUserSchema);