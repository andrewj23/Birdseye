const mongoose = require("mongoose");

const MetaMaskWalletSchema = new mongoose.Schema({
  parent: String,
  googleName: String,
  address: String,
});

// compile model from schema
module.exports = mongoose.model("metamaskWallet", MetaMaskWalletSchema);