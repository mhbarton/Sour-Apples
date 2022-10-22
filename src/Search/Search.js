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
    this.setState({ searchInput: event.target.value })
  };

  clearSearchInput = () => {
    this.setState({ searchInput: '' })
    this.form.reset()
  }

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
        <form ref={form => this.form = form} className='form' onSubmit={(event) => {
          event.preventDefault()
          this.props.searchForMovie(this.state.searchInput)
        }}>
          <input
          type="text"
          placeholder="Search Movie Title"
          name='search'
          onChange={this.handleChange}
          />
          <button>Search</button>
          <button onClick={() => this.clearSearchInput()}>Clear</button>
        </form>
      </div>
    )

  }

};

export default Search;
