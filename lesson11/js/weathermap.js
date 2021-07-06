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

fetch(apiForecast)
    .then(response => response.json())
    .then(response => {
        let day = 0;
        let imagesrc = document.querySelectorAll('.eachDay .dayimgsrc');

        let daytemp = document.querySelectorAll('.eachDay .daytemp');

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

requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towndata = jsonObject["towns"];

        /*const myTowns = towns.filter(x => x.name == "Preston" || x.name == "Soda Springs" || x.name == "Fish Haven");
        console.log(myTowns);*/

        let event = document.createElement("div");
        let name = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        let i = 6;
        let townName = "Preston";

        if(town.textContent == "Soda Springs") {
            i = 0;
            townName = "Soda Springs";
        }
        else if(town.textContent == "Fish Haven") {
            i = 2;
            townName = "Fish Haven";
        };

        console.log(town.textContent);
        console.log(towndata);

        name.textContent = townName + " Events:";
        console.log(name);

        p1.textContent = towndata[i].events[0];
        p2.textContent = towndata[i].events[1];
        p3.textContent = towndata[i].events[2];

        event.append(name);
        event.append(p1);
        event.append(p2);
        event.append(p3);

        document.querySelector("div.events").appendChild(event);
    });