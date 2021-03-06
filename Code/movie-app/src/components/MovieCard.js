import React from 'react'

function MovieCard(params) {
    return (    
        <div>   
            <article className="movie">
                <img src={'https://image.tmdb.org/t/p/w185'+params.info.poster_path} alt={params.info.original_title + ' poster'}></img>
                <div className="movie-overlay">
                    <h4>{params.info.title} - {params.info.release_date.substring(0,4)}</h4>
                    <p>{params.info.overview.substring(0,260)}...</p>
                </div>
            </article>
        </div> 
    )
}

export default MovieCard
