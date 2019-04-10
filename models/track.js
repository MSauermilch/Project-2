module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("Track", {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    db_date: DataTypes.DATE,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    day_name: DataTypes.STRING,
    event: DataTypes.STRING
    //name: DataTypes.STRING,
    //description: DataTypes.TEXT,
    
  });
  return Track;
};
