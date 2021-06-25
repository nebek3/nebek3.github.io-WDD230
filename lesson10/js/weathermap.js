const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";

fetch(apiURL)
    .then ((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);
        document.getElementById("current").textContent = jsObject.weather[0].main;
        document.getElementById("temp").textContent = jsObject.main.temp;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("wind").textContent = jsObject.wind.speed;
    });

const apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";

fetch(apiForecast)
    .then ((response) => response.json())
    .then ((jsObject) => {
        console.log(jsObject);

        document.getElementById("day1").textContent = jsObject.list[1].dt_txt;
        let imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[1].weather[0].icon + ".png";
        let desc = jsObject.list[1].weather[0].description;
            document.getElementById("day1imgsrc").textContent = imagesrc;
            document.getElementById("day1img").setAttribute("src", imagesrc);
            document.getElementById("day1img").setAttribute("alt", desc);
        document.getElementById("day1temp").textContent = jsObject.list[1].main.temp;

        document.getElementById("day2").textContent = jsObject.list[2].dt_txt;
        imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[2].weather[0].icon + ".png";
        desc = jsObject.list[2].weather[0].description;
            document.getElementById("day2imgsrc").textContent = imagesrc;
            document.getElementById("day2img").setAttribute("src", imagesrc);
            document.getElementById("day2img").setAttribute("alt", desc);
        document.getElementById("day2temp").textContent = jsObject.list[2].main.temp;

        document.getElementById("day3").textContent = jsObject.list[3].dt_txt;
        imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[3].weather[0].icon + ".png";
        desc = jsObject.list[3].weather[0].description;
            document.getElementById("day3imgsrc").textContent = imagesrc;
            document.getElementById("day3img").setAttribute("src", imagesrc);
            document.getElementById("day3img").setAttribute("alt", desc);
        document.getElementById("day3temp").textContent = jsObject.list[3].main.temp;

        document.getElementById("day4").textContent = jsObject.list[4].dt_txt;
        imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[4].weather[0].icon + ".png";
        desc = jsObject.list[4].weather[0].description;
            document.getElementById("day4imgsrc").textContent = imagesrc;
            document.getElementById("day4img").setAttribute("src", imagesrc);
            document.getElementById("day4img").setAttribute("alt", desc);
        document.getElementById("day4temp").textContent = jsObject.list[4].main.temp;

        document.getElementById("day5").textContent = jsObject.list[5].dt_txt;
        imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[5].weather[0].icon + ".png";
        desc = jsObject.list[5].weather[0].description;
            document.getElementById("day5imgsrc").textContent = imagesrc;
            document.getElementById("day5img").setAttribute("src", imagesrc);
            document.getElementById("day5img").setAttribute("alt", desc);
        document.getElementById("day5temp").textContent = jsObject.list[5].main.temp;
    })