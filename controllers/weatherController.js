const pointsBaseURL = "https://api.weather.gov/points/";
const gridBaseURL = "https://api.weather.gov/gridpoints/";
const axios = require("axios");

module.exports = {
  findWeather: function (req, res) {
    let latitude = req.params.lat;
    let longitude = req.params.long;
    let qString = pointsBaseURL + latitude + "," + longitude;
    axios.get(qString)
      .then(function (response) {
        let cwa = response.data.properties.cwa;
        let gridX = response.data.properties.gridX;
        let gridY = response.data.properties.gridY;
        let qString2 = gridBaseURL + cwa + "/" + gridX + "," + gridY + "/forecast";
        axios.get(qString2)
          .then(function (response) {
            res.json(response.data);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }

};