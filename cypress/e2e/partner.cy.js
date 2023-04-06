describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.chitai-gorod.ru/');
    cy.wait(1000);
    cy.scrollTo(0, 9000);
    cy.get('.main-articles > .card-slider > .embla > .embla__viewport > .embla__container > :nth-child(2) > .content-card__title').click();
    cy.wait(1000);
    cy.scrollTo(0, 1500);
    cy.get(':nth-child(2) > .article-book > .article-book__content > .article-book__footer > .product-buttons > .action-button > .action-button__text').click({force: true});
    cy.wait(1000);
    cy.get('.dialog-preorder__button--close > span').click();
  })
})