import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

function PopularMovies() {
    useEffect(() => {
        fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=db466ad67367892599f1301289471f98&language=en-US&page=1')
            .then(response => response.json())
            .then( (data) => {
                setMovieArr(data.results)
            })
        return () => {
            // cleanup
        }
    }, [])
    const [movieArr, setMovieArr] = useState([])
    return (
        <section style={styles.main}>
            <h2>Most Popular Movies</h2>
            <ul className="movieList">
                {movieArr.map((mov) => {                    
                    return(<li key={mov.id}><MovieCard info={mov}/></li>)
                })}
            </ul>
        </section>
    )
}

export default PopularMovies

const styles={
   main:{
        margin: '10px 0 0 270px',
    }
}