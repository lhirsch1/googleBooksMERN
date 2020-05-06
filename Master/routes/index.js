//require dependencies
const path = require("path");
//router is a method of express package
const router = require("express").Router();
//apiRoutes references contents of api folder
const apiRoutes = require("./api");

// API Routes
// makes routes for books and google
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);


//exporting router for server.js
module.exports = router;
