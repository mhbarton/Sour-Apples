import React, { Component } from "react"
import './App.css';
import movieData from '../movieData.js';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';


class App extends Component {
    constructor() {
      super()
      this.state = {
        movies: movieData.movies
      }
    }

    showSingleMovie = (id) => {
      console.log(this.state.movies)
      const currentMovie = this.state.movies.find(movie => movie.id === id)
      this.setState({
        movies: currentMovie
      })
    }

    goHome = () => {
      this.setState({
        movies: movieData.movies
      })
    }

    render() {
      return (
        <div>
          <nav>
            <h1 className="nav-title">Sour Apples</h1>
          </nav>
          <main className="App">
            {this.state.movies.length > 1 ?
            <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} /> :
            <SingleMovie />}
          </main>
        </div>
      )
    }

}

export default App;
