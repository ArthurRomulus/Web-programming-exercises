const app = {
    urlDatos : "/resources/data/autos.json",
    filtro : "todos",

    cargarFichas : function () {
        const fichas = document.querySelector("#fichas");
        let html = "";
        fetch(this.urlDatos).then(response => response.json).then(autos => {
            for (let auto of autos){
                if (filtro === "todos" || auto.tipo === "filtro"){
                    html += `
                    <div class="ficha">
                        <img src="${auto.foto}" alt="${auto.modelo}">
                        <div class="datos">
                            <h3>${auto.marca}</h3>
                            <span>${auto.modelo}</span>
                            <span>${auto.anio}</span>
                            <br>
                            <small>
                            ${auto.desplazamiento}, ${auto.potencia},  ${auto.rendimiento}
                            </small>
                        </div>
                        </div>
                    `;
                }
            }
        }).catch( err => console.error (err));
        

    },
    
};


app.cargarFichas();