describe('Blog SPA smoke test', () => {
  it('loads list view and navigates to an article', () => {
    cy.visit('/');
    cy.contains('Created by').should('exist');

    cy.get('a[href^="/article/"]', { timeout: 20000 }).should('exist');
    cy.get('a[href^="/article/"]').first().click();

    cy.url().should('include', '/article/');
    cy.title().should('not.be.empty');

    cy.get('.article-view, article').should('exist');
  });
});
