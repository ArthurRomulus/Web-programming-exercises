    const app = {
    //URLs base apra las APIs
    urlPosts : "https://jsonplaceholder.typicode.com/posts",
    urlComments : "https://jsonplaceholder.typicode.com/comments",
    urlUsers : "https://jsonplaceholder.typicode.com/users",

    //Variables de estado 

    userId : "",

    //**Cargar las publicaciones (post) desde la API y mostrarla mediante DOM */
    loadComments: async function(postId){},

    loadAuthors: async function () {
        try {
            const posts = await fetch(this.urlPosts).then(resp => resp.json() )
            const users = await fetch(this.urlUsers).then(resp => resp.json() )
            posts.forEach(post => {
                const user = users.find(user => user.id === post.userId) //filtrar al usuario autor de la publicacion
                console.log(user);

                html = `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`;
            })

        
        } catch (err) {
                console.error("Error al cargar los posts:", err);
        }
            
    },

    loadPosts: async function(){
        try {
            //const cont = document.querySelector("#content")
            const $cont = $("#content")
            $cont
                .css("width", "100%")
                .addClass("mx-auto mt-5")
            let html = ""
            const posts = await fetch(this.urlPosts).then(resp => resp.json() )
            const users = await fetch(this.urlUsers).then(resp => resp.json() )


            posts.forEach(post  => {
                const user = users.find(user => user.id === post.userId) //filtrar al usuario autor de la publicacion
                html += `
                       <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${user.id}</h6>
                            <p class="card-text">${post.body}</p>
                        </div>
                        <div class="card-footer text-body-secondary">
                            <button class="btn btn-link" type="button"
                                id="btn-ver-com${post.id}"
                                onclick="app.loadComments(${post.id})">
                                Ver comentarios <i class="bi bi-chevron-down"></i> 
                            </button>
                            <button class="btn btn-link d-none" type="button"
                                id="btn-ocultar-com${post.id}"
                                onclick="app.closeComments(${post.id})">
                                Ocultar comentarios <i class="bi bi-chevron-up"></i> 
                            </button>
                            <div class="card d-none" id="card-com${post.id}">
                                <ul class="list-group list-group-flush" id="comments-${post.id}">
                                </ul>

                            </div>
                        </div>
                    </div>

                `
            })
            $cont.html(html)

            

    } catch (err) {
            console.error("Error al cargar los posts:", err);
    }
    },
    loadUsers : async function(){
    },
    userPosts : function(uid){
        $(`#up${this.userId}`).removeClass("active")
        $(`#up${uid}`);
    }


}
$(function(){
    app.loadPosts()
})

app.loadAuthors();