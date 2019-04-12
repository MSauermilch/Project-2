// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   app.get("/coffee", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("coffee", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   app.get("/drinks", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("drinks", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   app.get("/exercise", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("exercise", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   app.get("/screen", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("screen", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   app.get("/sleep", function(req, res) {
//     db.Track.findAll({}).then(function(dbTrack) {
//       res.render("sleep", {
//         msg: "Welcome!",
//         examples: dbTrack
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
