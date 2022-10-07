const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListsSchema = new Schema({
  list: {
    type: String,
  },
  
});
const Lists = mongoose.model("Lists", ListsSchema);
module.exports = Lists;
