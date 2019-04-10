var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define(
        "user", 
        {
        routeName: DataTypes.STRING,
        name: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        FreezeTableName: true
    });
    return User;
};
// var User = sequelize.define(
//     "user", 
//     {
//     routeName: Sequelize.STRING,
//     name: Sequelize.STRING,
//     userName: Sequelize.STRING,
//     password: Sequelize.STRING
// }, {
//     FreezeTableName: true
// });

// User.sync();

// module.exports = User;