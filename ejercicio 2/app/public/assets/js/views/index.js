const app = {
  //URL's base para las APIs
  
  urlPosts : "https://jsonplaceholder.typicode.com/posts",
  urlComments : "https://jsonplaceholder.typicode.com/comments",
  urlUsers : "https://jsonplaceholder.typicode.com/users",
  //variables de estado

  /**Cargar las publicaciones (posts) desde la API y mostrarlas mediante DOM */

  loadCommets : async function (params) {
  },

  loadPosts : async function (){
        try{
            //const cont = document.querySelector("#content");
            const $cont = $("#content");
            $cont
                .css("width", "100%",)
                .addClass("mx-auto mt-5");

            let html = "";
            const users = await (fetch(this.urlUsers).then(resp => resp.json()));
            const posts = await (fetch(this.urlPosts).then(resp => resp.json()));
            posts.forEach(post => {
                const user = users.find(user => user.id === post.userid);
                html += `                  
        <div class="card mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}.</p>
            </div>
            <div class="card-footer text-body-secondary">
                <button class="btn btn-link" type="button" id="btn-ver-com" onclick="app.loadCommets()">
                    Ver comentarios
                </button>
                <button class="btn btn-link d-none" type="button" id="btn-quitar-com" onclick="app.loadCommets()">
                    Quitar comentarios
                </button>
            </div>
        </div>
            `;
            });
            $cont.html(html);
        } catch (err){
            console.error("Se produjo un error al cargar las publicaciones", err);
        }
  }, 

  loadUsers : async function(){
  },

};

$(function ( ){
    app.loadPosts();
})