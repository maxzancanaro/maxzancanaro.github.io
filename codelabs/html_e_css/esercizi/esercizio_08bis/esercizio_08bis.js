var contatore=0;

function incr() {
    contatore++;
    
    element = document.getElementById("contatore");

    if ( contatore >= 0 ) {
        element.style.color = "#000000";
    } 
    element.innerHTML = contatore;
};

function decr() {
    contatore--;

    element = document.getElementById("contatore");

    if ( contatore < 0 ) {
        element.style.color = "#ff0000";
    } 
    element.innerHTML = contatore;

};


function cancella() {
    contatore=0;
    document.getElementById("contatore").innerHTML = contatore;
    element.style.color = "#000000";
};
