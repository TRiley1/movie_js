import '../App.css'

const Movie = ({title, link}) => {
    return ( <h3 className = 'movie'><a href = {link}>{title}</a></h3>  );
}
 
export default Movie;