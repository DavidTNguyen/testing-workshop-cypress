/// <reference types="cypress" />
beforeEach(() => {
  // 🚀 this is possible only with this package installed as middleware
  // ☘️ https://github.com/bahmutov/json-server-reset
  cy.request('POST', '/reset', {
    todos: []
  })
  cy.visit('localhost:3000')
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
