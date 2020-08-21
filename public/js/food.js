// Html variables
var resultContainer = $(".resultsContainer");
var cityName = $("#cityName");
var randomBtn = $(".random-btn");
var nameRes = $(".restaurantName");
var description = $(".description");
var cuisine = $(".cuisine");
var price = $(".price");
var address = $(".address");
var callBtn = $(".callBtn");
var webBtn = $(".webLink");
var imgDiv = $(".imgDiv");
var load = $(".load");

// Api variables
var apikey = "d0db9928cbmshf912bd146991184p1e2686jsn614886281a85";
var locationId = 0;

// Random variables
var i = 0;

$(document).ready(function(){
    //Hide result container
    resultContainer.hide();
    load.hide();

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

    randomBtn.click(function(){
        //Save user input city name
        var city = cityName.val();

        //display loading
        load.show();


        //Settings for restaurant ajax call #1: location id
        var settings1 = {
            "async": true,
            "crossDomain": true,
            "url": "https://worldwide-restaurants.p.rapidapi.com/typeahead",
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                "x-rapidapi-key": apikey,
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "language": "en_US",
                "q": city
            }
        }

        //Run first api ajax call for location id
        $.ajax(settings1).done(function (response1) {
            locationId = response1.results.data[0].result_object.location_id;

        }).then(function(){
        //Settings for restaurant ajax call #2: restaurant results
        var settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://worldwide-restaurants.p.rapidapi.com/search",
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                "x-rapidapi-key": apikey,
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "limit": "10",
                "language": "en_US",
                "location_id": locationId,
                "currency": "USD"
            }
        }

        // Run second ajax call for restaurant results
        $.ajax(settings2, locationId).done(function (response2) {
            const res = response2.results.data.length;

            // Randomization
            i = Math.floor(Math.random() * res);

            var resName = response2.results.data[i].name;
            var resCuisine = response2.results.data[i].cuisine[i];
            var resPrice = response2.results.data[i].price;
            var resAddress = response2.results.data[i].address;
            var resImg = response2.results.data[i].photo.images.medium.url;
            var resPhone = response2.results.data[i].phone;
            var resWeb = response2.results.data[i].website;         

            // Append restaurant info onto html
            nameRes.text(resName);
            cuisine.text("Cuisine: " + resCuisine);
            price.text("Price: " + resPrice);
            address.text("Adress: " + resAddress);

            // Appending restaurant images
            const image = $("<img>").attr("src", resImg);
            image.attr("class", "food-img");
            imgDiv.empty().append(image);

            // Linking restaurant webpage
            webBtn.attr("href", resWeb);
            webBtn.attr("target", "_blank");

            // Link restaurant phone number function
            

            });
          
            // Show results for restaurant info after its been generated
            resultContainer.show();
            load.hide();
          
        });
        });
    });







//     i = Math.floor(Math.random() * restaurants);

//     // display restaurant info
//     resName.text(data2.restaurants[i].restaurant.name);
//     resAddress.text(
//       "Address: " + data2.restaurants[i].restaurant.location.address
//     );
//     resPrice.text("Price range: " + data2.restaurants[i].restaurant.price_range);
//     resCuisine.text("Cuisine: " + data2.restaurants[i].restaurant.cuisines);

//     // append restaurant img
//     index = Math.floor(Math.random() * foodArr.length);
//     const imgSrc = foodArr[index];
//     const image = $("<img>").attr("src", imgSrc);
//     image.attr("class", "food-img");
//     imgDiv.empty().append(image);

//     // display restaurant web link
//     const link = data2.restaurants[i].restaurant.url;
//     webLink.attr("href", link);
//     webLink.attr("target", "_blank");

//     // display restaurant phone number
//     callBtn.click(() => {
//       callBtn.text(data2.restaurants[i].restaurant.phone_numbers);
//     });
// }
