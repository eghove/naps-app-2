const router = require("express").Router();
const npsController = require("../controllers/npsController");

// route to search by keyword/name
router.route("/keyword/:name")
  .get(npsController.findByName);

// route to search by state
router.route("/state/:state")
  .get(npsController.findByState);

// route to return park by park code
router.route("/park/:parkcode")
  .get(npsController.findByCode);

// route to get campgrounds for a given park
router.route("/campgrounds/:parkcode")
  .get(npsController.listCampgrounds);

module.exports = router;