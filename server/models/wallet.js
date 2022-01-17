const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  parent: String,
  googleName: String,
  accessToken: String,
  refreshToken: String,
});

// compile model from schema
module.exports = mongoose.model("wallet", WalletSchema);