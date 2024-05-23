
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

/* dato un insieme di numeri */
function ordinaNumeri (numeri) {
    let nuovoArrary=numeri.slice()
    return nuovoArrary.sort((a, b) => {return a - b});
}

window.addEventListener("load", (event) => {

    // crea i numeri causali
    let listaNumeri=generatoreRandom9();

    // trova nel DOM il div che contiene i numeri       
    let elementiElement=document.getElementById("elementi");

    /* Visualizza i numeri casuali nel container */
    for (i=0; i<9; i++ ) {
        elementiElement.children[i].textContent=listaNumeri[i];
    }
   
    // crea un altro array la lista ordinata
    let listaNumeriOrdinati=ordinaNumeri(listaNumeri);

    // crea un contatore per gli elementi cliccati
    // (serve come indice per trovare il prossimo e per vedere quando finsce)
    let numerocliccati=0;

    /* setting degli event listener per i click sui numeri */
    for ( e of elementiElement.children ) {
        e.addEventListener("click", (event) => {

            // trova l'elemento dove mettere il risultato
            let risultatoElem=document.getElementById("risultato");

            // seleziona l'elemento cliccato cambiando colore testo e sfondo
            event.target.style.color = "rgb(250 250 250)";
            event.target.style.backgroundColor= "rgb(63 63 70)";  
 
            // controlla se l'elemento cliccato è corretto
            if ( listaNumeriOrdinati[numerocliccati] == event.target.textContent ) {  

                // incrementa il contatore degli elementi cliccati 
                numerocliccati++;  

                if ( numerocliccati < listaNumeriOrdinati.length ) {
                    // se non è l'ultimo numero, scrivi il numero di tentativo
                    risultatoElem.textContent = "Tentativo "+numerocliccati+" corretto!";
                } else {
                    // se è l'ultimo numero, scrivi le congratulazioni
                    risultatoElem.textContent = "Ottimo! Hai fatto tutto giusto!"
                }
              // se l'elemento cliccato non è corretto, scrivi il numero di tentativo a cui ho sbagliato!
            } else {
                risultatoElem.textContent = "Hai sbagliato il tentativo # "+numerocliccati;
            }
        });
    }
});