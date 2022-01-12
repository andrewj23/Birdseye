const mongoose = require("mongoose");

const coinbaseUserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("coinbaseUser", coinbaseUserSchema);