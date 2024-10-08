function changeCss() {
    var navElement = document.querySelector("nav");

    // Check the scroll position
    if (this.scrollY > 0) {
        // Set box shadow when scrolled past 500 pixels
        navElement.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 0.3)";
    } else {
        // Reset the box shadow and opacity when above 500 pixels
        navElement.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", changeCss, false);