const router = require("express").Router();
const weatherController = require("../controllers/weatherController");

router.route("/:lat/:long")
  .get(weatherController.findWeather);

module.exports = router;