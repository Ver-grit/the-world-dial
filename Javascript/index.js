function updateCityTime(cityId, cityTimeZone) {
    const cityElement = document.getElementById(cityId);
    const cityDateElement = cityElement.querySelector(".date");
    const cityTimeElement = cityElement.querySelector(".time");
    const cityTime = moment().tz(cityTimeZone);
  
    cityDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
  
  function updateTimeDial() {
    updateCityTime("los-angeles", "America/Los_Angeles");
    updateCityTime("sydney", "Australia/Sydney");
    updateCityTime("london", "Europe/London");
    updateCityTime("new-york", "America/New_York");
    updateCityTime("auckland", "Pacific/Auckland");
    updateCityTime("tokyo", "Asia/Tokyo");
    updateCityTime("berlin", "Europe/Berlin");
    updateCityTime("chicago", "America/Chicago");
    updateCityTime("singapore", "Asia/Singapore");
  }
  
  function updateLocalTime() {
    const localTimeElement = document.querySelector("#local-time");
    localTimeElement.style.display = "block";
  
    const localTime = moment();
    localTimeElement.innerHTML = `
          <h2>Your Local Time</h2>
          <div class="date">${localTime.format("MMMM Do YYYY")}</div>
          <div class="time">${localTime.format(
            "h:mm:ss"
          )} <small>${localTime.format("A")}</small></div>
      `;
  }
  
  function showCurrentTime() {
    updateLocalTime();
    document.getElementById("cities-dial").style.display = "none";
    document.getElementById("back-button").style.display = "inline";
  }
  
  function goBack() {
    document.getElementById("local-time").style.display = "none";
    document.getElementById("cities-dial").style.display = "block";
    document.getElementById("back-button").style.display = "none";
  }
  
  function displayCityTime(cityTimeZone) {
  
    document.querySelectorAll(".city").forEach((city) => {
      city.style.display = "none";
    });
  
  
    const cityId = cityTimeZone.split("/")[1].toLowerCase();
    const cityElement = document.getElementById(cityId);
    if (cityElement) {
      cityElement.style.display = "block";
  
      updateCityTime(cityId, cityTimeZone);
  
  
      document.getElementById("back-button").style.display = "inline";
    }
  }
  
  document
    .getElementById("show-current-time")
    .addEventListener("click", showCurrentTime);
  document.getElementById("back-button").addEventListener("click", goBack);
  
  
  document.getElementById("city-dial").addEventListener("change", function (e) {
    const selectedCity = e.target.value;
    if (selectedCity) {
      displayCityTime(selectedCity);
    }
  });
  
  
  updateTimeDial();
  setInterval(updateTimeDial, 1000);
  