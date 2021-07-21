function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;

theDate = new Date();
if (theDate.getDay() == 5) {
    document.querySelector("#banner").style.display = "block";
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}




/***************CurrentWeather***************/
const town = document.getElementById("townID");

let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.7757&lon=114.7042&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";

fetch(apiURL)
    .then ((response) => response.json())
    .then ((jsObject) => {
        let temperature = Math.round(jsObject.current.temp);
        let wind = Math.round(jsObject.current.wind_speed);

        document.getElementById("current").textContent = jsObject.weather[0].main;
        document.getElementById("temp").textContent = temperature;
        document.getElementById("humidity").textContent = jsObject.current.humidity;
        document.getElementById("wind").textContent = wind;
    });


/***************WindChill***************/
let t_string = document.getElementById("temp").innerHTML;
let s_string = document.getElementById("wind").innerHTML;

let t = parseFloat(t_string);
let s = parseFloat(s_string);

function chill(t, s) {
    let windc = (Math.round(35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16)))));
    return windc;
}

if (s > 3 && t <= 50) {
    document.getElementById("windchill").innerHTML = chill(t, s);
}
else {
    document.getElementById('windchill').innerHTML = "N/A";
}