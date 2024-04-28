let espressione="";

window.addEventListener("load", (event) => {

    for (let i=0; i<10;i++ ) {
        let numElement=document.getElementById("n"+i);
        numElement.addEventListener("click", (event) => {
            console.log("i="+i)
            if ( espressione==="ERROR") {
                espressione="";
            }
            espressione+=i.toString();
            document.getElementById("risultato").textContent=espressione;
        });
    }

    for (let element of document.getElementsByClassName("operazione")) {
        console.log(element)
        element.addEventListener("click",(event) => {
            switch (event.target.id) {
                case "operazioneSomma":
                    espressione+="+";
                    break;
                case "operazioneSottrazione":
                    espressione+="-";
                    break;
                case "operazioneProdotto":
                    espressione+="*";
                    break;
                case "operazioneDivisione":
                    espressione+="/";
                    break;
                default:
            }
            document.getElementById("risultato").textContent=espressione;
        })
    }

    document.getElementById("uguale").addEventListener("click", (event) => {
        try {
           espressione=math.evaluate(espressione);
           //espressione=eval(espressione);
        } catch (error) {
            espressione="ERROR";
        }
        document.getElementById("risultato").textContent=espressione;
    });
    document.getElementById("cancellazione").addEventListener("click", (event) => {
        espressione="";
        document.getElementById("risultato").textContent=espressione;
    });
    
});