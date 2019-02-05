describe('App initialization', () => {
  it('Loads todos on page load', () => {
    cy.seedAndVisit()

    cy.get('.todo-list li')
      .should('have.length', 4)
  })

  it('Displays an error on failure', () => {
    cy.server() // enable response stubbing
    cy.route({
      method: 'GET', // Route all GET requests
      url: '/api/todos', // that have a URL that matches '/api/todos'
      status: 500, // Force a 500
      response: {}
    })
    cy.visit('/')

    cy.get('.todo-list li')
      .should('not.exist')

    cy.get('.error')
      .should('be.visible')
  })
})
