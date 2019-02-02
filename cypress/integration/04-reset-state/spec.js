/// <reference types="cypress" />
beforeEach(() => {
  // ❓ IS THIS THE CORRECT WAY ❓
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
  // ❓ IS THERE A BETTER SELECTOR ❓
  cy.get('li.todo').should('have.length', 2)
})
