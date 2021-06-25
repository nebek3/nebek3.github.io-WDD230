const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";

fetch(apiURL)
    .then ((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);
        document.getElementById("current").textContent = jsObject.weather[0].description;
        document.getElementById("temp").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("wind").textContent = jsObject.wind.speed;
    });

