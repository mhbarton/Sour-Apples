import React, { Component } from "react";
import './App.css';
// import movieData from '../movieData.js
import apple from "../images/apple.png";
import home from "../images/home.png";
import movieapple from "../images/movie-apple1.svg";
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';


class App extends Component {
    constructor() {
      super()
      this.state = {
        movies: [],
        singleMovie: null,
        error: '',
        loading: false
      }
    }

    fetchData = () => {
      this.setState({loading: true})
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
            throw new Error('Not a 200 status');
        }
        console.log('getting my data')
        return response.json()
      })
      .then(data => this.setState({
          loading: false,
          movies: data.movies
        }))
      .catch(error => this.setState({error: error}))
    }

    showSingleMovie = (id) => {
      const currentMovie = this.state.movies.find(movie => movie.id === id)
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${currentMovie.id}`)
      .then(response => {
        if (!response.ok) {
            throw new Error('Not a 200 status');
        }
        console.log('getting my data')
        return response.json()
    })
      .then(data => this.setState({singleMovie: data.movie}))
      .catch(error => this.setState({error: error}))
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
      return (
        <div>
          <nav>
            <img className="movie-apple" src={movieapple} alt="apple with movie icon inside" />
            <h1 className="nav-title">Sour Apples</h1>
            {this.state.singleMovie && <img role="button" className="home-icon" src={home} onClick={() => this.goHome()} alt="Home icon to take user back to main view"/>}
          </nav>
          <main className="App">
            {this.state.loading && <p className="apple-loader-text"> Loading your sour apples...</p>}
            {this.state.loading && <img src={apple} className="apple-loader" alt="apple loader" />}
            {this.state.error && <h3>Oops, that was a bad apple, please try again!</h3> }
            {this.state.singleMovie
            ? <SingleMovie singleMovie={this.state.singleMovie} goHome={this.goHome} />
            : <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} />}
          </main>
        </div>
      )
    }

}

export default App;
