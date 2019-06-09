const key = require("../keys");
const baseURL = "https://developer.nps.gov/api/v1/";
const apiKey = key.nps;
const axios = require("axios");

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