const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject["prophets"];
        console.table(jsonObject); //temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let birth = document.createElement("p");
            let place = document.createElement("p");
            let pic = document.createElement("img");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            birth.textContent = "Born " + prophets[i].birthdate;
            place.textContent = "in " + prophets[i].birthplace;
            pic.setAttribute("src", prophets[i].imageurl);
            pic.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(birth);
            card.appendChild(place);
            card.appendChild(pic);

            document.querySelector("div.cards").appendChild(card);
        }
    });


