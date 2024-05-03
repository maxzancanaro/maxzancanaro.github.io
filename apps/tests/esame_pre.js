

/* restituisce una lista di 9 numeri random tra 1 e 100 */
function generatoreRandom9 () {
    let numeri = new Set();

    while ( numeri.size < 9 ) {
        numeri.add(1+Math.floor(Math.random() * 100));
    }
    return Array.from(numeri);
}

/* dati un array di numeri e un numero n, 
    restituisce la sottolista con i numeri divisibili per n (oppure la lista vuota) */
function estraiNumeriDivisibili (arrayNumeri, n) {
    
    return arrayNumeri.filter(function(num) {
         return num % n === 0;
      });
}

window.addEventListener("load", (event) => {
    let listaNumeri=generatoreRandom9 ();
    let nDivisore=2+Math.floor(Math.random() * 10);

    let grigliaElem=document.getElementById("elementi");
    let divisoreElem=document.getElementById("divisore");
    let risultatoElem=document.getElementById("risultato");

    /* Operazioni di caricamento */

    for (i=0; i<9; i++ ) {
        grigliaElem.children[i].textContent=listaNumeri[i];
    }

    divisoreElem.textContent=nDivisore;

    /* setting degli event listener */
    document.getElementById("btControllo").addEventListener("click", (event) => {
        console.log("button =>"+estraiNumeriDivisibili(listaNumeri,nDivisore));
        

        let divisori=estraiNumeriDivisibili(listaNumeri,nDivisore)

        if ( divisori.length==0 ) {
            risultatoElem.textContent="non ce ne sono!";
        } else {
            risultatoElem.textContent=estraiNumeriDivisibili(listaNumeri,nDivisore).toString();
            for (e of grigliaElem.children) {
                if ( divisori.indexOf(parseInt(e.textContent)) !== -1 ) {
                    e.classList.add("text-zinc-50");
                    e.classList.add("bg-zinc-900");
                } 
            };
        }

    });

});