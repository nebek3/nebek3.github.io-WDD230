function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastmod').textContent = document.lastModified;

let theDate = new Date();
if (theDate.getDay() == 5) {
    document.querySelector("banner").style.display = "block";
}


/********** LAZY LOADING **********/

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

img[data-src] {
    filter: blur(0.2em);
}

img {
    filter: blur(0.0em);
    transition: filter 0.5s;
}

if("IntersectionObersver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
               loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    })
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}