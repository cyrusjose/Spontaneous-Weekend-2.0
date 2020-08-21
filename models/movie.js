module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    title: DataTypes.STRING,
    release: DataTypes.STRING,
    homepage: DataTypes.STRING
  });

  //
  console.log(Movie);
  return Movie;
};
