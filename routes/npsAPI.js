const router = require("express").Router();
const npsController = require("../controllers/npsController");

router.route("/:name")
  .get(npsController.findByName);
  
module.exports = router;