$(document).ready(() => {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  let userGenreChoice = "";

  // Action button
  $("#action").on("click", event => {
    event.preventDefault();
    userGenreChoice = "28";
  });
  // Adventure button
  $("#adventure").on("click", event => {
    event.preventDefault();
    userGenreChoice = "12";
  });
  //Animation button
  $("#animation").on("click", event => {
    event.preventDefault();
    userGenreChoice = "16";
  });
  //Comedy button
  $("#comedy").on("click", event => {
    event.preventDefault();
    userGenreChoice = "35";
  });
  //Crime button
  $("#crime").on("click", event => {
    event.preventDefault();
    userGenreChoice = "80";
  });
  //Documentary button
  $("#documentary").on("click", event => {
    event.preventDefault();
    userGenreChoice = "99";
  });
  //Drama button
  $("#drama").on("click", event => {
    event.preventDefault();
    userGenreChoice = "18";
  });
  //Family button
  $("#family").on("click", event => {
    event.preventDefault();
    userGenreChoice = "10751";
  });
  //Fantasy button
  $("#fantasy").on("click", event => {
    event.preventDefault();
    userGenreChoice = "14";
  });
  //Horror button
  $("#horror").on("click", event => {
    event.preventDefault();
    userGenreChoice = "27";
  });
  //Music button
  $("#music").on("click", event => {
    event.preventDefault();
    userGenreChoice = "10402";
  });
  //Mystery button
  $("#mystery").on("click", event => {
    event.preventDefault();
    userGenreChoice = "9648";
  });
  //Science fiction button
  $("#romance").on("click", event => {
    event.preventDefault();
    userGenreChoice = "878";
  });
  //Thriller button
  $("#thriller").on("click", event => {
    event.preventDefault();
    userGenreChoice = "53";
  });
  //War button
  $("#war").on("click", event => {
    event.preventDefault();
    userGenreChoice = "10752";
  });
  //Western button
  $("#western").on("click", event => {
    event.preventDefault();
    userGenreChoice = "37";
  });
  $(document).on("click", ".generateMovie", event => {
    // Prevent default function
    event.preventDefault();

    $(".mainHeader").addClass("hide");
    $(".secondHeader").removeClass("hide");

    console.log(userGenreChoice);
    //  URL for ajax call
    const queryURL =
      "http://api.themoviedb.org/3/discover/movie?with_genres=" +
      userGenreChoice +
      "&api_key=55e5e1d7ebed7a010f996dca966df720&language=en-US";
    console.log(queryURL);
    //   Ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(response => {
      // ON click the movie will be shown
      console.log(response);
      const movieData = response.results;

      const randomMovie =
        movieData[Math.floor(Math.random() * movieData.length)];
      console.log(randomMovie);
      //   Create variables.
      const posterImage = randomMovie.poster_path;
      const title = randomMovie.title;
      const synopsis = randomMovie.overview;
      // const rating = response.Rated;
      // const runTime = randomMovie.runtime;
      // const genre = randomMovie.genres.name;
      const releaseDate = randomMovie.release_date;

      //   Add attribute for poster.
      $(".poster").attr("src", "https://image.tmdb.org/t/p/w500" + posterImage);
      //   Add class to main div
      $(".main").addClass("body-container");
      //   Display content
      $(".movieInfo").removeClass("hide");
      //   Show title
      $(".title").removeClass("hide");
      $(".title").text(title);
      //   Show description
      $(".description").text(synopsis);
      //   Show release date
      $(".release").text(releaseDate);
      //   Show TV rating
      // $(".rating").text(rating);
      // //   Show Run Time
      // $(".runTime").text(runTime);
      // //   Show Genre
      // $(".genre").text(genre);
    });
  });
});
