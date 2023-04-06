describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.wait(1000);
    cy.get('.sticky-header__menu-icon').click().wait(1000);
    cy.wait(1000);
    cy.contains('Доставка и оплата').click();
    cy.get('[href="/promotions"]').click({force: true});
  })
})