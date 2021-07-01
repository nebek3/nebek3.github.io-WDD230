let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: .6,
    rootMargin: "0px 0px 0px 0px"
};

if("intersectionObserver" in window) {
    const observer = new intersectionObserver( (items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach(img => {
        observer.observe(img);
    });

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}