var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
    routeName:
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    FreezeTableName: true
});

User.sync();

module.exports = User;