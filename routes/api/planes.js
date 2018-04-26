const router = require("express").Router();
const planesController = require("../../controllers/planesController");

// Matches with "/api/books"
// router.get("/", planesController.findAll);
// router.post("/", planesController.create);
  // .get(planesController.findAll)
  // .post(planesController.create);

// router.get("/:id", () => console.log("Things"));
// Matches with "/api/planes/:id"
router
  .route("/:id")
  .get(planesController.findByTail)
  // .put(planesController.update)
  // .delete(planesController.remove);

module.exports = router;
