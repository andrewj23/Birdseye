const mongoose = require("mongoose");

const VisualsSchema = new mongoose.Schema({
  imgPie:
    {
      data: Buffer,
      contentType: String
    },
  imgChart:
    {
      data: Buffer,
      contentType: String
    },

});

// compile model from schema
module.exports = mongoose.model("visuals", VisualsSchema);