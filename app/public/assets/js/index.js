const app = {
    urlDatos : "/resources/data/autos.json",
    filtro : "todos",

    cargarFichas : function () {
        const fichas = document.querySelector("#fichas");
        let html = "";
        fetch(this.urlDatos).then(response => response.json).then(autos => {
            for (let auto of autos){
                if (filtro === "todos" || auto.tipo === "filtro"){
                    
                }
            }
        }).catch( err => console.error (err));
        

    },
    
};


app.cargarFichas();