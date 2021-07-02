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

requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

        const myTowns = towns.filter(x => x.name == "Preston" || x.name == "Soda Springs" || x.name == "Fish Haven");
        console.log(myTowns);


        myTowns.forEach(myTowns => {
            let town = document.createElement("div");
            town.className = "townDivs"

            let group = document.createElement("div");

            let name = document.createElement("h2");
            let motto = document.createElement("h6");
            let founded = document.createElement("p");
            let population = document.createElement("p");
            let rainfall = document.createElement("p");
            let pic = document. createElement("img");


            name.textContent = myTowns.name;
            motto.textContent = myTowns.motto;

            let rain = Math.round(myTowns.averageRainfall);

            founded.textContent = `Founded in ${myTowns.yearFounded}`;
            population.textContent = `Current Population is ${myTowns.currentPopulation}`;
            rainfall.textContent = `The Average Rainfall is ${rain}`;
            pic.setAttribute("src", `../images/${myTowns.photo}`);
            pic.setAttribute("alt", `${myTowns.name}`)


            group.append(name);
            group.append(motto);
            group.append(founded);
            group.append(population);
            group.append(rainfall);
            town.append(group);
            town.append(pic);

            document.querySelector("div.homemain").appendChild(town);
        });
    });