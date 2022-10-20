import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ( { id, poster_path, title, average_rating } ) => {
    return(
        
            <div className='card' id={id}>
                <Link to={`/${id}`} className='card-link'>
                    <img className="main-view-poster" src={poster_path} alt="movie poster with title and details for show times"/>
                    <h2>{title}</h2>
                    <p className='card-details'>{`🍏 Rating: ${average_rating.toFixed(0)} / 10 `}</p>
                </Link>
            </div>
       
    )
}

export default Card
