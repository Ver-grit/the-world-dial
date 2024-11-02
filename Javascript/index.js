function updateTimeDial() {
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");
  
      sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");
  
      londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
      londonTimeElement.innerHTML = londonTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");
  
      newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let aucklandElement = document.querySelector("#auckland");
    if (aucklandElement) {
      let aucklandDateElement = aucklandElement.querySelector(".date");
      let aucklandTimeElement = aucklandElement.querySelector(".time");
      let aucklandTime = moment().tz("Pacific/Auckland");
  
      aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
      aucklandTimeElement.innerHTML = aucklandTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
      let tokyoDateElement = tokyoElement.querySelector(".date");
      let tokyoTimeElement = tokyoElement.querySelector(".time");
      let tokyoTime = moment().tz("Asia/Tokyo");
  
      tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
      tokyoTimeElement.innerHTML = tokyoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let berlinElement = document.querySelector("#berlin");
    if (berlinElement) {
      let berlinDateElement = berlinElement.querySelector(".date");
      let berlinTimeElement = berlinElement.querySelector(".time");
      let berlinTime = moment().tz("Europe/Berlin");
  
      berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
      berlinTimeElement.innerHTML = berlinTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    let chicagoElement = document.querySelector("#chicago");
    if (chicagoElement) {
      let chicagoDateElement = chicagoElement.querySelector(".date");
      let chicagoTimeElement = chicagoElement.querySelector(".time");
      let chicagoTime = moment().tz("America/Chicago");
  
      chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
      chicagoTimeElement.innerHTML = chicagoTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // Singapore
    let singaporeElement = document.querySelector("#singapore");
    if (singaporeElement) {
      let singaporeDateElement = singaporeElement.querySelector(".date");
      let singaporeTimeElement = singaporeElement.querySelector(".time");
      let singaporeTime = moment().tz("Asia/Singapore");
  
      singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
      singaporeTimeElement.innerHTML = singaporeTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
  
  function updateCityDial(event) {
    let cityTimeZone = event.target.value;
    if (!cityTimeZone) return;
  
    let cityName = cityTimeZone.split("/").pop().replace("_", " ");
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities-dial");
  
    citiesElement.innerHTML = "";
  
    citiesElement.innerHTML += `
          <div class="city">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
        `;
  }
  
  updateTimeDial();
  setInterval(updateTimeDial, 1000);
  
  let citiesSelectElementDial = document.querySelector("#city-dial");
  citiesSelectElementDial.addEventListener("change", updateCityDial);
  