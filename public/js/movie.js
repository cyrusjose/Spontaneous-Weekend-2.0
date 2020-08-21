$(document).ready(() => {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  const hoverFunction = () => {
    $(".hover1").mouseover(() => {
      $(".hover1").addClass("active");
    });
    $(".hover1").mouseout(() => {
      $(".hover1").removeClass("active");
    });
    $(".hover2").mouseover(() => {
      $(".hover2").addClass("active");
    });
    $(".hover2").mouseout(() => {
      $(".hover2").removeClass("active");
    });
    $(".hover3").mouseover(() => {
      $(".hover3").addClass("active");
    });
    $(".hover3").mouseout(() => {
      $(".hover3").removeClass("active");
    });
    $(".hover4").mouseover(() => {
      $(".hover4").addClass("active");
    });
    $(".hover4").mouseout(() => {
      $(".hover4").removeClass("active");
    });
  };
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
      console.log(randomMovie.id, "This is the movie's id");

      // Second ajax call for additional data
      const queryMoreURL =
        "https://api.themoviedb.org/3/movie/" +
        randomMovie.id +
        "?api_key=55e5e1d7ebed7a010f996dca966df720&language=en-US&append_to_response=release_dates";

      $.ajax({
        url: queryMoreURL,
        method: "GET"
      }).then(moreResponse => {
        // ON click the movie will be shown
        console.log(moreResponse);
        // const moreData = moreResponse;
        //   Create variables.
        const posterImage = randomMovie.poster_path;
        const title = randomMovie.title;
        const synopsis = randomMovie.overview;
        // const rating = moreData.;
        const runTime = moreResponse.runtime;
        // const genre = moreResponse.genres.name;
        const release = randomMovie.release_date;
        console.log(runTime, "run time of movie");
        // eslint-disable-next-line prettier/prettier
        const genreNames = [];
        for (let i = 0; i < moreResponse.genres.length; i++) {
          genreNames.push(moreResponse.genres[i].name);
        }
        console.log(genreNames, "Genre Names");
        const homepage = moreResponse.homepage;
        //   Add attribute for poster.
        $(".poster").attr(
          "src",
          "https://image.tmdb.org/t/p/w500" + posterImage
        );
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
        $(".release").text(release);
        //   Show TV rating
        // $(".rating").text(rating);
        // //   Show Run Time
        $(".runTime").text(runTime + " minutes");
        //   Show Genres
        const newHTML = [];
        $.each(genreNames, (index, value) => {
          newHTML.push("<span class='genre-span'>" + value + "</span>");
        });
        $(".genre").html(newHTML.join(""));
        $(".homepage").attr("href", homepage);
        // const favMovie = {
        //   title: title,
        // date: releaseDate,
        // homepage: homepage
        // };
        // $("#favorite").on("click", favMovie => {
        // send to api route

        // When user clicks favorite button
        // $("#favorite").on("click", function(event) {
        //   event.preventDefault();

        //   // Make a newChirp object
        //   var newChirp = {
        //     author: $("#author")
        //       .val()
        //       .trim(),
        //     body: $("#chirp-box")
        //       .val()
        //       .trim(),
        //     created_at: moment().format("YYYY-MM-DD HH:mm:ss")
        //   };

        //   console.log(newChirp);

        //   // Send an AJAX POST-request with jQuery
        //   $.post("/api/new", newChirp)
        //     // On success, run the following code
        //     .then(function() {
        //       var row = $("<div>");
        //       row.addClass("chirp");

        //       row.append("<p>" + newChirp.author + " chirped: </p>");
        //       row.append("<p>" + newChirp.body + "</p>");
        //       row.append(
        //         "<p>At " +
        //           moment(newChirp.created_at).format("h:mma on dddd") +
        //           "</p>"
        //       );

        //       $("#chirp-area").prepend(row);
        //     });

        //   // Empty each input box by replacing the value with an empty string
        //   $("#author").val("");
        //   $("#chirp-box").val("");
        // });
      });
    });
  });
  hoverFunction();
});
