import React from 'react'
import './SingleMovie.css'

const SingleMovie = ( props ) => {
  // const {title, backdrop_path, poster_path, tagline, genres, release_date, average_rating, runtime, overview} = singleMovie
 
    return (
        <div>
          <img className="backdrop" src={props.singleMovie.backdrop_path} alt="movie background"/>
          <article className="article-details">
            <img className="poster hidden" src={props.singleMovie.poster_path} alt="movie poster with title and details for show times"/>
            <div className="movie-details">
              <h1>{props.singleMovie.title}</h1>
              <h2 className="tagline">{`${props.singleMovie.tagline}`}</h2>
              <p className="details">{`${props.singleMovie.genres}`}</p>
              <div className="minor-details">
                <p className="details">{`🍏 Sour Apples Rating:  ${props.singleMovie.average_rating} / 10 `}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Release date:  ${props.singleMovie.release_date}`}</p>
                <p className='divider'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Runtime: ${props.singleMovie.runtime} minutes`}</p>
              </div>
              <p className="details">{`${props.singleMovie.overview}`}</p>
            </div>
          </article>
        </div>
    )
}

export default SingleMovie;
