let espressione="";

function aggiungi(stringa) {
    espressione+=stringa
    document.getElementById("risultato").textContent=espressione
}

function cancella(stringa) {
    espressione="";
    document.getElementById("risultato").textContent=""
}

function calcola() {
    valore=math.evaluate(espressione);
    document.getElementById("risultato").textContent=valore
}