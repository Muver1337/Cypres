describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.wait(1000);
    cy.get('.sticky-header__menu-icon').click().wait(1000);
    cy.visit('https://www.chitai-gorod.ru/delivery');
    cy.get(':nth-child(4) > .delivery-type__name > .delivery-type__title').click({force: true});
    cy.get('.delivery-type__content > .delivery-type-params__detail-button').click({force: true});
    cy.get('.mail-details-modal > .button').click();
  })
})