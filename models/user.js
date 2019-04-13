// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define(
        "user", 
        {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        FreezeTableName: true
    });

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        this.hasMany(models.pixel, {
            onDelete: "cascade"
        });
    };

    // User.sync({
    //     force: true
    // });
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