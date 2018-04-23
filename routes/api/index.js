const router = require("express").Router();
const planeRoutes = require("./planes");

// Plane routes
router.use("/planes", planeRoutes);

module.exports = router;
