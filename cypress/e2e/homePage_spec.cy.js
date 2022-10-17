describe('Sour Apples Home Page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should be able to view the home page', () => {
    cy.get('nav').contains('Sour Apples')
    .get('.movie-apple')
    .get('.movies-container')
    .get('.movies-container').find('.card')
    .get('.movies-container').find('.card:nth-child(1)')
  })
  it('Should be be able view an individual movie card within the movie container', () => {
    cy.get('.card')
    .get('img')
    .get('h2').contains('Money Plane')
    .get('p.card-details').contains('Rating: 7 / 10')
    cy.get('.card:nth-child(1)').trigger('mouseover')
  })
  
})