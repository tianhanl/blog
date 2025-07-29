describe('Blog Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the blog title and navigation', () => {
    cy.contains("TL's Blog");
    cy.get('nav a[href*="github.com"]').should('be.visible');
  });

  it('should load the React application structure', () => {
    cy.get('#app').should('be.visible');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('should display loading state initially', () => {
    cy.visit('/');
    cy.get('.loading').should('be.visible');
  });

  it('should handle routing correctly', () => {
    cy.visit('/article/77');
    cy.url().should('include', '/article/77');
  });

  it('should return to home from article route', () => {
    cy.visit('/article/77');
    cy.get('.blog-title a').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
