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
          <button className="search" disabled={!this.state.searchInput}>Search</button>
          <button className="clear" onClick={() => this.clearSearchInput()}>Clear</button>
        </form>
      </div>
    )

  }

};

export default Search;
