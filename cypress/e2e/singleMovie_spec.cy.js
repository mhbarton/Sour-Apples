describe('Sour Apples Single Movie flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919')
  })
  it('Should be able to view the single movie page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
    .get('nav').find('.nav-title').contains('Sour Apples')
    .get('nav').find('.movie-apple')
    .get('nav').find('.home-icon')
    .get('.article-details').find('.poster')
    .get('.movie-details').contains('Money Plane')
    .get('.movie-details').contains('Action')
    .get('.movie-details').contains('Sour Apples Rating: 6 / 10')
    .get('.movie-details').contains('Release date: 2020-09-29')
    .get('.movie-details').contains('Runtime: 82 minutes')
    .get('.movie-details').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
  })
  it('Should be able to click the home icon and return to the home page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
        .get('nav').find('.home-icon').click()
  })
})
