describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get('[href="/bookwatch/"]').click({force: true});
    cy.wait(500);
    cy.get('.content > .action > .agreement > a').click();
    cy.get('.content > .action > .button').click();
  })
})