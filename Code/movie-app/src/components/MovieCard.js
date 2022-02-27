import React from 'react'

function MovieCard(params) {
    return (    
        <div>   
            <article className="movie">
                <img src={'https://image.tmdb.org/t/p/original'+params.info.poster_path} alt={params.info.original_title + ' poster'}></img>
                <div className="movie-overlay">
                    <h4>{params.info.title} - {params.info.release_date.substring(0,4)}</h4>
                    <p>{params.info.overview}</p>
                </div>
            </article>
        </div> 
    )
}

export default MovieCard
