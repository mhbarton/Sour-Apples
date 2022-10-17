import React from 'react'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie }) => {
  const {title, backdrop_path, poster_path, tagline, genres, release_date, average_rating, runtime, overview} = singleMovie
    return (
        <div>
          <img className="backdrop" src={backdrop_path} alt="movie background"/>
          <article className="article-details">
            <img className="poster hidden" src={poster_path} alt="movie poster with title and details for show times"/>
            <div className="movie-details">
              <h1>{title}</h1>
              <h2 className="tagline">{`${tagline}`}</h2>
              <p className="details">{`${genres[0]}`}</p>
              <div className="minor-details">
                <p className="details">{`🍏 Sour Apples Rating:  ${average_rating.toFixed(0)} / 10 `}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Release date:  ${release_date}`}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Runtime: ${runtime} minutes`}</p>
              </div>
              <p className="details">{`${overview}`}</p>
            </div>
          </article>
        </div>
    )
}

export default SingleMovie;
