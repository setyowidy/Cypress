
describe('my first test', () => {

    it('verify title - positive', () => {
    cy.visit ("https://jqueryui.com/")
    cy.title ().should('eq','jQuery UI')
    })
})


describe('my second test', () => {

    it('verify title - positive', () => {
    cy.visit ("https://jqueryui.com/demos/")
    cy.title ().should('eq','jQuery UI Demos | jQuery UI')
    })
})

