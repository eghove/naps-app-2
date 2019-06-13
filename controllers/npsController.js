const key = require("../keys");
const baseURL = "https://developer.nps.gov/api/v1/";
const apiKey = key.nps;
const axios = require("axios");

// function that parses latitude and longitude from the nps api
function latLongParser(string) {
  //set a itemToConvert to the latitude longitude string
  let itemToConvert = string;
  //remove "lat:" from itemToConvert
  itemToConvert = itemToConvert.replace("lat:", "");
  //remove " long:" from itemToConvert (there is a space before 'long')
  itemToConvert = itemToConvert.replace(" long:", "");
  //turn the itemToConvert string to an array of 2 items
  itemToConvert = itemToConvert.split(",");
  // return itemToConvert
  return itemToConvert;
}

module.exports = {
  // find parks by name/keyword.
  findByName: function (req, res) {
    let query = req.params.name;
    const qType = "parks?q=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    axios.get(qString)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(err => res.status(422).json(err));
  },

  // find parks by state.
  findByState: function (req, res) {
    let query = req.params.state;
    const qType = "parks?stateCode=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    axios.get(qString)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(err => res.status(422).json(err));
  },

  // find park by parkcode
  findByCode: function (req, res) {
    let query = req.params.parkcode;
    const qType = "parks?parkCode=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    axios.get(qString)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(err => res.status(422).json(err));
  },

  // find weather by parkcode
  weatherByCode: function (req, res) {
    let query = req.params.parkcode;
    const qType = "parks?parkCode=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    axios.get(qString)
      .then(function (response) {
        let latLong = response.data.data[0].latLong;
        // need to parse out lat and longitude data
        let parsedLatLong = latLongParser(latLong);
        let testLat = parsedLatLong[0];
        let testLong = parsedLatLong[1];
        // then need to pass that over to weather api endpoint
        let queryURL = "/api/weather/" + testLat + "/" + testLong;
        res.redirect(queryURL);
      })
      .catch(err => res.status(422).json(err));
  },

  // list campgrounds for a given park code
  listCampgrounds: function (req, res) {
    let query = req.params.parkcode;
    const qType = "campgrounds?parkCode=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    axios.get(qString)
      .then(function (response) {
        res.json(response.data);
      })
      .catch(err => res.status(422).json(err));
  }
}