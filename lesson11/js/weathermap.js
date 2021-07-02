const town = document.getElementById("townID");

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";

if(town.textContent == "Soda Springs") {
    apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";
}
else if(town.textContent == "Fish Haven") {
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0371544&lon=-111.39595&units=imperial&appid=bd3242f54c0077905efdbc2d08b08bc2";
};

fetch(apiURL)
    .then ((response) => response.json())
    .then ((jsObject) => {
        let temperature = Math.round(jsObject.main.temp);
        let wind = Math.round(jsObject.wind.speed);

        document.getElementById("current").textContent = jsObject.weather[0].main;
        document.getElementById("temp").textContent = temperature;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        document.getElementById("wind").textContent = wind;
    });



let apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=bd3242f54c0077905efdbc2d08b08bc2&units=imperial";

if(town.textContent == "Soda Springs") {
    apiForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=bd3242f54c0077905efdbc2d08b08bc2&units=imperial";
}
else if(town.textContent == "Fish Haven") {
    apiForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0371544&lon=-111.39595&appid=bd3242f54c0077905efdbc2d08b08bc2&units=imperial";
};

const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(apiForecast);
fetch(apiForecast)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let day = 0;
        let imagesrc = document.querySelectorAll('.eachDay .dayimgsrc');

        let daytemp = document.querySelectorAll('.eachDay .daytemp');
        console.log(daytemp);

        let desc = response.list[day].weather[0].description;

        let daySum = document.querySelectorAll('.eachDay .day');

        let list = response.list;

        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let d = new Date(item.dt * 1000);

                daySum[day].innerHTML = dayofWeek[d.getDay()];

                daytemp[day].innerHTML = Math.round(item.main.temp) + "&deg; F";

                let image = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
                    imagesrc[day].setAttribute("src", image);
                    imagesrc[day].setAttribute("alt", desc);
                day++;
            }
        }
    });

/*--------------- ANNOUNCE NEXT EVENT? ---------------*/

/*requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

        const myTowns = towns.filter(x => x.name == "Preston" || x.name == "Soda Springs" || x.name == "Fish Haven");
        console.log(myTowns);
    
        let event = document.createElement("div");
        let name = document.createElement("h2");
        let e = document.createElement("h3");
        let p = document.createElement("p");

        name.textContent = town +"'s next event:";
        e.textContent = myTowns.events[1];
        p.textContent = `You won't want to miss ${e} this year! It's going to be an event like never before!`

        event.append(name);
        event.append(e);
        event.append(p);

        document.querySelector("div.article").appendChild(event);
    });*/




    //     document.getElementById("day1").textContent = jsObject.list[1].dt_txt;
    //     let imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[1].weather[0].icon + ".png";
    //     let desc = jsObject.list[1].weather[0].description;
    //         document.getElementById("day1imgsrc").textContent = imagesrc;
    //         document.getElementById("day1img").setAttribute("src", imagesrc);
    //         document.getElementById("day1img").setAttribute("alt", desc);
    //     document.getElementById("day1temp").textContent = jsObject.list[1].main.temp;

    //     document.getElementById("day2").textContent = jsObject.list[2].dt_txt;
    //     imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[2].weather[0].icon + ".png";
    //     desc = jsObject.list[2].weather[0].description;
    //         document.getElementById("day2imgsrc").textContent = imagesrc;
    //         document.getElementById("day2img").setAttribute("src", imagesrc);
    //         document.getElementById("day2img").setAttribute("alt", desc);
    //     document.getElementById("day2temp").textContent = jsObject.list[2].main.temp;

    //     document.getElementById("day3").textContent = jsObject.list[3].dt_txt;
    //     imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[3].weather[0].icon + ".png";
    //     desc = jsObject.list[3].weather[0].description;
    //         document.getElementById("day3imgsrc").textContent = imagesrc;
    //         document.getElementById("day3img").setAttribute("src", imagesrc);
    //         document.getElementById("day3img").setAttribute("alt", desc);
    //     document.getElementById("day3temp").textContent = jsObject.list[3].main.temp;

    //     document.getElementById("day4").textContent = jsObject.list[4].dt_txt;
    //     imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[4].weather[0].icon + ".png";
    //     desc = jsObject.list[4].weather[0].description;
    //         document.getElementById("day4imgsrc").textContent = imagesrc;
    //         document.getElementById("day4img").setAttribute("src", imagesrc);
    //         document.getElementById("day4img").setAttribute("alt", desc);
    //     document.getElementById("day4temp").textContent = jsObject.list[4].main.temp;

    //     document.getElementById("day5").textContent = jsObject.list[5].dt_txt;
    //     imagesrc = "https://openweathermap.org/img/w/" + jsObject.list[5].weather[0].icon + ".png";
    //     desc = jsObject.list[5].weather[0].description;
    //         document.getElementById("day5imgsrc").textContent = imagesrc;
    //         document.getElementById("day5img").setAttribute("src", imagesrc);
    //         document.getElementById("day5img").setAttribute("alt", desc);
    //     document.getElementById("day5temp").textContent = jsObject.list[5].main.temp;
    // })