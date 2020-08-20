const { Sequelize } = require("sequelize/types");

module.exports = function(sequelize) {
  const Movie = sequelize.define("Movie", {
    title: Sequelize.STRING,
    release: Sequelize.STRING,
    homepage: Sequelize.STRING
  });

  Movie.associate = function(models) {
    // We're saying that a movie favorite should belong to a user
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  console.log(Movie);
  return Movie;
};
