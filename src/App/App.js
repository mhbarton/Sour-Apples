import React, { Component } from "react"
import './App.css';
// import movieData from '../movieData.js';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';


class App extends Component {
    constructor() {
      super()
      this.state = {
        movies: [],
        singleMovie: null
      }
    }

    fetchData = () => {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => console.log(error, 'An error has occurred'))
    }

    showSingleMovie = (id) => {
      const currentMovie = this.state.movies.find(movie => movie.id === id)
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${currentMovie.id}`)
      .then(response => response.json())
      .then(data => this.setState({singleMovie: data.movie}))
      .catch(error => console.log(error, 'An error has occurred'))
     
    }

    componentDidMount() {
      this.fetchData()
  
    }

    goHome = () => {
    this.setState({
      singleMovie: null
    })
    }

    render() {
      console.log(this.state.singleMovie)
      return (
        <div>
          <nav>
            <h1 className="nav-title">Sour Apples</h1>
          </nav>
          <main className="App">
            {this.state.singleMovie
            ? <SingleMovie singleMovie={this.state.singleMovie} goHome={this.goHome} />
            : <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />}
          </main>
        </div>
      )
    }

}

export default App;
