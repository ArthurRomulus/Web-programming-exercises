const app = {
  //URL's base para las APIs
  
  urlPosts : "https://jsonplaceholder.typicode.com/posts",
  urlComments : "https://jsonplaceholder.typicode.com/comments",
  urlUsers : "https://jsonplaceholder.typicode.com/users",


  //variables de estado

  /**Cargar las publicaciones (posts) desde la API y mostrarlas mediante DOM */

  loadPosts : function (){
        try{

        } catch (err){
            crossOriginIsolated.error("Se produjo un error al cargar las publicaciones", err);
        }
  }

};

app.loadPosts()