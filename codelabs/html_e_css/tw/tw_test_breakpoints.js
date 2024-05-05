
function visualizzaRisoluzione () {
    elementWidth = document.getElementById("window_width")
    elementHeight = document.getElementById("window_height")

    elementWidth.textContent = window.innerWidth;
    elementHeight.textContent = window.innerHeight;
}



window.addEventListener("resize", visualizzaRisoluzione);

window.addEventListener("load", visualizzaRisoluzione);