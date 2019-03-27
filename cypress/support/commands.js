// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('tryToLogin', (email, pw) => {
    cy.get('#email-input').type(email).should('have.value', email)
    cy.get('#password-input').type(pw).should('have.value', pw)
    cy.submit()  
  })
  Cypress.Commands.add('login', () => {
    cy.fixture('Login').as('userFixture')
    cy.get('@userFixture').then(user => {
      cy.get('#email-input').type(user.username).should('have.value', 'noorelazab5@gmail.com')
      cy.get('#password-input').type(user.password).should('have.value', 'noor1371312')
      cy.submit()  
      cy.wait(5000)
  })
})