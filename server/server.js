var express = require("express");
var app = express();

var guitarsRouter = require("./controllers/guitars_controller.js")

app.use("/api/guitars", guitarsRouter);

app.listen(3000, function() {
  console.log("app running");
})
