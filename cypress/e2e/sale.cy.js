describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.visit('https://www.chitai-gorod.ru/promotions');
    cy.wait(1000);
    cy.get(':nth-child(4) > .promotions-card__footer > .promotions-card__title').click({force: true});
    cy.wait(500);
    cy.get(':nth-child(2) > .pagination__text').click();
    cy.get('.scroll-button').click();
  })
})