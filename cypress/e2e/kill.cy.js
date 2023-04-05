describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get('[href="/events/detectives/"] > .main-information-block__body > .app-title').click({force: true});
    cy.wait(500);
    cy.get('.persons > :nth-child(1)').click();
    cy.get('.persons > :nth-child(2)').click();
  })
})