var db = require("../models");

module.exports = function(app) {
  // This route gets a list of all users
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(allUsers) {
      console.log(allUsers);
      return res.json(allUsers);
    });
  });

  // This route adds a user to the database
  app.post("/api/users", function(req, res) {
    // the user consists of a name, a username and a password
    // the object that is passed should be
    // {
    //   firstName: aFirstName,
    //   lastName: aLastName,
    //   userName: aUserName,
    //   email: aEmail,
    //   password: aPassword
    // }
    var user = req.body;
    db.user.create(user);
    console.log("Added a new user");
  });

  // This route gets a list of all pixels
  app.get("/api/pixels", function(req, res) {
    db.pixel.findAll({}).then(function(allPixels) {
      res.json(allPixels);
    });
  });

  // Get all examples
  app.get("/api/tracker/", function(req, res) {
    db.pixel.findAll({}).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  // Create a new example
  app.post("/api/tracker/", function(req, res) {
    // console.log(req);
    console.log(req.body);
    db.pixel
      .create(req.body)
      .then(function(dbTrack) {
        res.json(dbTrack);
        // console.log(dbTrack);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  app.put("/api/tracker", function(req, res) {
    db.pixel
      .update(req.body)
      .then(function(dbTrack) {
        res.json(dbTrack);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
