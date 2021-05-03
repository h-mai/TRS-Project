const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router

module.exports = router;

//Defining methods for the User Controller
//find all repairers
//find by type
//find by id 
//create new user profile
//update new user profile 
//create new business profile
//update new business profile 

