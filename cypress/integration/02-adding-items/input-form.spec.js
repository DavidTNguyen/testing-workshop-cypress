describe('Input form', () => {
  // 🥇 - FIND OUT WHAT THIS COMMAND DOES 🥇
  beforeEach(() => {
    cy.seedAndVisit([])
  })

  // ❓ HOW TO SET FOCUS ON AN ELEMENT ❓
  it('focuses input on load', () => {
    // 💁 https://docs.cypress.io/api/commands/focus.html#Usage
    expect(false).to.be.true
  })

  // ❓ HOW CAN I MAKE CYPRESS ENTER A VALUE INTO A TEXTBOX ❓
  it('accepts input', () => {
    // const typedText = 'Buy Milk'
    // ❓ WHAT IS THE SELECTOR TO GET A HOLD OF THE TEXTBOX ❓
    // ❓ WHAT IS THE COMMAND TO ACHIVE THE OBJECT
    // 💁 https://docs.cypress.io/api/commands/type.html#Syntax
    expect(false).to.be.true
  })

  context('Form submission', () => {
    beforeEach(() => {
      cy.server()
    })

    // ❓ WHAT is the JSON Payload for ADDing a new item ❓
    // 
    it('Adds a new todo on submit', () => {
      expect(false).to.be.true
    })

    // ❓ HOW TO MOCK A 500 ERROR ❓
    // ❓ WHAT DOES THE UI LOOK AND BEHAVE ❓
    it('Shows an error message on a failed submission', () => {
      expect(false).to.be.true
    })
  })
})
