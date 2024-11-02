function updateTimeDial() {

    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
      let losAngelesDateElement = losAngelesElement.querySelector(".date");
      let losAngelesTimeElement = losAngelesElement.querySelector(".time");
      let losAngelesTime = moment().tz("America/Los_Angeles");
  
      losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
      losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }
  

    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
      let sydneyDateElement = sydneyElement.querySelector(".date");
      let sydneyTimeElement = sydneyElement.querySelector(".time");
      let sydneyTime = moment().tz("Australia/Sydney");
  
      sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
      sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
    }
  

    let londonElement = document.querySelector("#london");
    if (londonElement) {
      let londonDateElement = londonElement.querySelector(".date");
      let londonTimeElement = londonElement.querySelector(".time");
      let londonTime = moment().tz("Europe/London");
  
      londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
      londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    }
  

    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
      let newYorkDateElement = newYorkElement.querySelector(".date");
      let newYorkTimeElement = newYorkElement.querySelector(".time");
      let newYorkTime = moment().tz("America/New_York");
  
      newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
      newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
    }
  
    let aucklandElement = document.querySelector("#auckland");
    if (aucklandElement) {
      let aucklandDateElement = aucklandElement.querySelector(".date");
      let aucklandTimeElement = aucklandElement.querySelector(".time");
      let aucklandTime = moment().tz("Pacific/Auckland");
  
      aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
      aucklandTimeElement.innerHTML = aucklandTime.format("h:mm:ss [<small>]A[</small>]");
    }
  }
  
  function updateCityDial(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.split("/").pop().replace("_", " ");
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities-dial");
    citiesElement.innerHTML = `
      <div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  }
  
  updateTimeDial();
  setInterval(updateTimeDial, 1000);
  
  let citiesSelectElementDial = document.querySelector("#city-dial");
  citiesSelectElementDial.addEventListener("change", updateCityDial);
  