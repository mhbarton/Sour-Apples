import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: null,
    }
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value})
  };

//   searchMovies(event) {
//     const allMovies = movies
//     console.log('jello', movies)
//     const filteredMovies = movies.filter(movie => {
//       return movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
//   })
// }

  render() {
    return (
      <div>
        <form className='form' onSubmit={(event) => {
          event.preventDefault()
          this.props.searchForMovie(this.state.searchInput)
        }}>
          <input
          type="text"
          placeholder="search here"
          name='search'
          onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </div>
    )

  }

};

export default Search;
