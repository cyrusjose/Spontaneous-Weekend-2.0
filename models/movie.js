module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    release: DataTypes.STRING,
    homepage: DataTypes.STRING
  });

  Movie.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Movie.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  console.log(Movie);
  return Movie;
};
