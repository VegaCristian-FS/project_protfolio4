import React from 'react'

function MovieCard() {
    return (
        <div >
            <p style={styles.movie}>Movie</p>
        </div>
    )
}

export default MovieCard

const styles={
    main:{
        backgroundColor: '#FFF',
        color: 'black',
        width: '270px',
        height: '430px'
    }
}