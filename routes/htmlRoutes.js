var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  // app.get("/mood", function(req, res) {
  //   db.pixel.findAll({}).then(function(dbpixels) {
  //     res.render("mood", {
  //       msg: "Welcome!",
  //       examples: dbpixels
  //     });
  //   });
  // });

  app.get("/coffee", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("coffee", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  app.get("/drinks", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("drinks", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  app.get("/sleep", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("sleep", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  app.get("/screen", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("screen", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  app.get("/exercise", function(req, res) {
    db.pixel.findAll({}).then(function(dbpixels) {
      res.render("exercise", {
        msg: "Welcome!",
        examples: dbpixels
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
