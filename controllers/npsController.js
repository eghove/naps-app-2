const key = require("../keys");
const baseURL = "https://developer.nps.gov/api/v1/";
const apiKey = key.nps;
const axios = require("axios");

module.exports = {
  findByName: function (req, res) {
    let query = req.params.name;
    const qType = "parks?q=";
    const api = "&api_key=" + apiKey;
    let qString = baseURL + qType + query + api;
    // console.log("api route hit! Searching for " + query);
    // console.log(qString);
    axios.get(qString)
      .then(function (response) {
        // console.log(response.data);
        res.json(response.data);
      })



  }

}