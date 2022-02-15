import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

function Trending() {
    useEffect(() => {
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=db466ad67367892599f1301289471f98&language=en-US&page=1')
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
            <h2>Movies Trending Now</h2>
            <section style={styles.list}>
                {movieArr.map((mov) => {                    
                    return(<li key={mov.id}><MovieCard info={mov}/></li>)
                })}
            </section>
            
        </div>
    )
}

export default Trending

const styles={
    main:{
        marginLeft: '270px',        
        color: 'white',
        width: '100%',
        height: '100vh',
    },
    list:{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridRowGap: '40px',
        listStyle: 'none'
    }
}