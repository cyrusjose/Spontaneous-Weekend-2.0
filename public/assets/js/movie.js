// const movies = []

// {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     },
//     {
//       "id": 10402,
//       "name": "Music"
//     },
//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     },
//     {
//       "id": 37,
//       "name": "Western"
//     }
//   ]
// }
// Basic url
//http://api.themoviedb.org/3/discover/movie?api_key=55e5e1d7ebed7a010f996dca966df720&language=en-US

$(document).ready(() => {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  let userGenreChoice = "";

  $("#action").on("click", event => {
    event.preventDefault();
    userGenreChoice = "28";
  });

  $("#adventure").on("click", event => {
    event.preventDefault();
    userGenreChoice = "12";
  });

  $(document).on("click", ".generateMovie", event => {
    // Prevent default function
    event.preventDefault();

    $(".mainHeader").addClass("hide");
    $(".secondHeader").removeClass("hide");

    // with_genres=18&sort_by=vote_average.desc&vote_count.gte=10
    // const userGenreChoice = $(this).attr("data-value");
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

      const randomElement =
        movieData[Math.floor(Math.random() * movieData.length)];
      console.log(randomElement);
      //   Create variables.
      // const posterImage = response.Poster;
      // const title = response.Title;
      // const synopsis = response.Plot;
      // const rating = response.Rated;
      // const runTime = response.Runtime;
      // const genre = response.Genre;
      // const releaseDate = response.Released;

      // //   Add attribute for poster.
      // $(".poster").attr("src", posterImage);
      // //   Add class to main div
      // $(".main").addClass("body-container");
      // //   Display content.
      // $(".movieInfo").removeClass("hide");
      // //   Show title
      // $(".title").removeClass("hide");
      // $(".title").text(title);
      // //   Show description
      // $(".description").text(synopsis);
      // //   Show release date
      // $(".release").text(releaseDate);
      // //   Show TV rating
      // $(".rating").text(rating);
      // //   Show Run Time
      // $(".runTime").text(runTime);
      // //   Show Genre
      // $(".genre").text(genre);
    });
  });
});
