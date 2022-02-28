import React from 'react'

function TVCard(params) {
    return (    
        <div>   
            <article className="tvCard">
                <img src={'https://image.tmdb.org/t/p/w185'+params.info.poster_path} alt={params.info.name + ' poster'}></img>
                <div className="tv-overlay">
                    <h4>{params.info.name} - {params.info.first_air_date.substring(0,4)}</h4>
                    <p>{params.info.overview.substring(0,260)}...</p>
                </div>
            </article>
        </div> 
    )
}

export default TVCard
