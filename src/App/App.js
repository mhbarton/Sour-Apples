import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import home from "../images/home.png";
import './App.css';
import apple from "../images/apple.png";
import movieapple from "../images/movie-apple1.svg";
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import Search from '../Search/Search';


class App extends Component {
    constructor() {
      super()
      this.state = {
        movies: [],
        error: '',
        loading: false,
        searchMovie: ''
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

    componentDidMount() {
      this.fetchData()

    }

    searchForMovie = (input) => {
      this.setState({ searchMovie: input })
    }

    clearInputs = () => {
      this.setState({ searchMovie: '' })
      this.fetchData()
    }

    render() {
      return (
        <div>
          <nav>
            <Search searchForMovie={this.searchForMovie}/>
            <img className="movie-apple hidden" src={movieapple} alt="apple with movie icon inside" />
            <h1 className="nav-title">Sour Apples</h1>
            <NavLink to='/'><img role="button" className="home-icon" src={home}
            alt="Home icon to take user back to main view" onClick={() => this.clearInputs()}/></NavLink>
          </nav>
          <main className="App">
            {this.state.loading && <p className="apple-loader-text"> Loading your sour apples...</p>}
            {this.state.loading && <img src={apple} className="apple-loader" alt="apple loader" />}
            {this.state.error && <h3>Oops, that was a bad apple, please try again!</h3> }
            <Route exact path='/' render={() =>  <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie} searchMovie={this.state.searchMovie}/> } />
            <Route exact path='/:id' render={({ match }) => <SingleMovie id={match.params.id}/> }  />
          </main>
          <footer>
            <h4> 🍏 Created by Beth and Marianne </h4>
          </footer>
        </div>
      )
    }
}

export default App;
