import React from "react";
import "./MovieDetail.css";


function MovieDetail({ id, year, title, summary, poster, genres }){
    return (
        <div className="movie_detail">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map((genre, index)=><li key={index} className="genres__genre">#{genre}</li>)}</ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

export default MovieDetail;