import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

function CurrentMovies() {
    useEffect(() => {
        fetch ('https://api.themoviedb.org/3/movie/now_playing?api_key=db466ad67367892599f1301289471f98&language=en-US&page=1')
            .then(response => response.json())
            .then( (data) => {
                setMovieArr(data.results)
            })
        console.log('Test')
        return () => {
            // cleanup
        }
    }, [])
    const [movieArr, setMovieArr] = useState([])
    return (
        <div style={styles.main}>
            <h2>In Theaters Now - Current Movies</h2>
            <section style={styles.list}>
                {movieArr.map((mov) => {                    
                    return(<li key={mov.id}><MovieCard info={mov}/></li>)
                })}
                
                {/* <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li> */}
            </section>
            
        </div>
    )
}

export default CurrentMovies

const styles={
    main:{
        marginLeft: '270px',
        backgroundColor: '#313131',
        color: 'white',
        width: '100%',
        height: '100vh',
    },
    list:{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
    }
}