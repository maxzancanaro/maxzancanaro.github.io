let contatore=0;

function incr() {
    let element = document.getElementById("contatore");

    contatore++;
    
    if ( contatore >= 0 ) {
        element.style.color = "#000000";
    } 
    element.textContent = contatore;
};

function decr() {
    let element = document.getElementById("contatore");

    contatore--;

    if ( contatore < 0 ) {
        element.style.color = "#ff0000";
    } 
    element.textContent = contatore;

};


function cancella() {
    let element = document.getElementById("contatore");

    contatore=0;
    element.textContent = contatore;
    element.style.color = "#000000";
};
