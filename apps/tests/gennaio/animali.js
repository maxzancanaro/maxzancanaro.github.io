
const url_base="https://maxzancanaro.github.io/codelabs/html_e_css/img/animali/"

let animaliEimmagini=[
{nome: "Gatto", immagine: "gatto.png"},
{nome: "Cane", immagine: "cane.png"},
{nome: "Delfino", immagine: "delfino.png"},
{nome: "Leone", immagine: "leone.png"},
{nome: "Tigre", immagine: "tigre.png"},
{nome: "Lupo", immagine: "lupo.png"},
{nome: "Orso", immagine: "orso.png"},
{nome: "Aquila", immagine: "aquila.png"},
{nome: "Cervo", immagine: "cervo.png"},
{nome: "Polpo", immagine: "polpo.png"}
]

function URLImmagine(obj){
    let immagineAnimale = obj.immagine;
    let url = url_base + immagineAnimale;
    return(url)
}

function cercaImmagineSafe(arrayObjs, nome){
    let url = ''

    for (let obj of arrayObjs) {
        if (obj.nome === nome) {
            url = URLImmagine(obj);
        }
    }

    if (url === '') {
        url = url_base + 'sconosciuto.png'
    }

    return(url);
}


addEventListener("load", (event) => {

    /* caricare i nomi degli animali nel div elencoAnimali */
    elencoAnimaliElements = document.getElementById("elencoAnimali");


    /* preparare i listener per caricare l'immagine al click */
    for ( i=0; i<elencoAnimaliElements.children.length; i++ ) {
        let animale=animaliEimmagini[i].nome;
        elencoAnimaliElements.children[i].textContent=animale;

        elencoAnimaliElements.children[i].addEventListener("click", (event) => {
            
            document.getElementById("fotoImmagine").setAttribute("src",cercaImmagineSafe(animaliEimmagini,animale));
        });
    }


});
