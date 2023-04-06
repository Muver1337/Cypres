describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.visit('https://www.chitai-gorod.ru/bookwatch/');
    cy.get('.content > .action > .agreement > a').click({force: true});
    cy.scrollTo(6000);
  })
})