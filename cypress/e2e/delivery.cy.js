describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.wait(500);
    cy.get('.sticky-header__menu-icon').click({force: true});
    cy.wait(500);
    cy.get('.header-mobile-menu__wrapper > .menu-pages-list > :nth-child(2) > .menu-pages-list__item-link').click({force: true});
    cy.scrollTo(0, 3000);
    cy.get(':nth-child(4) > .delivery-type__name > .delivery-type__title').click({force: true});
    cy.get('.delivery-type__content > .delivery-type-params__detail-button').click({force: true});
    cy.wait(500);
    cy.get('.mail-details-modal > .button').click();
  })
})