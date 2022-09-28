//5-day forecast
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[date.getMonth()];

  date = date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  return `<b>${day}</b> <br/> <small>${month}/${date}</small>`;
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector(".forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
        <div class="col-sm mb-3 ">
        <div class="card text-center shadow-sm">
          <div class="card-body text-center">  
            <p class="card-text">
            <ul>
            <li><span id="forecast-dates" class="text-muted"><small>${formatDay(
              forecastDay.dt
            )}</small></span></li>
            
            <li><img
            src="http://openweathermap.org/img/wn/${
              forecastDay.weather[0].icon
            }@2x.png"
            alt=""
            width="50"
          /></li>

       <li><span id="forecast-temperatures" class="text-dark fw-bolder">
          <span class="temperature-max"> ${Math.round(
            forecastDay.temp.day
          )}° </span> / <span class="temperature-min"> ${Math.round(
          forecastDay.temp.night
        )}°</span >
          </span >
          </li >
          <li><span id="forecast-wind" class="text-muted"><small>${
            Math.round(forecastDay.wind_speed * 10.0) / 10.0
          } km/h</small></span></li>
          </ul>
      </p>
          </div>
          </div>
        </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

//Current Date
function currentDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = now.getDate();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  return `${hours}:${minutes} <br/> ${day}, ${month} ${date}`;
}

let todayDate = document.querySelector("#today-date");
let now = new Date();
todayDate.innerHTML = currentDate(now);

//Search location

function showForecast(response) {
  let link = document.querySelector("#temperature");
  celsiusTemperature = response.data.main.temp;
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed * 10.0) / 10.0;

  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "8cd9be374c7c96c39a9fe73f4bf2f055";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");

//Current location

function currentCity(current) {
  let apiKey = "1c06f739f2cb34e0ad195417aa6a3ffb";
  let lat = current.coords.latitude;
  let lon = current.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showForecast);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentCity);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
