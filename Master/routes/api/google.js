//require dependencies
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  //root route 
  .route("/")
  // get route searches google books api
  .get(googleController.findAll);
//exports router
module.exports = router;
