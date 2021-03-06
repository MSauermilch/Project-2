var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(allUsers) {
      console.log(allUsers);
      return res.json(allUsers);
    });
  });

  // Add user to database
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

  // Get all pixels
  app.get("/api/pixels", function(req, res) {
    // the object that is passed should be
    // {
    //  date: aDate,
    //  mood: aMood,
    //  caffeine: aCaffeine,
    //  alcohol: aAlcohol,
    //  exercise: aExercise,
    //  screen: aScreen,
    //  sleep: aSleep,
    //  userId: aUserId
    // }
    db.pixel.findAll({}).then(function(allPixels) {
      res.json(allPixels);
    });
  });

  // Add pixel to database
  app.post("/api/pixels", function(req, res) {
    var pixel = req.body;
    db.pixel.create(pixel);
    console.log("added a new pixel");
  });

  // Get all examples
  app.get("/api/tracker/", function(req, res) {
    db.pixel.findAll({}).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  // Create a new pixel
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

  // Update a pixel

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
