const app = {
    urlDatos : "/resources/data/autos.json",
    urlImages : "/resources/images/",
    filtro : "todos",

    foto : document.querySelector("#foto"),

    modalFoto : document.querySelector("#modal-foto"),

    cargarFichas : function () {
        const fichas = document.querySelector("#fichas");
        let html = "";
        fetch(this.urlDatos).then(response => response.json()).then(autos => {
            for (let auto of autos){
                if (this.filtro === "todos" || auto.tipo === "filtro"){
                    html += `
                    <div class="ficha">
                        <img src="${this.urlImages}${auto.foto}" 
                            alt="${auto.modelo}"
                            onclick="app.verFoto('${auto.foto}')">
                        <div class="datos">
                            <h3>${auto.marca}</h3>
                            <span>${auto.modelo}</span>
                            <span>${auto.anio}</span>
                            <br>
                            <small>
                            ${auto.motor?.desplazamiento || ''} ${auto.motor ? auto.motor.desplazamiento + 
                                ', ' + auto.motor.potencia + 
                                ', '+ auto.motor.rendimiento :
                                auto.datostecnicos.motor +  ', ' + auto.datostecnicos.transmision + ', ' +
                                auto.datostecnicos.velocidadmax
                            }
                            </small>
                        </div>
                        </div>
                    `;
                }
            }
            fichas.innerHTML = html;
        }).catch( err => console.error (err));  
    },
    verFoto : function(foto){
        this.foto.src = this.urlImages + foto;
        this.modalFoto.style.display = "block";
    }
};

window.onload = function(){
    app.cargarFichas();

    const amenu = this.document.querySelectorAll("a.menu");
    this.document.querySelector("#close-modal").addEventListener("click", ()=>{
        app.modalFoto.style.display = "none";
    });
    amenu.forEach(menuItem => {
        menuItem.addEventListener("click", event => {
            event.preventDefault();
            app.filtro = menuItem.getAttribute("data-filtro");
            app.cargarFichas();
        })
    });
}

window.onclick = event => {
    if (event.target == app.modalFoto){
        app.modalFoto.style.display = "none";
    }
}