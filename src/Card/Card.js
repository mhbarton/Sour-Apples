import React from 'react'
import './Card.css'

const Card = ({ backdrop_path, poster_path, title, release_date, average_rating, id, showSingleMovie }) => {
    return(
        <div className='card' onClick={() => showSingleMovie(id)}>
            <img src={poster_path} alt="movie poster with title and details for show times"/>
            <h2>{title}</h2>
            <p>{`Release date:  ${release_date}`}</p>
            <p>{`Sour Apples Rating:  ${average_rating.toFixed(0)} / 10 `}</p>
        </div>
    )
}

export default Card
