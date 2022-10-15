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
        singleMovie: null, 
        error: ''
      }
    }

    fetchData = () => {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
            throw new Error('Not a 200 status');
        }
        console.log('getting my data')
        return response.json()
      })
      .then(data => this.setState({movies: data.movies}))
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
            <h1 className="nav-title">Sour Apples</h1>
          </nav>
          <main className="App">
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
