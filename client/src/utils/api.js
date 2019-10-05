import axios from "axios";

export default {
  test: function () {
    console.log("running test")
    return axios.get("/api/nps/keyword/teton");
  },

  keywordSearch: function (term) {
    return axios.get("/api/nps/keyword/" + term);
  }

};