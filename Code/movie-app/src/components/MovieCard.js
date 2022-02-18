import React from 'react'

function MovieCard(params) {
    return (
        <article className="movie">
            <img src={'https://image.tmdb.org/t/p/original'+params.info.poster_path} alt={params.info.original_title + ' poster'}></img>
        </article>
    )
}

export default MovieCard
