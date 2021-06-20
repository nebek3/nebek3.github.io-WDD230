const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

/*Preston*/

    let preston = document.createElement("div");
    preston.classList.add("prestonhome");
    let pname = document.createElement("h2");
    let pmotto = document.createElement("h4");
    let pfounded = document.createElement("p");
    let ppopulation = document.createElement("p");
    let prainfall = document.createElement("p");
    let pic = document.createElement("img");

    pname.textContent = towns[6].name;
    pmotto.textContent =towns[6].motto;
    pfounded.textContent = "Founded in " + towns[6].yearFounded;
    ppopulation.textContent = "Current Population is " + towns[6].currentPopulation;
    prainfall.textContent = "The Average Rainfall is " + towns[6].averageRainfall;
    pic.setAttribute("src", towns[6].photo), "alt", towns[6].name;

    homemain.appendChild(pname);
    homemain.appendChild(pmotto);
    homemain.appendChild(pfounded);
    homemain.appendChild(ppopulation);
    homemain.appendChild(prainfall);
    homemain.appendChild(pic);

    document.querySelector("div.preston").appendChild(preston);

    let preston = document.createElement('section');

/*Soda Springs*/

let i = 0;
    let homemain = document.createElement("div");
    let h2 = document.createElement("h2");
    let slogan = document.createElement("h4");
    let founded = document.createElement("p");
    let pic = document.createElement("img");

    h2.textContent = towns[i].name;
    slogan.textContent =towns[i].motto;
    founded.textContent = "Founded in " + towns[i].yearFounded;
    pic.setAttribute("src", towns[i].photo), "alt", towns[i].name;

    homemain.appendChild(h2);
    homemain.appendChild(slogan);
    homemain.appendChild(founded);
    homemain.appendChild(pic);

    document.querySelector("main.homemain").appendChild(homemain);

/*Fish Haven*/

let i = 5;
    let homemain = document.createElement("div");
    let h2 = document.createElement("h2");
    let slogan = document.createElement("h4");
    let founded = document.createElement("p");
    let pic = document.createElement("img");

    h2.textContent = towns[i].name;
    slogan.textContent =towns[i].motto;
    founded.textContent = "Founded in " + towns[i].yearFounded;
    pic.setAttribute("src", towns[i].photo), "alt", towns[i].name;

    homemain.appendChild(h2);
    homemain.appendChild(slogan);
    homemain.appendChild(founded);
    homemain.appendChild(pic);

    document.querySelector("main.homemain").appendChild(homemain);
});



    function toggleMenu() {
        document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    }
    document.querySelector('#year').textContent = new Date().getFullYear();
    document.querySelector('#lastmod').textContent = document.lastModified;
    
    let theDate = new Date();
    if (theDate.getDay() == 5) {
        document.querySelector("banner").style.display = "block";
    }