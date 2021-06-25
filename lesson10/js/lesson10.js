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
