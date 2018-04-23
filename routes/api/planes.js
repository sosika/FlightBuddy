const router = require("express").Router();
const planesController = require("../../controllers/planesController");

// Matches with "/api/books"
router.route("/")
  .get(planesController.findAll)
  .post(planesController.create);

// Matches with "/api/planes/:id"
router
  .route("/:id")
  .get(planesController.findById)
  .put(planesController.update)
  .delete(planesController.remove);

module.exports = router;
