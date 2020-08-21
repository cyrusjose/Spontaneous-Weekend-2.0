$(document).ready(() => {
  // Favorites container holds all of our favorites
  const favContainer = $(".favorites-container");
  const movieCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleMovieDelete);

  // Variable to hold our favorite movies
  let movies;
  let userId;

  getMovies();

  // This function grabs movies from the database and updates the view
  function getMovies(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/movies" + userId, data => {
      console.log("Movies", data);
      movies = data;
      if (!movies || !movies.length) {
        displayEmpty(user);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete favorites
  function deleteFav(id) {
    $.ajax({
      method: "DELETE",
      url: "/movies/" + id
    }).then(() => {
      getMovies(movieCategorySelect.val());
    });
  }

  // InitializeRows
  // function initializeRows() {
  //   favContainer.empty();
  //   const moviesToAdd = [];
  //   for (var i = 0; i < movies.length; i++) {
  //     moviesToAdd.push(createNewRow(movies[i]));
  //   }
  //   favContainer.append(moviesToAdd);
  // };

  // // This function constructs a movie favorite's HTML
  // function createNewRow(movie) {
  //   const formattedDate = new Date(movie.createdAt);
  //   formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  //   const newMovieCard = $("<div>");
  //   newMovieCard.addClass("card");
  //   const newMovieCardHeading = $("<div>");
  //   newMovieCardHeading.addClass("card-header");
  //   const deleteBtn = $("<button>");
  //   deleteBtn.text("x");
  //   deleteBtn.addClass("delete btn btn-danger");
  //   newMovieUser.text("Written by: " + post.user.name);
  //   newMovieUser.css({
  //     float: "right",
  //     color: "blue",
  //     "margin-top":
  //     "-10px"
  //   });
  //   const newMovieCardBody = $("<div>");
  //   newMovieCardBody.addClass("card-body");
  //   const newMovieBody = $("<p>");
  //   newMovieTitle.text(movie.title + " ");
  //   newMovieBody.text(movie.body);
  //   newMovieDate.text(formattedDate);
  //   newMovieTitle.append(newMovieDate);
  //   newMovieCardHeading.append(deleteBtn);
  //   newMovieCardHeading.append(editBtn);
  //   newMovieCardHeading.append(newMovieTitle);
  //   newMovieCardHeading.append(newMovieuser);
  //   newMovieCardBody.append(newMovieBody);
  //   newMovieCard.append(newMovieCardHeading);
  //   newMovieCard.append(newMovieCardBody);
  //   newMovieCard.data("movie", movie);
  //   return newMovieCard;
  // };

  // This function figures out which favorite we want to delete and then calls deleteMovie
  function handleMovieDelete() {
    const currentMovie = $(this)
      .parent()
      .parent()
      .data("movie");
    deleteMovie(currentMovie.id);
  }
});
