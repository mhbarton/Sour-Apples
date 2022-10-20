import React, { Component } from 'react'
import './SingleMovie.css'

class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
      singleMovie: {},
    }
  }

  showSingleMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
          throw new Error('Not a 200 status', 'undefined');
      } 
      console.log('getting my single data')
      return response.json()
  })
    .then(data => this.setState({singleMovie: data.movie}))
    .catch(error => this.setState({error: error}))
  }

  componentDidMount() {
    const id = this.props.id
    this.showSingleMovie(id)
  }

  render() {
    const singleMovie = this.state.singleMovie
    return (
      this.state.singleMovie ? <div className="single-movie-container">
          <img className="backdrop" src={singleMovie.backdrop_path} alt="movie background"/>
          <article className="article-details">
            <img className="poster hidden" src={singleMovie.poster_path} alt="movie poster with title and details for show times"/>
            <div className="movie-details">
              <h1>{singleMovie.title}</h1>
              <h2 className="tagline">{`${singleMovie.tagline}`}</h2>
              <p className="details">{`${singleMovie.genres}`}</p>
              <div className="minor-details">
                <p className="details">{`🍏 Sour Apples Rating:  ${singleMovie.average_rating} / 10 `}</p>
                <p className='divider hidden'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Release date:  ${singleMovie.release_date}`}</p>
                <p className='divider hidden'>&nbsp;&nbsp; | &nbsp; &nbsp;</p>
                <p className="details">{`Runtime: ${singleMovie.runtime} minutes`}</p>
              </div>
              <p className="details">{`${singleMovie.overview}`} </p>
            </div> 
          </article>
        </div> : <h3>Oops, that was a bad apple, please try again!</h3> )
}
}


export default SingleMovie;
