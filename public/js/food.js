// global variables
const apikey = "d0db9928cbmshf912bd146991184p1e2686jsn614886281a85";
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
let cityName;
let locationId;


$(document).ready(() => {
  // hide buttons and results container
  callBtn.hide();
  webBtn.hide();
  results.hide();

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
  hoverFunction();

  randomBtn.on("click", () => {
    // get current position of user
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  });
});

// ask user if we can get their location: Yes-> successCallBack, No -> errorCallBack
// ask user for city name
const successCallBack = position => {
  // const lattitude = position.coords.latitude;
  // const longitude = position.coords.longitude;

const settings1 = {
  "async": true,
	"crossDomain": true,
	"url": "https://worldwide-restaurants.p.rapidapi.com/typeahead",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
		"x-rapidapi-key": "d0db9928cbmshf912bd146991184p1e2686jsn614886281a85",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"language": "en_US",
		"q": "Irvine"
	}
}

  // put in necessary info in settings
  const settings2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://worldwide-restaurants.p.rapidapi.com/search",
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
      "x-rapidapi-key": "d0db9928cbmshf912bd146991184p1e2686jsn614886281a85",
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "limit": "30",
      "language": "en_US",
      "location_id": "297704",
      "currency": "USD"
    }
  };

  // get typehead result back and get location id
  $.getJSON(settings1, data1 => {
    console.log(data1);
  });

  $.ajax(settings1).done(function (response) {
    console.log(response);
  });




  // show buttons and results container
  callBtn.show();
  webBtn.show();
  results.show();

  // grab restaurant info from zomato
  $.getJSON(settings2, data2 => {
    const restaurants = data2.restaurants.length;

    // randomize restaurant choice
    i = Math.floor(Math.random() * restaurants);

    // display restaurant info
    resName.text(data2.restaurants[i].restaurant.name);
    resAddress.text(
      "Address: " + data2.restaurants[i].restaurant.location.address
    );
    resPrice.text("Price range: " + data2.restaurants[i].restaurant.price_range);
    resCuisine.text("Cuisine: " + data2.restaurants[i].restaurant.cuisines);

    // append restaurant img
    index = Math.floor(Math.random() * foodArr.length);
    const imgSrc = foodArr[index];
    const image = $("<img>").attr("src", imgSrc);
    image.attr("class", "food-img");
    imgDiv.empty().append(image);

    // display restaurant web link
    const link = data2.restaurants[i].restaurant.url;
    webLink.attr("href", link);
    webLink.attr("target", "_blank");

    // display restaurant phone number
    callBtn.click(() => {
      callBtn.text(data2.restaurants[i].restaurant.phone_numbers);
    });
  });
};

// if user does not allow browser to access location
const errorCallBack = error => {
  console.error(error);
}
