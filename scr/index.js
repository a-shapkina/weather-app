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
  ];
  let month = months[now.getMonth()];

  return `${hours}:${minutes} </br> ${day}, ${month} ${date}`;
}

let todayDate = document.querySelector(".today-date");
let now = new Date();
todayDate.innerHTML = currentDate(now);

//Search location

function showForecast(now) {
  let link = document.querySelector(".temperature");
  celsiusTemperature = now.data.main.temp;
  document.querySelector("h1").innerHTML = now.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    now.data.main.temp
  );
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${now.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", now.data.weather[0].description);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = now.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = now.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(now.data.wind.speed);
}

function search(city) {
  let apiKey = "1c06f739f2cb34e0ad195417aa6a3ffb";
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

search("New York");
