import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({ movies, showSingleMovie }) => {

    const movieData = movies.map(movie => {
        return (
            <Card
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                average_rating={movie.average_rating}
                id={movie.id}
                key={movie.id}
                showSingleMovie={showSingleMovie}
               
            />
        )
    })

    return (
        <div className='movies-container'>
            {movieData}
        </div>
    )
}

export default Movies
