import React from 'react'
// import movieData from '../movieData.js'
// import Card from '../Card/Card'
import home from "../images/home.png"
import './SingleMovie.css'

const SingleMovie = ({ movies, goHome }) => {
  const {title, backdrop_path, poster_path, release_date, average_rating} = movies
    return (
        <div>
          <img role="button" className="home-icon" src={home} onClick={() => goHome()} alt="Home icon to take user back to main view"/>
          <img className="backdrop" src={backdrop_path} alt="movie background"/>
          <article className="article-details">
            <img className="poster" src={poster_path} alt="movie poster with title and details for show times"/>
            <div className="movie-details">
              <h1>{title}</h1>
              <h2 className="tagline">Some tagline</h2>
              <p className="details">Genre</p>
              <p className="details">{`Release date:  ${release_date}`}</p>
              <p className="details">{`🍏 Sour Apples Rating:  ${average_rating.toFixed(0)} / 10 `}</p>
              <p className="details">"Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"</p>
            </div>
          </article>
        </div>
    )
}

export default SingleMovie;
