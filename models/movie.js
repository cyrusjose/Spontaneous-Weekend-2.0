module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    release: DataTypes.STRING,
    homepage: DataTypes.STRING
  });

  Movie.associate = function(models) {
    // We're saying that a movie favorite should belong to a user
    Movie.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  console.log(Movie);
  return Movie;
};
