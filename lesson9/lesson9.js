const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];

/*Preston*/

    let preston = document.createElement("section");
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

    let sodasprings = document.createElement("section");
    sodasprings.classList.add("prestonhome");

    let sname = document.createElement("h2");
    let smotto = document.createElement("h4");
    let sfounded = document.createElement("p");
    let spopulation = document.createElement("p");
    let srainfall = document.createElement("p");
    let pic = document.createElement("img");

    sname.textContent = towns[0].name;
    smotto.textContent =towns[0].motto;
    sfounded.textContent = "Founded in " + towns[0].yearFounded;
    spopulation.textContent = "Current Population is " + towns[0].currentPopulation;
    srainfall.textContent = "The Average Rainfall is " + towns[0].averageRainfall;
    pic.setAttribute("src", towns[0].photo), "alt", towns[0].name;

    homemain.appendChild(sname);
    homemain.appendChild(smotto);
    homemain.appendChild(sfounded);
    homemain.appendChild(spopulation);
    homemain.appendChild(srainfall);
    homemain.appendChild(pic);

    document.querySelector("div.sodasprings").appendChild(sodasprings);

    let preston = document.createElement('section');


/*Fish Haven*/

    let sodasprings = document.createElement("section");
    sodasprings.classList.add("prestonhome");

    let sname = document.createElement("h2");
    let smotto = document.createElement("h4");
    let sfounded = document.createElement("p");
    let spopulation = document.createElement("p");
    let srainfall = document.createElement("p");
    let pic = document.createElement("img");

    sname.textContent = towns[5].name;
    smotto.textContent =towns[5].motto;
    sfounded.textContent = "Founded in " + towns[5].yearFounded;
    spopulation.textContent = "Current Population is " + towns[5].currentPopulation;
    srainfall.textContent = "The Average Rainfall is " + towns[5].averageRainfall;
    pic.setAttribute("src", towns[5].photo), "alt", towns[5].name;

    homemain.appendChild(sname);
    homemain.appendChild(smotto);
    homemain.appendChild(sfounded);
    homemain.appendChild(spopulation);
    homemain.appendChild(srainfall);
    homemain.appendChild(pic);

    document.querySelector("div.sodasprings").appendChild(sodasprings);

    let preston = document.createElement('section');
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