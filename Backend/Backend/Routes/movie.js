const express = require("express");
const Router = express.Router();
const movie = require("../Controller/movie");
Router.post("/postvideo", movie.Postvideo);
Router.get("/getvideo",movie.Getvideo)
Router.post("/getvideobyid",movie.GetvideoById)
Router.post("/deletevideobyid",movie.DeleteVideoById)
module.exports = Router;
