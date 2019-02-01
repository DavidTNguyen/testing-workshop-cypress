/// <reference types="cypress" />
beforeEach(() => {
  cy.clearLocalStorage()
})
beforeEach(() => {
  cy.visit('/')
})
it('loads', () => {
  cy.contains('h1', 'todos')
})
/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('adds two items', () => {
  addItem('first item')
  addItem('second item')
  cy.get('[data-cy="item"]').should('have.length', 2)
})
