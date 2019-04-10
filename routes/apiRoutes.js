var db = require("../models");

module.exports = function(app) {
// Get all examples
  app.get("/api/tracker", function(req, res) {
    db.Track.findAll({}).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  // Create a new example
  app.post("/api/tracker", function(req, res) {
    db.Track.create(req.body).then(function(dbTrack) {
      res.json(dbTrack);
    });
  });

  app.put("/api/tracker", function(req, res) {
    db.Track.update(req.body).then(function(dbTrack) {
      res.json(dbTrack);
    }).catch(function(err) {
      res.json(err);
    });
  });

  // Delete an example by id
  //app.delete("/api/examples/:id", function(req, res) {
    //db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      //res.json(dbExample);
    //});
  //});
};
