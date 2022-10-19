import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

const Card = ( props ) => {
    return(
        <NavLink to={`/${props.id}`} className='card-link'>
            <div className='card' onClick={() => props.showSingleMovie(props.id)}>
                <img className="main-view-poster" src={props.poster_path} alt="movie poster with title and details for show times"/>
                <h2>{props.title}</h2>
                <p className='card-details'>{`🍏 Rating: ${props.average_rating.toFixed(0)} / 10 `}</p>
            </div>
       </NavLink>
    )
}

export default Card
