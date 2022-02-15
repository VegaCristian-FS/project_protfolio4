import React from 'react'

function MovieCard(params) {
    return (
        <article>
            <img src={'https://image.tmdb.org/t/p/w154'+params.info.poster_path} alt={params.info.original_title + ' poster'}></img>
        </article>
    )
}

export default MovieCard
