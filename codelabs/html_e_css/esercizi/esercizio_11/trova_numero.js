

/* restituisce una lista di 9 numeri random tra 1 e 100 */
function generatoreRandom9 () {
    let  numeri = [];

    while ( numeri.length < 9 ) {
        let nuovoNumero=1+Math.floor(Math.random() * 100);

        if (numeri.indexOf(nuovoNumero) == -1) {
            numeri.push(nuovoNumero);
        }
    }
    return numeri;   
}



/* dato un array di numeri, ne estrae uno a caso */
function estraiNumero (arrayNumeri) {
    let randomIndex = Math.floor(Math.random() * arrayNumeri.length); 
    return arrayNumeri[randomIndex];
}

window.addEventListener("load", (event) => {
    let listaNumeri=generatoreRandom9();;
    let numero=estraiNumero(listaNumeri); 

    let elementiElement=document.getElementById("elementi");
    let numeroElem=document.getElementById("numero");
    let risultatoElem=document.getElementById("risultato");
    

    /* Operazioni di visualizzazione */
    for (i=0; i<9; i++ ) {
        elementiElement.children[i].textContent=listaNumeri[i];
    }
    numeroElem.textContent=numero

    /* setting degli event listener */
    for ( e of elementiElement.children ) {
        e.addEventListener("click", (event) => {

            // deseleziona tutti gli elementi
            for ( c of elementiElement.children ) {
                c.style.color = "rgb(63 63 70)";
                c.style.backgroundColor= "rgb(250 250 250)";       
            }

            // seleziona l'elemento cliccato
            event.target.style.color = "rgb(250 250 250)";
            event.target.style.backgroundColor= "rgb(63 63 70)";  

                // attenzione ad usare == e non === (oppure bisogna rendere uguali i tpi)
            if ( event.target.textContent == numero ) {
                risultatoElem.textContent="Ottimo!";
            } else {
                risultatoElem.textContent="Sbagliato! (è il "+event.target.textContent +"!)";
            }
        });
    }
});