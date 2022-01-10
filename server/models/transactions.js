const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  amount: String,
  native_amount: String,


});

// compile model from schema
module.exports = mongoose.model("transaction", TransactionsSchema);