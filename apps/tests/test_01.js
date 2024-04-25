
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener("resize", function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
});

window.addEventListener("load", (event) => {
    elementWidth = document.getElementById("window_width")
    elementHeight = document.getElementById("window_height")

    elementHeight.textContent = windowHeight;
    elementWidth.textContent = windowWidth;
});