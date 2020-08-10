//digital clock

let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${month} ${date} ${year} @ ${hours}:${minutes}`;

//change location in the h2
function changeCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#userCity");
  inputCity = inputCity.value;
  inputCity = inputCity.trim();

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${inputCity}`;

  let apiKey = "f03d3ee7b6dc3bebf6389c835fdd60f5";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`
    )
    .then(function getTemp(response) {
      console.log(response.data.main.temp);
      let temp = response.data.main.temp;
      temp = Math.round(temp);
      console.log(temp);

      let displayTemp = document.querySelector("#nowTemp");
      displayTemp.innerHTML = `${temp}`;
    });
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", changeCity);

//display city temp

// CURRENT LOCATION NOTE - CURRENT LOCATION BUTTON NOT WORKING

function position(positon) {
  position.preventDefault();
  navigator.geolocation.getCurrentPosition(position);

  let apiKey = "f03d3ee7b6dc3bebf6389c835fdd60f5";
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(`${lat} and ${long}`);

  //log the current temperature where you are
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    )
    .then(function getTemp(response) {
      console.log(response.data.main.temp);
      let temp = response.data.main.temp;
      console.log(temp);

      let deg = document.queryselector("#nowTemp");
      deg.innerHTML = `${temp}`;

      let h2 = document.querySelector("h2");
      h2.innerHTML = `${long} longitude and ${lat} latitude`;
    });
}

let geolocate = document.querySelector("#currentLocationButton");
geolocate.addEventListener("submit", position);
