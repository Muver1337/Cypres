describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get('.catalog__button').click();
    cy.wait(1000);
    cy.get(':nth-child(7) > .link-block').click();
    cy.wait(1000);
    cy.get('.child-category-name').click();
  })
})