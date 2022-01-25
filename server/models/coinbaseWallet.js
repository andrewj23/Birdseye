const mongoose = require("mongoose");

const CoinbaseWalletSchema = new mongoose.Schema({
  parent: String,
  googleName: String,
  accessToken: String,
  refreshToken: String,
});

// compile model from schema
module.exports = mongoose.model("coinbaseWallet", CoinbaseWalletSchema);