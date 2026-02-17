const app = {
    urlDatos : "/resources/data/autos.json",
    filtro : "todos",

    cargarFichas : function () {
        const fichas = document.querySelector("#fichas");
        let html = "";
        fetch(this.urlDatos).then(response => response.json()).then(autos => {
            for (let auto of autos){
                if (this.filtro === "todos" || auto.tipo === "filtro"){
                    html += `
                    <div class="ficha">
                        <img src="/resources/images/${auto.foto}" alt="${auto.modelo}">
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
};

window.onload = function(){
    app.cargarFichas();

    const amenu = this.document.querySelectorAll("a.menu");

    amenu.forEach(menuItem => {
        menuItem.addEventListener("click", event => {
            event.preventDefault();
            app.filtro = menuItem.getAttribute("data-filtro");
            app.cargarFichas();
        })
    });
}
