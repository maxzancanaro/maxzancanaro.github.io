let contatore=0;

function incr() {
    
};


function cancella() {

};

window.addEventListener("load", (event) => {

    /* Listener per la funzione di decremento */
    document.getElementById("decr").addEventListener("click",(event) => {
        let element = document.getElementById("contatore");
        contatore--;
        if ( contatore < 0 ) {
            element.style.color = "#ff0000";
        } 
        element.textContent = contatore;
    });

    /* Listener per la funzione di incremento */
    document.getElementById("incr").addEventListener("click",(event) => {
        let element = document.getElementById("contatore");
        contatore++;
         if ( contatore >= 0 ) {
            element.style.color = "#000000";
        } 
        element.textContent = contatore;
    });

    /* Listener per la funzione di cancellazione */
    document.getElementById("cancella").addEventListener("click",(event) => {
        let element = document.getElementById("contatore");
        contatore=0;
        element.style.color = "#000000";
        element.textContent = contatore;
    });
});