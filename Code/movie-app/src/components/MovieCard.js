import React from 'react'

function MovieCard(params) {
    return (
        <div >
            <p style={styles.movie}>{params.info.original_title}</p>
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