// Creates a "Restaurant" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    restaurant_name: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    price: DataTypes.STRING,
    address: DataTypes.STRING
  });

  Restaurant.associate = function(models) {
    // We're saying that a movie favorite should belong to a user
    Restaurant.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  console.log(Restaurant);
  return Restaurant;
};
