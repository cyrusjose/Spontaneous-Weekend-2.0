// global variables
const apikey = "eee323892b3fbbbde9d9b268625c3602";
const randomBtn = $(".random-btn");
const resName = $(".restaurant-name");
const resPrice = $(".restaurant-price");
const resAddress = $(".restaurant-address");
const resCuisine = $(".restaurant-cuisine");
const imgDiv = $(".imgDiv");
const callBtn = $(".call-btn");
const webBtn = $(".web-btn");
const results = $(".results-container");
const webLink = $(".webLink");
let index = 0;

// food stock photo arrays
const foodArr = [
  "https://tinyurl.com/yd3h2s4t",
  "https://tinyurl.com/yd8sug2v",
  "https://tinyurl.com/y7g82qfm",
  "https://tinyurl.com/ybmafd4l",
  "https://tinyurl.com/ycuq66uz",
  "https://tinyurl.com/yb2r7953",
  "https://tinyurl.com/yawq2sxu",
  "https://tinyurl.com/y7j2l762",
  "https://tinyurl.com/ycjluapb",
  "https://tinyurl.com/y7n6qllo",
  "https://tinyurl.com/y8eph3n6",
  "https://tinyurl.com/y92apn2p",
  "https://tinyurl.com/ybb4e57c",
  "https://tinyurl.com/y8nvt52u",
  "https://tinyurl.com/y89rmvp6",
  "https://tinyurl.com/y8x9uhjd",
  "https://tinyurl.com/ydd6ujrk"
];

$(document).ready(() => {
  // hide buttons and results container
  callBtn.hide();
  webBtn.hide();
  results.hide();

  $(".sidenav").sidenav();

  randomBtn.on("click", () => {
    // get current position of user
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  });
});

// ask user if we can get their location: Yes-> successCallBack, No -> errorCallBack
const successCallBack = position => {
  const lattitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // put in necessary info in settings
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://developers.zomato.com/api/v2.1/search?lat=" +
      lattitude +
      "&lon=" +
      longitude +
      "&sort=cost",
    method: "GET",
    headers: {
      "user-key": apikey
    }
  };

  // show buttons and results container
  callBtn.show();
  webBtn.show();
  results.show();

  // grab restaurant info from zomato
  $.getJSON(settings, data => {
    const restaurants = data.restaurants.length;

    // randomize restaurant choice
    i = Math.floor(Math.random() * restaurants);

    // display restaurant info
    resName.text(data.restaurants[i].restaurant.name);
    resAddress.text(
      "Address: " + data.restaurants[i].restaurant.location.address
    );
    resPrice.text("Price range: " + data.restaurants[i].restaurant.price_range);
    resCuisine.text("Cuisine: " + data.restaurants[i].restaurant.cuisines);

    // append restaurant img
    index = Math.floor(Math.random() * foodArr.length);
    const imgSrc = foodArr[index];
    const image = $("<img>").attr("src", imgSrc);
    image.attr("class", "food-img");
    imgDiv.empty().append(image);

    // display restaurant web link
    const link = data.restaurants[i].restaurant.url;
    webLink.attr("href", link);
    webLink.attr("target", "_blank");

    // display restaurant phone number
    callBtn.click(() => {
      callBtn.text(data.restaurants[i].restaurant.phone_numbers);
    });
  });
};

// if user does not allow browser to access location
const errorCallBack = error => {
  console.error(error);
};
