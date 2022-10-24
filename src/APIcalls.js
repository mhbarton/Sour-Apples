const fetchData = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (!response.ok) {
          throw new Error('Not a 200 status')
      }
      return response.json()
    })
  };

  const showSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
          throw new Error('Not a 200 status')
      }
      return response.json()
    })
  };

  export { fetchData, showSingleMovie }