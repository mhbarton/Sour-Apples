import React from 'react'
// import movieData from '../movieData.js'
// import Card from '../Card/Card'
import home from "../images/home.png"
import './SingleMovie.css'

const SingleMovie = ({ movies }) => {
  const {title, backdrop_path, poster_path, release_date, average_rating, goHome} = movies
    return (
        <div>
          <img src={backdrop_path} alt="movie background"/>
          <img src={poster_path} alt="movie poster with title and details for show times"/>
          <h1>{title}</h1>
          <h2>Some tagline</h2>
          <p>Genre</p>
          <p>{`Release date:  ${release_date}`}</p>
          <p>{`🍏 Sour Apples Rating:  ${average_rating.toFixed(0)} / 10 `}</p>
          <p>"Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"</p>
          <img src={home} onClick={() => goHome()}/>
        </div>
    )
}

export default SingleMovie;
