describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get('.catalog__button').click();
    cy.wait(1000);
    cy.visit('https://www.chitai-gorod.ru/catalog/rasprodazha');
    cy.wait(1000);
    cy.get('[data-chg-product-id="7570344"] > .product-card__picture > .product-picture > .product-picture__img').click();
  })
})