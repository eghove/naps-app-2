import axios from "axios";

export default {
  // function for basic park info
  basicInfo: function(parkcode) {
    return axios.get("/api/nps/park/" + parkcode);
  },

  weatherInfo: function(parkcode) {
    return axios.get("/api/nps/weather/" + parkcode)
  },

  campgroundInfo: function(parkcode) {
    return axios.get("/api/nps/campgrounds/" + parkcode)
  }
};