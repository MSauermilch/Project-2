// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Pixel = sequelize.define(
    "pixel",
    {
      routeName: DataTypes.STRING,
      date: DataTypes.STRING,
      moodId: DataTypes.STRING,
      caffeine: DataTypes.INTEGER,
      alcohol: DataTypes.INTEGER,
      exercise: DataTypes.INTEGER,
      screen: DataTypes.INTEGER,
      sleep: DataTypes.INTEGER
    },
    {
      FreezeTableName: true
    }
  );

  Pixel.associate = function(models) {
    this.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Pixel.sync();
  return Pixel;
};

// var Pixel = sequelize.define(
//     "pixel",
//     {
//         routeName: Sequelize.STRING,
//         userId: Sequelize.STRING,
//         date: Sequelize.STRING,
//         moodId: Sequelize.STRING,
//         caffeine: Sequelize.INTEGER,
//         alcohol: Sequelize.INTEGER,
//         exercise: Sequelize.INTEGER,
//         screen: Sequelize.INTEGER,
//         sleep: Sequelize.INTEGER
//     },
//     {
//         FreezeTableName: true
//     }
// );

// Pixel.sync();

// module.exports = Pixel;
