//require dependencies 

// express router
const router = require("express").Router();
//reference controlelr
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"

//root route 
router.route("/")
  // gets all books
  .get(bookController.findAll)
  //post method to create new book 
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  // creates route to book based on id in url
  .route("/:id")
  //get info for one book
  .get(bookController.findById)
  // put route for updating book
  .put(bookController.update)
  // delete route
  .delete(bookController.remove);

  //exports router
module.exports = router;
