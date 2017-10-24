var helper = require("../db/helper.js");
var express = require("express");
var guitarsRouter = express.Router();

guitarsRouter.get("/", function(req, res) {
  console.log("api/guitars route hit");

  helper.all(function(guitars) {
    res.json(guitars);
  });
})
module.exports = guitarsRouter;
