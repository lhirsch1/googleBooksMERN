// import models
const db = require("../models");

// Defining methods for the bookController using the Book model
module.exports = {
  //find all books
  //uses find method from Book model
  findAll: function(req, res) {
    db.Book.find(req.query)
      //return info or catch error
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  //find one book
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  //create new book 
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  //update book: finds id (req.params.id) and updates it with info in req.body
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  //remove book based on id
  remove: function(req, res) {
    //finds book
    db.Book.findById(req.params.id)
      //then removes that book
      .then(dbBook => dbBook.remove())
      //then returns book info
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
