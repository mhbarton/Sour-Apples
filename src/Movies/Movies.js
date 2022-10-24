import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({ movies, searchMovie}) => {
let displayCards;
    if (searchMovie !== '') {
        displayCards = movies.filter((movie) => movie.title.toLowerCase().startsWith(searchMovie.toLowerCase())
    )
    } else {
        displayCards = movies
    }

  
const movieData = displayCards.map(movie => {

        return (
            <Card
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                average_rating={movie.average_rating}
                id={movie.id}
                key={movie.id}
            />
        )
    })

    return (
        <div className='movies-container'>
            {movieData.length ? movieData : <h3>Oops!  No apples found!</h3>}
        </div>
    )
}

export default Movies
