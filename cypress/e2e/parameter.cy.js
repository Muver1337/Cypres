describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get(':nth-child(1) > .product-card > .product-card__picture > .product-picture > .product-picture__img').click({force: true});
    cy.wait(500);
    cy.get('.product-detail-offer-header__actions > .product-buttons > .favorite-button').click({force: true});
    cy.wait(500);
    cy.get('.modal__close').click();
    cy.get('.product-detail-offer-header__actions > .product-buttons > .action-button').click({force: true});
    cy.wait(500);
    cy.scrollTo(0, 700);
    cy.get('.product-detail-tabs-header > :nth-child(2)').click({force: true});
  })
})