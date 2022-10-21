import React, { useState } from 'react';
import Card from '../Card/Card';
import './Search.css';

const Search = ({ movies }) => {
  const [searchInput, setSearchInput] = useState('');
  const allMovies= { movies }
  console.log('testing', allMovies)

  const handleChange = (e) => {
  // e.preventDefault();
  const {title} = e.target
  setSearchInput(e.target.value);
};

const filteredMovies = !searchInput
    ? allMovies
    : allMovies.movies.filter((movie) =>
        movie.title.includes(searchInput)
      );
return (
    <div>
      <label htmlFor="Search"> Search by Title </label>
      <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
    </div>
  )
}



export default Search;
