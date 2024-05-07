let espressione="";

window.addEventListener("load", (event) => {

    let elementoNumeri=document.getElementById("numeri")
    for (let element of elementoNumeri.children) {
        
        element.addEventListener("click", (event) => {
            if ( espressione==="ERROR") {
                espressione="";
            }
            espressione+=event.target.textContent;
            document.getElementById("risultato").textContent=espressione;
        });
    }

    let elementoOperazioni=document.getElementById("operazioni")
    for (let element of elementoOperazioni.children) {
 
       element.addEventListener("click",(event) => {
            if ( event.target.id === "cancella" ) {
                espressione=""; 
            } else {
                espressione+=event.target.textContent;
            }
            document.getElementById("risultato").textContent=espressione;
        })
    }

    document.getElementById("uguale").addEventListener("click", (event) => {
        try {
           espressione=math.evaluate(espressione);
           espressione=parseFloat(espressione.toFixed(11)).toString();
           //espressione=eval(espressione);
        } catch (error) {
            espressione="ERROR";
        }
        document.getElementById("risultato").textContent= espressione;
    });
});