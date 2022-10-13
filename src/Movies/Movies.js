import React from 'react'
// import movieData from '../movieData.js'
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({ movies }) => {

    const movieData = movies.map(movie => {
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
            {movieData}
        </div>
    )
}

export default Movies