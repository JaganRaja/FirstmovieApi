//handling the user request will be controllers job

var Movie = require("./../models/movieModel");

var get = function (req, res) {
  // res.send("List of moviesss");
  Movie.find(function (err, movies) {
    if (err) {
      res.status(500);
      res.send("Internal server error");
    } else {
      res.status(200);
      res.send(movies);
    }
  });
};

var add = function (req, res) {
  var movie = new Movie(req.body);
  movie.save(function (err) {
    if (err) {
      res.status(500);
      res.send("Failed");
    } else {
      res.status(201);
      res.send(movie);
    }
  });
};

var getById = function (req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if (err) {
      res.status(404);
      res.send("Not Found!");
    } else {
      res.status(200);
      res.send(movie);
    }
  });
};

var update = function (req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if (err) {
      res.status(404);
      res.send("Not found");
    } else {
      movie.title = req.body.title;
      movie.genre = req.body.genre;
      movie.rating = req.body.rating;
      movie.isReleased = req.body.isReleased;

      movie.save(function (err) {
        if (!err) {
          res.status(200);
          res.send(movie);
        } else {
          res.status(500);
          res.send("Failed");
        }
      });
    }
  });
};

var patch = function (req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if (!err) {
      if (req.body._id) {
        delete req.body_id;
      }
      for (var p in req.body) {
        console.log(p);
        console.log(movie[p]);
        console.log(req.body[p]);

        movie[p] = req.body[p];
      }
      movie.save(function (err) {
        if (!err) {
          res.status(200);
          res.send(movie);
        }
      });
    }
  });
};

var del = function (req, res) {
  Movie.findById(req.body._id, function (err, movie) {
    movie.remove(function (err) {
      if (!err) {
        res.status(204);
        res.send("Removed");
      }
    });
  });
};

// module.exports = get;

// module.exports.get = get;
// module.exports.add = add;

module.exports = {
  add: add,
  get: get,
  getById: getById,
  update: update,
  patch: patch,
  del: del,
};
