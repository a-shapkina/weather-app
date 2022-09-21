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
  let link = document.querySelector(".temperature-c");
  celsiusTemperature = now.data.main.temp;
  document.querySelector("h1").innerHTML = now.data.name;
  document.querySelector(".temperature-c").innerHTML = Math.round(
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

//Temp Conversion
//F
function switchTempF(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c");
  link.innerHTML = Math.round((celsiusTemperature * 9) / 5 + 32);
}
let temp = document.querySelector("#event-link-f");
temp.addEventListener("click", switchTempF);

//C
function switchTempC(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c");
  link.innerHTML = Math.round(celsiusTemperature);
}
temp = document.querySelector("#event-link-c");
temp.addEventListener("click", switchTempC);

let celsiusTemperature = null;

//5-day forecast dates

function fiveDayDates() {
  return fiveDayDates;
}

let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 1);
date = futureDate.getDate();
months = [
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
month = months[futureDate.getMonth()];
let cardTitle = document.querySelector(".card-title1");
cardTitle.innerHTML = `${month}/${date}`;

futureDate.setDate(futureDate.getDate() + 1);
date = futureDate.getDate();
let cardTitle2 = document.querySelector(".card-title2");
cardTitle2.innerHTML = `${month}/${date}`;

futureDate.setDate(futureDate.getDate() + 1);
date = futureDate.getDate();
let cardTitle3 = document.querySelector(".card-title3");
cardTitle3.innerHTML = `${month}/${date}`;

futureDate.setDate(futureDate.getDate() + 1);
date = futureDate.getDate();
let cardTitle4 = document.querySelector(".card-title4");
cardTitle4.innerHTML = `${month}/${date}`;

futureDate.setDate(futureDate.getDate() + 1);
date = futureDate.getDate();
let cardTitle5 = document.querySelector(".card-title5");
cardTitle5.innerHTML = `${month}/${date}`;

//5-day forecast temps

//1
function switchTempF1(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c1");
  link.innerHTML = Math.round((23 * 9) / 5 + 32);
}
temp = document.querySelector("#event-link-f1");
temp.addEventListener("click", switchTempF1);

function switchTempC1(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c1");
  link.innerHTML = 23;
}
temp = document.querySelector("#event-link-c1");
temp.addEventListener("click", switchTempC1);

//2
function switchTempF2(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c2");
  link.innerHTML = Math.round((23 * 9) / 5 + 32);
}
temp = document.querySelector("#event-link-f2");
temp.addEventListener("click", switchTempF2);

function switchTempC2(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c2");
  link.innerHTML = 23;
}
temp = document.querySelector("#event-link-c2");
temp.addEventListener("click", switchTempC2);

//3
function switchTempF3(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c3");
  link.innerHTML = Math.round((23 * 9) / 5 + 32);
}
temp = document.querySelector("#event-link-f3");
temp.addEventListener("click", switchTempF3);

function switchTempC3(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c3");
  link.innerHTML = 23;
}
temp = document.querySelector("#event-link-c3");
temp.addEventListener("click", switchTempC3);

//4
function switchTempF4(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c4");
  link.innerHTML = Math.round((23 * 9) / 5 + 32);
}
temp = document.querySelector("#event-link-f4");
temp.addEventListener("click", switchTempF4);

function switchTempC4(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c4");
  link.innerHTML = 23;
}
temp = document.querySelector("#event-link-c4");
temp.addEventListener("click", switchTempC4);

//5
function switchTempF5(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c5");
  link.innerHTML = Math.round((23 * 9) / 5 + 32);
}
temp = document.querySelector("#event-link-f5");
temp.addEventListener("click", switchTempF5);

function switchTempC5(event) {
  event.preventDefault();
  let link = document.querySelector(".temperature-c5");
  link.innerHTML = 23;
}
temp = document.querySelector("#event-link-c5");
temp.addEventListener("click", switchTempC5);

search("New York");
