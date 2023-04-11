import Movie from "./Movie";
import '../App.css'

const MovieList = ({movies}) => {
     const movieNodes = movies.map(movie => {
    return(
        <Movie title = {movie.name} key = {movie.id} link = {movie.url}></Movie>
    )    
    })

    return(
        <>
            {movieNodes}
        </>
    )
}
 
export default MovieList;
