function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;