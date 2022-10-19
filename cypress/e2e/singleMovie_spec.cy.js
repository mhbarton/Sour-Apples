describe('Sour Apples Single Movie flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919')
  })
  it('Should be able to view the single movie page', () => {
    cy.get('nav').find('.nav-title').contains('Sour Apples')
    .get('nav').find('.movie-apple')
    .get('nav').find('.home-icon')
    .get('.article-details').find('.poster')
    .get('.movie-details').find('h1').contains('Money Plane')
    .get('.movie-details').find('.details').contains('Action')
    .get('.movie-details').find('.details').contains('Sour Apples Rating: 7 / 10')
    .get('.movie-details').find('.details').contains('Release date: 2020-09-29')
    .get('.movie-details').find('.details').contains('Runtime: 82 minutes')
    .get('.movie-details').find('.details').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
    .get('nav').find('.home-icon').click()
  })
  it('Should be able to click the home icon and return to the home page', () => {
    
  })
})