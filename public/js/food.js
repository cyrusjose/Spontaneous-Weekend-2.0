// Html variables
const resultContainer = $(".resultsContainer");
const cityName = $("#cityName");
const randomBtn = $(".random-btn");
const nameRes = $(".restaurantName");
// const description = $(".description");
const cuisine = $(".cuisine");
const price = $(".price");
const address = $(".address");
const callBtn = $(".callBtn");
const webBtn = $(".webLink");
const imgDiv = $(".imgDiv");
const load = $(".load");

// Api variables
const apikey = "d0db9928cbmshf912bd146991184p1e2686jsn614886281a85";
let locationId = 0;

// Random variables
let i = 0;

$(document).ready(() => {
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
    $(".hover5").mouseover(() => {
      $(".hover5").addClass("active");
    });
    $(".hover5").mouseout(() => {
      $(".hover5").removeClass("active");
    });
    $(".hover6").mouseover(() => {
      $(".hover6").addClass("active");
    });
    $(".hover6").mouseout(() => {
      $(".hover6").removeClass("active");
    });
  };
  hoverFunction();

  randomBtn.click(() => {
    //Save user input city name
    const city = cityName.val();

    //display loading
    load.show();
    resultContainer.hide();
    //Settings for restaurant ajax call #1: location id
    const settings1 = {
      async: true,
      crossDomain: true,
      url: "https://worldwide-restaurants.p.rapidapi.com/typeahead",
      method: "POST",
      headers: {
        "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
        "x-rapidapi-key": apikey,
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        language: "en_US",
        q: city
      }
    };

    //Run first api ajax call for location id
    $.ajax(settings1)
      .done(response1 => {
        locationId = response1.results.data[0].result_object.location_id;
      })
      .then(() => {
        //Settings for restaurant ajax call #2: restaurant results
        const settings2 = {
          async: true,
          crossDomain: true,
          url: "https://worldwide-restaurants.p.rapidapi.com/search",
          method: "POST",
          headers: {
            "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
            "x-rapidapi-key": apikey,
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            limit: "10",
            language: "en_US",
            location_id: locationId,
            currency: "USD"
          }
        };

        // Run second ajax call for restaurant results
        $.ajax(settings2, locationId).done(response2 => {
          const res = response2.results.data.length;

          // Randomization
          i = Math.floor(Math.random() * res);

          const resName = response2.results.data[i].name;
          const resPrice = response2.results.data[i].price;
          const resAddress = response2.results.data[i].address;
          const resImg = response2.results.data[i].photo.images.medium.url;
          const resPhone = response2.results.data[i].phone;
          const resWeb = response2.results.data[i].website;

          // Append restaurant info onto html
          nameRes.text(resName);
          price.text("Price: " + resPrice);
          address.text("Address: " + resAddress);

          // Appending restaurant images
          const image = $("<img>").attr("src", resImg);
          image.attr("class", "food-img");
          imgDiv.empty().append(image);

          // Linking restaurant webpage
          webBtn.attr("href", resWeb);
          webBtn.attr("target", "_blank");

          callBtn.text("Call");


          // Link restaurant phone number function
          callBtn.on("click", () => {
            callBtn.text(resPhone);
          })
          // callBtn.attr(href, "tel:" + resPhone);
          // <a href="tel:123-456-7890">123-456-7890</a>
        });

        // Show results for restaurant info after its been generated
        resultContainer.show();
        load.hide();
      });
  });
});
