var express = require("express");
var moviesRouter = require("./routes/moviesRouter");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.set("useUnifiedTopology", true);

var db = mongoose.connect(
  "mongodb://admin:admin7@ds023613.mlab.com:23613/movies",
  { useNewUrlParser: true }
);

var app = express();
app.use(bodyParser.json()); //user will send as JSON, so we need to parse it

app.listen(7000, function () {
  console.log("server is running on the port 7000");
});

//when to use this movieRouter
app.use("/movies", moviesRouter);
