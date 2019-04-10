var db = require("../models");

module.exports = function(app) {
  // This route gets a list of all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
      res.json(allUsers);
    });
  });

  // This route adds a user to the database
  app.post("/api/users", function(req, res) {
    // the user consists of a name, a username and a password
    // the object that is passed should be
    // { name: aName,
    //   userName: aUserName,
    //   password: aPassword
    // }
    var user = req.body;
    db.User.create(user);
  });

  // This route gets a list of all pixels
  app.get("/api/pixels", function(req, res) {
    db.Pixel.findAll({}).then(function(allPixels) {
      res.json(allPixels);
    });
  });

  app.post("/api/pixels", function(req, res) {
    // each pixel consists of a date, moodId, caffeine, alcohol, exercise, screen, and sleep
    // the object that is passed should be
    // {
    //   moodId: aMood,
    //   caffeine: aCaffeine,
    //   alcohol: aAlcohol,
    //   exercise: aExercise,
    //   screen: aScreen,
    //   sleep: aSleep
    // }
    var pixel = req.body;
    db.Pixel.create(pixel);
  });

  // Deletes a pixel based on id
  app.delete("/api/pixels", function(req, res) {
    db.Pixel.destroy({ where: { id: req.params.id } })
  });
};
