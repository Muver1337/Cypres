describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.get('.catalog__button > span').click();
    cy.wait(1000);
    cy.get('.categories-list > :nth-child(3)').click();
    cy.wait(1000);
    cy.get('.categories-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.get('.categories-list > :nth-child(2)').click();
    cy.wait(500);
    cy.get('.categories-list > :nth-child(7)').click();
    cy.get('.catalog-list-head__right > .availability-filter > .toggle-button > .toggle-button__circle').click({force: true});
    cy.wait(1000);
    cy.get('[data-chg-product-id="2962922"] > .product-card__picture > .product-picture > .product-picture__img').click({force: true});
  })
})