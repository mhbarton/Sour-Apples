import React, { Component } from "react"
import './App.css';
import movieData from '../movieData.js'
import Movies from '../Movies/Movies'


class App extends Component {
    constructor() {
      super()
      this.state = {
        movieData
      }
    }

    render() {
      return (
        <div>
          <nav>
            <h1 className="nav-title">Sour Apples</h1>
          </nav>
          <main className="App">
            <Movies movies={this.state.movieData.movies}/>
          </main>
        </div>
      )
    }

} 

export default App;
