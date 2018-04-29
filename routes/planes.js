const router = require("express").Router();
const planesController = require("../controllers/planesController");

// Matches with "/api/books"
router.get("/api/planes", planesController.findAll)
// router.post("/", planesController.create);
  // .get(planesController.findAll)
  // .post(planesController.create);

// router.get("/:id", () => console.log("Things"));
// Matches with "/api/planes/:id"
router.get("/api/planes/:id", planesController.findByTail)

// router.get("/api/planes/test", function (req, res) {

//   res.json("For testing purposes")
// });
  // .route("/:id")
  // .get(planesController.findByTail)
  // .put(planesController.update)
  // .delete(planesController.remove);

module.exports = router;
