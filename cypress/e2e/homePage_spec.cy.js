describe('Sour Apples Home Page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should be able to view the home page and see an individual movie card', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .get('nav').contains('Sour Apples')
    .get('.movie-apple')
    .get('.movies-container')
    .get('#694919').contains('Money Plane')
    .get('img')
    .get('p.card-details').contains('Rating: 7 / 10')
    .get('#694919').trigger('mouseover')
  });
  
  it('Should show an error message if the response is not ok', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    },
    {
      statusCode: 401,
      body: {
        message: 'Oops, that was a bad apple, please try again!'
      }
    }
  )
});

});
