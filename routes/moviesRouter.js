var express = require("express");
var moviesController = require("../controller/moviesController");

//creating Movie router
var moviesRouter = express.Router();

moviesRouter
  .route("") //movies
  .get(moviesController.get) //get request is handled by "get" method in moviesController
  .post(moviesController.add) //post request is handled by "add" method in moviesController
  .delete(moviesController.del);

moviesRouter
  .route("/:id") //movies/:id
  .get(moviesController.getById)
  .put(moviesController.update)
  .patch(moviesController.patch);

module.exports = moviesRouter;
