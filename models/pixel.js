var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Pixel = sequelize.define("pixel", {
    routeName:
    user_id: Sequelize.STRING,
    date: Sequelize.STRING,
    mood_id: Sequelize.STRING,
    caffeine: Sequelize.INTEGER,
    alcohol: Sequelize.INTEGER,
    exercise: Sequelize.INTEGER,
    screen: Sequelize.INTEGER,
    sleep: Sequelize.INTEGER,
}, {
    FreezeTableName: true
});

User.sync();

module.exports = User;