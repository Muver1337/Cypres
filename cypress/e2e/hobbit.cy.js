describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/')
    cy.get('.catalog__button').click();
    cy.wait(1000);
    cy.get('.ic-close').click();
    cy.wait(1000);
    cy.get('[href="/events/tolkin"]')
    cy.visit('www.chitai-gorod.ru/events/tolkin');
    cy.wait(600);
    cy.get('.welcome__go-button').click();
    cy.wait(600);
    cy.get('.tolkin-help__person').click();
    cy.wait(600);
    cy.get('.tolkin-menu__side-list > :nth-child(4)').click();
    cy.wait(600);
    cy.get('[for="filter-item-48"]').click();
    cy.wait(600);
    cy.get(':nth-child(1) > .product-card > .product-card__picture > .product-picture > .product-picture__img').click();
  })
})