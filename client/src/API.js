import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  // getArticles: function(params) {
  //   return axios.get("/api/nyt", { params: filterParams(params) });
  // },
  // // Gets all saved articles
  // getSavedArticles: function() {
  //   return axios.get("/api/articles");
  // },
  // Deletes the saved article with the given id

  grabAllPlanes: function () {
    return axios.get("/api/planes")
  },

  getPlanes: function(id) {
    return axios.get("/api/planes/" + id);
  }


  // Saves an article to the database
  // saveArticle: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
