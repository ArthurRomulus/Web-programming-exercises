const app = {
  //URL's base para las APIs
  
  urlPosts : "https://jsonplaceholder.typicode.com/posts",
  urlComments : "https://jsonplaceholder.typicode.com/comments",
  urlUsers : "https://jsonplaceholder.typicode.com/users",


  //variables de estado

  /**Cargar las publicaciones (posts) desde la API y mostrarlas mediante DOM */

  loadPosts : function (){
    fetch(this.urlPosts)
        .then(response => response.json())
        .then(json => console.log(json));
    
  }

};

app.loadPosts()