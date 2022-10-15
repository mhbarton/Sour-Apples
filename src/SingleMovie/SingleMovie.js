import React from 'react'
import home from "../images/home.png"
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, goHome }) => {
  const {title, backdrop_path, poster_path, tagline, genres, release_date, average_rating, runtime, overview} = singleMovie
    return (
        <div>
          <img role="button" className="home-icon" src={home} onClick={() => goHome()} alt="Home icon to take user back to main view"/>
          <img className="backdrop" src={backdrop_path} alt="movie background"/>
          <article className="article-details">
            <img className="poster" src={poster_path} alt="movie poster with title and details for show times"/>
            <div className="movie-details">
              <h1>{title}</h1>
              <h2 className="tagline">{`${tagline}`}</h2>
              <p className="details">{`${genres[0]}`}</p>
              <div className="minor-details">
                <p className="details">{`🍏 Sour Apples Rating:  ${average_rating.toFixed(0)} / 10 `}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Release date:  ${release_date}`}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Runtime: ${runtime}`}</p>
              </div>
              <p className="details">{`${overview}`}</p>
            </div>
          </article>
        </div>
    )
}

export default SingleMovie;
