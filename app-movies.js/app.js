const movies = require('./movies')

let moviesDH = {
    movies: movies,
    listMovies: function(){
        movies.forEach(function(peli){
        console.log(peli.title)
    })
},
    searchMovies: function(id) {
        let peliBuscada = this.movies.find(function(peli){
            return peli.id == id
        }) 
        if(peliBuscada){
            return peliBuscada
        }else{
            return null
        }
},
    searchMoviesByGenre: function(genero){
        let pelisQueCumplen = this.movies.filter(function(peli){
            return peli.genre == genero
        })
        if(pelisQueCumplen===[]){
        return null
        }
        else {
        return pelisQueCumplen
        }
},
    totalPrice: function(){
        return (movies.reduce((acumulador, peli)=> acumulador + peli.price, 0
        ));
},
    changeMovieGenre: function(id, newGenre) {
    let peliACambiar = this.searchMovies(id);
    peliACambiar.genre = newGenre;
    return peliACambiar // devuelve el objeto de la pelicula con su nuevo género
},
    }
//moviesDH.listMovies()
//console.log(moviesDH.searchMovies(7)) //devuelve null
//console.log(moviesDH.searchMovies(1)) // devuelve la peli correspondiente al indice al id 1
//console.log(moviesDH.searchMoviesByGenre('Aventuras'))
//console.log(moviesDH.searchMoviesByGenre('Humor')) 
//console.log(moviesDH.totalPrice())
//console.log(moviesDH.changeMovieGenre(1, 'Comedia')) 
