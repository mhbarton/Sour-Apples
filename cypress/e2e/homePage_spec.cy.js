describe('Sour Apples Home Page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should be able to view the home page and see an individual movie card', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .get('nav').contains('Sour Apples')
    .get('.movie-apple')
    .get('#694919').contains('Money Plane')
    .get('img')
    .get('p.card-details').contains('Rating: 7 / 10')
    .get('#694919').trigger('mouseover')
  });

  it('Should be able to able to search and clear selections', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .get('input').type('Mon')
    .get('.search').contains('Search').click()
    .get('#694919').contains('Money Plane')
    .get('.clear').contains('Clear').click()
    .get('.home-icon').click()
  });

  it('Should be able to able to give the user an error message if no searched movies are found', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .get('input').type('Mn')
    .get('.search').contains('Search').click()
    .get('h3').contains('Oops! No apples found!')
    
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
