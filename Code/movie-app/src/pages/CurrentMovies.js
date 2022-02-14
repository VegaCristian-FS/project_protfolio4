import React from 'react'
import MovieCard from '../components/MovieCard'

function CurrentMovies() {
    return (
        <div style={styles.main}>
            <h2>In Theaters Now - Current Movies</h2>
            <section style={styles.list}>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
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