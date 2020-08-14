// function for mobile responsive side bar
$(document).ready(() => {
  $(".sidenav").sidenav();

  $(".genButton").on("click", () => {
    // get current position of user
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  });
});

const successCallBack = position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const APIkey = "200806826-197a532cac60dc5762dd92c55ef817db";
  const maxDistance = 10;
  const maxResults = 20;
  const APIurl =
    "https://www.hikingproject.com/data/get-trails?lat=" +
    lat +
    "&lon=" +
    lon +
    "&maxDistance=" +
    maxDistance +
    "&key=" +
    APIkey +
    "&maxResults=" +
    maxResults +
    "";

  const settings = {
    url: APIurl,
    method: "GET"
  };

  $.ajax(settings)
    .done(response => {
      console.log(response);
      // get random trails index
      const rand = Math.floor(Math.random() * response.trails.length);
      // create variable for found random trail
      const foundTrail = response.trails[rand];

      //create variables for trial details
      const trailName = foundTrail.name;
      const trailLoc = foundTrail.location;
      const traildifficulty = foundTrail.difficulty;
      const traildistance = foundTrail.length;
      const trailImage = foundTrail.imgSmall;
      const trialLink = foundTrail.url;

      //   Add class to main div
      $(".main").addClass("body-container");

      //   Add attribute for poster.
      $(".trail-img").attr("src", trailImage);
      if (trailImage === "") {
        $(".trail-img").attr("src", "../style/images/trail1.jpg");
      }

      //Remove hide classes
      $(".info-area").removeClass("hide");
      $(".title").removeClass("hide");

      $(".title").text(trailName);
      $(".trail-location").text(trailLoc);
      $(".trail-difficulty").text(traildifficulty);
      $(".trail-distance").text(traildistance);
      $(".trail-link").attr("href", trialLink);
    })
    .catch(err => {
      console.log(err);
    });
};

const errorCallBack = error => {
  console.error(error);
};
