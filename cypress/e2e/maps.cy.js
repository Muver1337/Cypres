describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.wait(500);
    cy.get('.sticky-header__menu-icon').click({force: true});
    cy.wait(500);
    cy.get('.header-mobile-menu__wrapper > .menu-pages-list > ' +
        ':nth-child(1) > .menu-pages-list__item-link').click({force: true});
  })
})