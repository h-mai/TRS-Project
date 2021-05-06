const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/newUser"
router.route("/signup")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
