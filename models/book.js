const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;
