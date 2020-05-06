//use axios for api calls
const axios = require("axios");
//require models 
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    //destructuring query and params from req for the search
    const { query: params } = req;
    //axios calls googlebooks api and passes in params
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      //when successful
      .then(results =>
        results.data.items.filter(
          //filter is creating new array of objects(books) where each book has only the info below 
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      //apiBooks is the book obj array from above 
      .then(apiBooks =>
        //find method from book to filter through the book and make sure that there is a value for each key that was returned from the googleapi call
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      //returns books as json object
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
