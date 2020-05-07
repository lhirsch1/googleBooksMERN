// require mongoose
const mongoose = require("mongoose");
// mongoose schema allows us to create an object analogous to a database table
const Schema = mongoose.Schema;

//creates bookSchema which requires book objects to have the same datastructure 
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});
//export book schema as Book
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
