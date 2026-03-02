const app = {
  //URL's base para las APIs
  
  urlPosts : "https://jsonplaceholder.typicode.com/posts",
  urlComments : "https://jsonplaceholder.typicode.com/comments",
  urlUsers : "https://jsonplaceholder.typicode.com/users",


  //variables de estado

  /**Cargar las publicaciones (posts) desde la API y mostrarlas mediante DOM */

  loadPosts : function (){
        try{
            //const cont = document.querySelector("#content");
            const $cont = $("#content");
            $cont
                .css("width", "100%",)
                .addClass("mx-auto mt-5");

            let html = "";
            const users = await(fetch(this.urlUsers).then(resp => json()));
            const posts = await(fetch(this.urlPosts).then(resp => resp.json()));
            const commets = await(fetch(this.urlComments).then(resp => resp.json()));
            posts.forEach(post => {
                html += `
                
            `;
            });
        } catch (err){
            console.error("Se produjo un error al cargar las publicaciones", err);
        }
  }

};

app.loadPosts()